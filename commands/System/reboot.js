exports.run = async (client, lang, message, args) => {
  await message.reply("Bot is shutting down.");
  await client.status_channel.setName("status-❌")
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 10,
};

exports.help = {
  name: "reboot",
  module: "System",
};