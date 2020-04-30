exports.run = async (client, lang, message, args) => {

  message.channel.send(`${lang.credits_TITLE}\n\n${lang.credits_FIELD_1_TITLE}\n${lang.credits_FIELD_1}\n\n${lang.credits_FIELD_2_TITLE}\n${lang.credits_FIELD_2}\n\n${lang.credits_FOOTER} https://discord.gg/2N88pTE https://discordapp.com/oauth2/authorize?client_id=694898754121367562&scope=bot&permissions=8`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "credits",
  module: "General",
};