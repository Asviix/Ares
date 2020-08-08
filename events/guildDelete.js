module.exports = (client, guild) => {
  const { MessageEmbed } = require("discord.js");
  let embed = new MessageEmbed()
    .setColor()
    .setTitle(`Guild Left`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`)
    .addFields(
      { name: 'Guild Name :', value: `${guild.name}`},
      { name: 'Guild ID :', value: `${guild.id}`},
      { name: 'Member Count :', value : `${guild.memberCount}`},
      { name: 'Owner Details', value: `Name : ${guild.owner.user.username} | ID : ${guild.ownerID}`}
    )
    .setTimestamp()

  client.LOGS_serv.send(embed);
};