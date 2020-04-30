exports.run = (client, lang, message, args) => {
  if (args.length == 0) return message.channel.send(lang.language_ERROR_NO_ARGS);
  if (args[0] == client.language) return message.channel.send(lang.language_DONE);
  if (!['fr', 'en'].includes(args[0])) return message.channel.send(lang.language_ERROR_INVALID);

  message.channel.send(lang.language_SAVING).then(msg => {
    client.updateLang(message.guild.id, args[0]);
    msg.edit(`${lang.language_DONE} \`${eval(`lang.language_OUTPUT.${args[0]}`)}\``);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lang"],
  permLevel: 3,
};

exports.help = {
  name: "language",
  module: "Config",  
};