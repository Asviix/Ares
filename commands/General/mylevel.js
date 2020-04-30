exports.run = async (client, lang, message, args) => {
  client.db.query(`SELECT * FROM \`staff\` WHERE \`id\` = ${message.author.id}`, (err, result) => {
    let level;
    if (result.length == "0") {
      level = 0
    } else {
      level = result[0].level;
    };

    message.reply(`${lang.level_1} ${level}`)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mylevel",
  module: "General",
};