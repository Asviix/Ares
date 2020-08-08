module.exports = (client, channel) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${channel.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if ((logs_int[lang.LOGS_TEXTCHANNEL_MODIFIER + 1] == 1 && channel.type == "text") || (logs_int[lang.LOGS_VOICECHANNEL_MODIFIER + 1] == 1 && channel.type == "voice") || (logs_int[lang.LOGS_CATEGORY_MODIFIER + 1] == 1 & channel.type == "category")) {
      const timestamp = `${moment(channel.createdAt).format("YYYY-MM-DD HH:mm:ss:ms")}`
      const deleted = `${moment().format("YYYY-MM-DD HH:mm:ss:ms")}`
      let embed = new MessageEmbed()
        .setTitle(eval(`lang.${channel.type.toUpperCase()}_DELETE`))
        .setColor(`#3B95EA`)
        .addFields(
          {name: lang.CHANNEL_NAME, value: channel.name, inline: true},
          {name: lang.CHANNEL_TYPE, value: channel.type.toProperCase(), inline: true},
          {name: lang.CHANNEL_CREATED_AT, value: timestamp},
          {name: lang.CHANNEL_DELETED_AT, value: deleted, inline: true}
        )
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};