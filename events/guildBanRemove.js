module.exports = (client, guild, user) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_BANS_MODIFIER + 1] == 1) {
      let embed = new MessageEmbed()
        .setTitle(lang.BAN_REMOVED)
        .setColor(`#ba0000`)
        .addFields(
          {name: lang.BAN_USER, value: user.username, inline: true},
        )
        .setTimestamp();
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};