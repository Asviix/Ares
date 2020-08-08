exports.run = async (client, lang, message, args) => {
  await message.reply("Bot is shutting down.");
  await client.status_channel.setName("status-❌")

  await client.db.query(`SELECT * FROM \`servers\` WHERE \`logs_int\` != 0`, (err, result) => {
    if(err) client.logger.error(`There was an error ! ${err}`);
    if (result.length == 0) return;

    let i;
    for (i = 0; i < result.length; i++) {
      
      let guild = client.guilds.cache.find(guild => guild.id == result[i].id);
      let channel = guild.channels.cache.find(channel => channel.id == result[i].logs_int);
      if (channel == undefined) return;

      channel.send(`\`\`\`asciidoc\n= Bot Shutting Down =\n\`\`\``);
    };
  });
  
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 10,
};

exports.help = {
  name: "reboot",
  module: "System",
};