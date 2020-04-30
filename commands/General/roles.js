exports.run = async (client, lang, message, args) => {
  let content = [lang.roles_1]

  await message.guild.roles.cache.every(role => content.push(`- ${role.name}: ${role.members.size}`))
  await content.push("\n```")

  message.channel.send(content)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "roles",
  module: "General",
};