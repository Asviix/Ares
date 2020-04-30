module.exports = async client => {
  client.logs_cmd = client.channels.cache.find(channel => channel.id == client.config.logs_c);
  client.logs_serv = client.channels.cache.find(channel => channel.id == client.config.logs_s);
  client.status_channel = client.channels.cache.find(channel => channel.id == client.config.status_channel);

  client.db.query(`SELECT * FROM \`servers\` WHERE \`logs_id\` != 0`, (err, result) => {
    if(err) client.logger.error(`There was an error ! ${err}`);
    if (result.length == 0) return;

    let i;
    for (i = 0; i < result.length; i++) {
      
      let guild = client.guilds.cache.find(guild => guild.id == result[i].id);
      let channel = guild.channels.cache.find(channel => channel.id == result[i].logs_id);
      if (channel == undefined) return;

      channel.send(`\`\`\`asciidoc\n= Bot Ready ! =\n\`\`\``);
    };
  });

  setInterval(function() {
    client.db.query(`SELECT * FROM \`servers\` WHERE \`memberCount_id\` != '0'`, (err, result) => {
      if(err) client.logger.error(`There was an error ! ${err}`);

      let i;
      for (i = 0; i < result.length; i++) {
        let guild = client.guilds.cache.find(guild => guild.id == result[i].id);
        let channel = guild.channels.cache.find(channel => channel.id == result[i].member_count_id);
        if (channel == undefined) return;
        channel.setName(`Member Count: ${guild.memberCount}`, {reason: lang.UPDATE_MEMBER_COUNT})
      };
    });
  }, 300000);

  client.status_channel.setName("status-✅")

  client.logger.log(`${client.user.tag} ready !`, "ready");
};