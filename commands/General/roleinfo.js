exports.run = async (client, lang, message, args) => {
  const { MessageEmbed } = require("discord.js");
  moment = require("moment");
  if (!args) return message.channel.send(lang.role_ERROR_ARGS);
  if (!message.guild.roles.cache.find(role => role.name.toLowerCase() == args[0].toLowerCase())) return message.channel.send(lang.roleinfo_ERROR_NAME);

  let role = message.guild.roles.cache.find(role => role.name.toLowerCase() == args[0].toLowerCase());
  const date = `${moment(role.createdAt.getTime()).format("YYYY-MM-DD HH:mm:ss")}`;

  const embed = new MessageEmbed()
    .setTitle(role.name)
    .setColor(role.hexColor)
    .addFields(
      {name: `Date of creation`, value: date},
      {name: `Color (Hex)`, value: role.hexColor},
      {name: `--------------`, value: `\u200b`},
      {name: `Numbers of Members`, value:role.members.size},
      {name: `Hoisted ?`, value: role.hoist},
      {name: `Role ID`, value: role.id},
    )

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rinfo"],
  permLevel: 0,
};

exports.help = {
  name: "roleinfo",
  module: "General",
};