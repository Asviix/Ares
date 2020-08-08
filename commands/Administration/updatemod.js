exports.run = async (client, lang, message, args) => {
  if (message.mentions.length == 0) return message.channel.send(lang.UPDATEMOD_ERROR_PING);

  client.db.query(`SELECT * FROM \`staff\` WHERE \`id\` = ${(message.mentions.members.first()).id} AND \`guild_id\` = ${message.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);

    if (result.length == "0") {
      level = 0;
    } else {
      level = result[0].level;
    };

    if (level == 0) return message.channel.send(lang.UPDATEMOD_ERROR_LEVEL);
    let response = await client.awaitReply(message, lang.UPDATEMOD_LEVEL_QUESTION);

    if (level <= response) return message.channel.send(lang.UPDATEMOD_ERROR_LEVEL2);

    message.channel.send(lang.UPDATEMOD_UPDATING).then(msg => {
      client.updateStaff((message.mentions.members.first()).id, message.guild.id, response);
      msg.edit(lang.UPDATEMOD_LEVEL_DONE);
    });
  });
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: true,
  aliases: ["umod"],
  permLevel: 3,
};

exports.help = {
  name: "updatemod",
  module: "Administration",
};