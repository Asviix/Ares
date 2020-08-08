module.exports = (client, invite) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${invite.guild.id || invite.channel.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_INVITES_MODIFIER + 1]) {
      let embed = new MessageEmbed()
        .setTitle(lang.LOGS_INVITES_DELETED)
        .setColor(`#3B95EA`)
        .addField(lang.LOGS_INVITE_CODE, invite.code)
        embed.setFooter(`${lang.LOGS_INVITES_DELETED_DATE} ${moment().format("YYYY-MM-DD HH:mm")}`)
        
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};