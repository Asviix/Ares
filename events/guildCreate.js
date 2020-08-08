module.exports = (client, guild) => {
  const { MessageEmbed } = require("discord.js");
  client.db.query(`SELECT * FROM \`servers\` WHERE \`id\` = ${guild.id}`, (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);
    if (result.length != 0) return;

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
      { name: 'Owner Details', value: `Name : ${guild.owner.user.username} | ID : ${guild.ownerID}`}
    )
    .setTimestamp()

  client.LOGS_serv.send(embed)

  let welcome_embed = new MessageEmbed()
    .setColor(`#3B95EA`)
    .setTitle(`Thank you for adding Ares Bot in your server !`)
    .setThumbnail(client.user.avatar)
    .addFields(
      { name: `Some information :`, value: `Feel free to use the command help to see every command you can use,
      you can already set server staff with the command \`addmod\`\nYou can also change the prefix and the language of the bot if you need to.`},
      { name: `If you have any question :`, value: `Join the discord server with this (link)[https://discord.gg/arNYPry]`}
    )
    
  guild.owner.send(welcome_embed)

};