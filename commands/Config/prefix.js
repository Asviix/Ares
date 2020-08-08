exports.run = (client, lang, message, args) => {
  if (args.length == 0) return message.channel.send(lang.PREFIX_ERROR_NO_ARGS);
  if (args[0] == client.prefix) return message.channel.send(lang.PREFIX_DONE);

  message.channel.send(lang.PREFIX_SAVING).then(msg => {
    client.updatePrefix(message.guild.id, args[0]);
    msg.edit(`${lang.PREFIX_DONE} \`${args[0]}\``);
  });
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: true,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: "prefix",
  module: "Config",  
};