exports.run = (client, lang, message, args) => {
  if (args.length == 0) return message.channel.send(lang.LANGUAGE_ERROR_NO_ARGS);
  if (args[0] == client.language) return message.channel.send(lang.LANGUAGE_DONE);
  if (!['fr', 'en'].includes(args[0])) return message.channel.send(lang.LANGUAGE_ERROR_INVALID);

  message.channel.send(lang.LANGUAGE_SAVING).then(msg => {
    client.updateLang(message.guild.id, args[0]);
    msg.edit(`${lang.LANGUAGE_DONE} \`${eval(`lang.LANGUAGE_OUTPUT.${args[0]}`)}\``);
  });
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: true,
  aliases: ["lang"],
  permLevel: 3,
};

exports.help = {
  name: "language",
  module: "Config",  
};