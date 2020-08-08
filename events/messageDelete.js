module.exports = (client, message) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${message.guild.id || message.channel.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_MESSAGES_MODIFIER]) {
      let embed = new MessageEmbed()
        .setTitle(lang.LOGS_MESSAGE_DELETED)
        .setColor(`#3B95EA`)
        .addField(`${lang.LOGS_MESSAGE_CONTENT}`, `${message.content}`)
        .addField(`${lang.LOGS_MESSAGE_AUTHOR}`, `${message.author}`)
        .addField(`${lang.LOGS_MESSAGE_CHANNEL}`, `${message.channel.name}`)
        .setFooter(`${lang.LOGS_MESSAGE_DELETE_DATE} ${moment(message.createdTimestamp).format("YYYY-MM-DD HH:mm")}`)
        
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};