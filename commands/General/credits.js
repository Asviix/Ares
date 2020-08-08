const { MessageEmbed } = require("discord.js");

exports.run = async (client, lang, message, args) => {
  const { MessageEmbed } = require("discord.js");

  let embed = new MessageEmbed()
    .setTitle(`${lang.CREDITS_TITLE}`)
    .setAuthor(message.author.username)
    .setColor(`#3B95EA`)
    .addField(`${lang.CREDITS_FIELD1}`, `Asviix#14934`)
    .addField(`${lang.CREDITS_FIELD2}`, `Néède#3268, Natsukira#0561`)
    .addField(lang.CREDITS_FIELD3, lang.CREDITS_FIELD4)
    .setFooter(`discord.gg/2N88pTE`)

  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "credits",
  module: "General",
};