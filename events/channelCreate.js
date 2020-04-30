module.exports = (client, channel) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${channel.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if ((logs_int[0] == 1 && channel.type == "text") || (logs_int[6] == 1 && channel.type == "voice") || (logs_int[11] == 1 & channel.type == "category")) {
      const timestamp = `${moment(channel.createdAt).format("YYYY-MM-DD HH:mm:ss:ms")}`
      let embed = new MessageEmbed()
        .setTitle(eval(`lang.${channel.type.toUpperCase()}_CREATE`))
        .setColor(`#3B95EA`)
        .addFields(
          {name: lang.CHANNEL_NAME, value: channel.name, inline: true},
          {name: lang.CHANNEL_CREATED_AT, value: timestamp, inline: true},
          {name: lang.CHANNEL_TYPE, value: channel.type.toProperCase()},
        )
        if (channel.type == "text") embed.addField(lang.CHANNEL_LINK, `https://discordapp.com/channels/${channel.guild.id}/${channel.id}`)
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};