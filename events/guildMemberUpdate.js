module.exports = (client, oldMember, newMember) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${newMember.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`) || require("../languages/en");
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (!logs_int.slice(lang.LOGS_MEMBERS_MODIFIER, lang.LOGS_GUILD_MODIFIER).some(int => int == 1)) return;

    let embed = new MessageEmbed()
      .setTitle(lang.MEMBER_UPDATE)
      .setColor(`#3B95EA`)
      .setTimestamp()
      if (await checkChange("nickname") && logs_int[lang.LOGS_MEMBERS_MODIFIER + 2] == 1) embed.addField(lang.MEMBER_NICKNAME_UPDATE, `${lang.FROM} \`${oldMember.nickname}\` ${lang.TO} \`${newMember.nickname || newMember.user.username}\``);
      if (await checkChange("user.avatar") && logs_int[lang.LOGS_MEMBERS_MODIFIER + 3] == 1) embed.addField(lang.MEMBER_AVATAR_UPDATE, `${lang.FROM} \`${oldMember.user.avatarURL}\` ${lang.TO} \`${newMember.user.avatarURL}\``);
      if (await checkChange("user.username") && logs_int[lang.LOGS_MEMBERS_MODIFIER + 4] == 1) embed.addField(lang.MEMBER_USERNAME_UPDATE, `${lang.FROM} \`${oldMember.user.username}\` ${lang.TO} \`${newMember.user.username}\``);
      if (await checkChange("user.tag") && logs_int[lang.LOGS_MEMBERS_MODIFIER + 5] == 1) embed.addField(lang.MEMBER_USERNAME_UPDATE, `${lang.FROM} \`${oldMember.user.tag}\` ${lang.TO} \`${newMember.user.tag}\``);

    if (embed.fields.length == 0) return;
    if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
    client.channels.cache.find(channel => channel.id == logs_id).send(embed);
  });

  async function checkChange(parameter) {
    if (eval(`oldMember.${parameter} == newMember.${parameter}`)) {
      return false;
    } else {
      return true;
    };
  };
};