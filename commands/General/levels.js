exports.run = async (client, lang, message, args) => {
  if (args.length == '0') return message.channel.send(lang.level_ERROR_ARGS);
  message.channel.send(eval(`lang.levels_${args[0]}`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "levels",
  module: "General",
};