module.exports = (client, guild) => {
  const { MessageEmbed } = require("discord.js");
  client.db.query(`SELECT * FROM \`servers\` WHERE \`id\` = ${guild.id}`, (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    client.addServer_Default(guild.id);
  });

  let embed = new MessageEmbed()
    .setColor()
    .setTitle(`Guild Joined`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`)
    .addFields(
      { name: 'Guild Name :', value: `${guild.name}`},
      { name: 'Guild ID :', value: `${guild.id}`},
      { name: 'Member Count :', value : `${guild.memberCount}`},
      { name: 'Owner Details', value: `Name : ${guild.owner.nickname} | ID : ${guild.ownerID}`}
    )
    .setTimestamp()

  client.logs_serv.send(embed)
};