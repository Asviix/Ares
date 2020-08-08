exports.run = async (client, lang, message, args) => {
  const msg = await message.channel.send("Ping?");
  msg.edit(`${lang.PING} ${msg.createdTimestamp - message.createdTimestamp}ms.\n ${lang.PING2} ${new Date - client.start}ms ${lang.PING3}`);
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "ping",
  module: "General",
};