module.exports = (client, member) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${channel.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_MEMBERS_MODIFIER] == 1) {
      const timestamp = `${moment(member.joinedTimestamp).format("YYYY-MM-DD HH:mm:ss:ms")}`
      let embed = new MessageEmbed()
        .setTitle(eval(lang.MEMBER_JOINED))
        .setColor(`#3B95EA`)
        .addFields(
          {name: lang.MEMBER_NAME, value: member.user.tag, inline: true},
          {name: lang.MEMBER_DATE, value: timestamp, inline: true},
        )
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};