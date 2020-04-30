exports.run = async (client, lang, message, args) => {
  if (!args[0]) return message.channel.send(lang.uplogs_ERROR_ARGS);
  if (message.guild.channels.resolve(args[0]) == undefined) return message.channel.send(lang.uplogs_ERROR_ARGS1);

  let channel = message.guild.channels.resolve(args[0]);
  message.channel.send(lang.uplogs_SAVING).then(msg => {
    client.updateLogsID(channel.id, message.guild.id);
    msg.edit(lang.uplogs_SAVED);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: "uplogs",
  module: "Config",
};