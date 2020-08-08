exports.run = async (client, lang, message, args) => {
  if (args.length == '0') return message.channel.send(lang.LEVELS_ERROR_ARGS);
  if (args[0].includes([1, 2, 3])) return message.channel.send(lang.LEVELS_ERROR);
  message.channel.send(eval(`lang.levels_${args[0]}`));
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "levels",
  module: "General",
};