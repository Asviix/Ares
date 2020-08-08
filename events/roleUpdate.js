module.exports = (client, oldRole, newRole) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${oldRole.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (new Date - oldRole.createdTimestamp < 30000) {
      if (logs_int[lang.LOGS_ROLES_MODIFIER]) {
        let embed = new MessageEmbed()
          .setTitle(lang.LOGS_ROLE_CREATED)
          .setColor(`#3B95EA`)
          .addField(lang.LOGS_ROLE_NAME, newRole.name)
          .addField(lang.LOGS_ROLE_CREATED_AT, moment(oldRole.createdAt).format("YYYY-MM-DD HH:mm"))
        
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
      };
    };

    if (new Date - oldRole.createdTimestamp >= 30000) {
      if (logs_int[lang.LOGS_ROLES_MODIFIER]) {
        let embed = new MessageEmbed()
          .setTitle(lang.LOGS_ROLE_UPDATED)
          .setColor(`#3B95EA`)
          .addField(`${lang.LOGS_ROLE_NAME}`, `\`${newRole.name}\``)
          if (await checkChange("name") && logs_int[lang.LOGS_ROLES_MODIFIER + 4] == 1) embed.addField(lang.LOGS_ROLE_NAME, `${lang.FROM} \`${oldRole.name}\` ${lang.TO} \`${newRole.name}\``)
          if (await checkChange("color") && logs_int[lang.LOGS_ROLES_MODIFIER + 2] == 1) embed.addField(lang.LOGS_ROLE_COLOR, `${lang.FROM} \`${oldRole.color}\` ${lang.TO} \`${newRole.color}\``)
          if (await checkChange("hoist") && logs_int[lang.LOGS_ROLES_MODIFIER + 3] == 1) embed.addField(lang.LOGS_ROLE_HOIST, `${lang.FROM} \`${oldRole.hoist}\` ${lang.TO} \`${newRole.hoist}\``)
          if (await checkChange("position") && logs_int[lang.LOGS_ROLES_MODIFIER + 6] == 1) embed.addField(lang.LOGS_ROLE_POSITION, `${lang.FROM} \`${oldRole.position}\` ${lang.TO} \`${newRole.position}\``)
          if (await checkChange("permissions.bitfield") && logs_int[lang.LOGS_ROLES_MODIFIER + 5] == 1) {
            let newPermissions = new Array();
            newRole.permissions.toArray().forEach(permission => {
              if (!oldRole.permissions.toArray().includes(permission)) {
                newPermissions.push(permission)
              };
            });

            let removedPermissions = new Array();
            oldRole.permissions.toArray().forEach(permission => {
              if (!newRole.permissions.toArray().includes(permission)) {
                removedPermissions.push(permission)
              };
            });

            if (newPermissions.length != 0) embed.addField(lang.LOGS_ROLE_NEW_PERMS, "- " + newPermissions.join("\n -"))
            if (removedPermissions.length != 0) embed.addField(lang.LOGS_ROLE_REMOVED_PERMS, "- " + removedPermissions.join("\n -"))
          };
        
      if (embed.fields.length == 0) return;
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
      };
    }
  });

  async function checkChange(parameter) {
    if (eval(`oldRole.${parameter} == newRole.${parameter}`)) {
      return false;
    } else {
      return true;
    };
  };
};