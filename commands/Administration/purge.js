exports.run = async (client, lang, message, args) => {
  await message.channel.messages.fetch();
  if (args.length == 0) return message.channel.send(lang.purge_ERROR_ARGS);
  if (parseInt(args[0] == NaN)) return message.channel.send(lang.purge_ERROR_ARGS_NUMBER);

  let authorsID = args.slice(1);
  let messages;
  if (args[1]) {
    messages = message.channel.messages.cache.filter(message => authorsID.includes(message.author.id))
    messages.first(args[0]);
    await message.channel.bulkDelete(messages);
    
  } else message.channel.bulkDelete(args[0]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p"],
  permLevel: 1,
};

exports.help = {
  name: "purge",
  module: "Administration",
};