exports.run = async (client, lang, message, args) => {
  if (!client.level >= 9) return message.channel.send(lang.ERROR_PERMLEVEL);
  if (!args) return message.channel.send(lang.COMMAND_ERROR_ARGS);
  if (client.commands.has(command => command.help.name != args[0])) return message.channel.send(lang.COMMAND_ERROR_NOTACOMMAND);

  let cmd = client.commands.find(command => command.help.name == args[0]);
  if (cmd.conf.enabled == true) {
    let response = await client.awaitReply(message, lang.COMMAND_REASON_QUESTION);

    cmd.conf.enabled = false;
    cmd.conf.reason = response || "";

    return message.channel.send(lang.COMMAND_DISABLED_DONE.replace("COMMAND1", cmd.help.name));

  } else {
    cmd.conf.enabled = true;
    cmd.conf.reason = "";
    
    return message.channel.send(lang.COMMAND_ENABLED_DONE.replace("COMMAND1", cmd.help.name));
  }
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 10,
};

exports.help = {
  name: "command",
  module: "System",
};