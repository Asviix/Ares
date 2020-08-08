module.exports = (client, oldMessage, newMessage) => {
  /*const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${oldMessage.guild.id || oldMessage.channel.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_MESSAGES_MODIFIER + 1]) {
      let embed = new MessageEmbed()
        .setTitle(lang.LOGS_MESSAGE_UPDATED)
        .setColor(`#3B95EA`)
        .addField(`${lang.LOGS_MESSAGE_OLD}`, `${oldMessage.content}`)
        .addField(`${lang.LOGS_MESSAGE_NEW}`, `${newMessage.content}`)
        .addField(`${lang.LOGS_MESSAGE_AUTHOR}`, `${oldMessage.author}`)
        .addField(`${lang.LOGS_MESSAGE_CHANNEL}`, `${oldMessage.channel.name}`)
        .setFooter(`${lang.LOGS_MESSAGE_UPDATE_TIME} ${moment(newMessage.editedTimestamp).format("YYYY-MM-DD HH:mm")}`)
        
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });*/
};