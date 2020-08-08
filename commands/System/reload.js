exports.run = async (client, lang, message, args) => {
  if (!args || args.length < 1) return message.reply(lang.RELOAD_ERROR_CONTENT);
  const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
  let response = await client.unloadCommand(args[0], command.help.module);
  if (response) return message.reply(`${lang.RELOAD_ERROR_UNLOAD} ${response}`);

  response = client.loadCommand(command.help.name, command.help.module);
  if (response) return message.reply(`${lang.RELOAD_ERROR_LOAD} ${response}`);

  message.reply(`${lang.RELOAD_1} \`${command.help.name}\` ${lang.RELOAD_2}`);
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 9,
};

exports.help = {
  name: "reload",
  module: "System",
};