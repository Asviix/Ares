exports.run = async (client, lang, message, args) => {
  let end = new Date - client.start;
  const msg = await message.channel.send("Ping?");
  msg.edit(`${lang.ping} ${msg.createdTimestamp - message.createdTimestamp}ms.\n ${lang.ping2} ${end}ms ${lang.ping3}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "ping",
  module: "General",
};