module.exports = (client, invite) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${invite.guild.id || invite.channel.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (logs_int[lang.LOGS_INVITES_MODIFIER]) {
      let embed = new MessageEmbed()
        .setTitle(lang.LOGS_INVITES_CREATED)
        .setColor(`#3B95EA`)
        if (invite.channel) embed.addField(lang.LOGS_INVITES_CHANNEL, invite.channel)
        if (invite.guild) embed.addField(lang.LOGS_INVITES_GUILD, invite.guild)
        if (invite.expiresTimestamp) embed.addField(lang.LOGS_INVITE_EXPIRE, moment(invite.expiresTimestamp).format("YYYY-MM-DD HH:mm"))
        embed.addField(lang.LOGS_INVITES_URL, invite.url)
        embed.setFooter(`${lang.LOGS_INVITED_CREATED_DATE} ${moment(invite.createdTimestamp).format("YYYY-MM-DD HH:mm")}`)
        
  
      if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
      client.channels.cache.find(channel => channel.id == logs_id).send(embed)
    };
  });
};