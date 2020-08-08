module.exports = (client, GuildEmoji) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${GuildEmoji.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_EMOJI_MODIFIER] == 1) {
      let embed = new MessageEmbed()
        .setTitle(lang.GUILDEMOJI_CREATE)
        .setColor(`#3B95EA`)
        .addFields(
          {name: lang.GUILDEMOJI_NAME, value: `\`${GuildEmoji.name}\``, inline: true},
        )
        .setImage(`https://cdn.discordapp.com/emojis/${GuildEmoji.id}.png`);
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};