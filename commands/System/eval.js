exports.run = async (client, lang, message, args) => {
  const code = args.join(" ");
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
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
  name: "eval",
  module: "System",
};