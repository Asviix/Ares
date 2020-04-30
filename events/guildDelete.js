module.exports = (client, guild) => {
  let embed = new Discord.MessageEmbed()
    .setColor()
    .setTitle(`Guild Left`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`)
    .addFields(
      { name: 'Guild Name :', value: `${guild.name}`},
      { name: 'Guild ID :', value: `${guild.id}`},
      { name: 'Member Count :', value : `${guild.memberCount}`},
      { name: 'Owner Details', value: `Name : ${guild.owner.nickname} | ID : ${guild.ownerID}`}
    )
    .setTimestamp()

  client.logs_serv.send(embed);
};