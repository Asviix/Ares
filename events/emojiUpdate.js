module.exports = (client, oldEmoji, newEmoji) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${newEmoji.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_EMOJI_MODIFIER + 2] == 1) {
      let embed = new MessageEmbed()
        .setTitle(lang.GUILDEMOJI_UPDATE)
        .setColor(`#3B95EA`)
        .addFields(
          {name: lang.GUILDEMOJI_RENAME, value: `${lang.FROM} \`${oldEmoji.name}\` ${lang.TO} \`${newEmoji.name}\``, inline: true},
        )
        .setImage(`https://cdn.discordapp.com/emojis/${newEmoji.id}.png`);
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};