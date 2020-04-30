exports.run = async (client, lang, message, args) => {
  if (args.length == 0) return message.channel.send(lang.logs_ERROR_ARGS);
  if (!lang.logs_ARGS.includes(args[0])) return message.channel.send(lang.logs_ERROR_ARGS1);
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${lang.ERROR_PERMISSIONS} Manage Channels`)
  let logs_temp = client.logs_int;

  switch(args[0]) {
    case lang.logs_ARGS[0]: {
      if (client.logs_id == 0 && client.logs_int == 0) return message.channel.send(lang.logs_ERROR_DISABLED);

      try {
        message.guild.channels.cache.find(channel => channel.id == client.logs_id).then(channel => channel.delete())
      } catch (e) {
        message.channel.send(lang.logs_SKIP_DELETION).then(message => setTimeout(message.delete(), 2000));
      };
      client.updateLogsInt(`000000000000000000000000000000000000000000000000`, message.guild.id);
      client.updateLogsID(`0`, message.guild.id)
      message.channel.send(lang.logs_DISABLE_DONE);
      break;
    };

    case lang.logs_ARGS[1]: {
      await askLogsChannel(client, message, lang);

      client.updateLogsInt(`111111111111111111111111111111111111111111111111`, message.guild.id)
      break;
    };

    default: {
      await askLogsChannel(client, message, lang);

      let i;
      let condition = true
      while (condition == true) {

      let content = [];
      args[0] = args[0].toUpperCase();

      for (i = 0; i < eval(`lang.logs_EVENTS_${args[0]}.length`); i++) {
        content.push(`- ${eval(`lang.logs_EVENTS_${args[0]}[i]`)} : ${logs_temp[i + eval(`lang.logs_${args[0]}_MODIFIER`)]}`);
      };

      content.push(`- ${lang.ALL}\n- ${lang.NONE}\n- ${lang.STOP}`);
      let response = await client.awaitReply(message, `${lang.logs_SELECTION} ${content.join('\n')}\n\`\`\``, 60000)
      
      if (response == false) return message.channel.send(lang.logs_ERROR_TIMEOUT)

      response1 = response.toLowerCase();
      if (!eval(`lang.logs_EVENTS_${args[0]}`).includes(response) && response1 != lang.STOP.toLowerCase() && response1 != lang.ALL.toLowerCase() && response1 != lang.NONE.toLowerCase()) return message.channel.send(lang.logs_ERROR_ARG);

      if (response.toLowerCase() == lang.STOP.toLowerCase()) {
        condition = false; 
        return message.channel.send(lang.logs_SAVING).then(msg => {
          let logs_to_add = logs_temp.join("");
          client.updateLogsInt(logs_to_add, message.guild.id);
          msg.edit(lang.logs_SAVED);
        });
      };

      if (response.toLowerCase() == lang.ALL.toLowerCase() || response.toLowerCase() == lang.NONE.toLowerCase() ) {
        condition = false;

        let num = '0';
        if (response.toLowerCase() == lang.ALL.toLowerCase()) num = '1';

        let l;
        let forCondition = (eval(`lang.logs_${args[0]}_MODIFIER`))
        forCondition = forCondition + eval(`lang.logs_EVENTS_${args[0]}.length`)
        for (l = eval(`lang.logs_${args[0]}_MODIFIER`); l < (eval(`lang.logs_${args[0]}_MODIFIER`) + eval(`lang.logs_EVENTS_${args[0]}.length`)); l++) {
          logs_temp[l] = num
        };

        return message.channel.send(lang.logs_SAVING).then(msg => {
          let logs_to_add = logs_temp.join("");
          client.updateLogsInt(logs_to_add, message.guild.id);
          msg.edit(lang.logs_SAVED);
        });
      };

      var index = eval(`lang.logs_EVENTS_${args[0]}`).indexOf(response);
      index = index + eval(`lang.logs_${args[0]}_MODIFIER`)
      if (index !== -1) {
        if (logs_temp[index] == '0') {
          logs_temp[index] = '1'
        } else {logs_temp[index] = '0'};
      };
      };
    };
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: "logs",
  module: "Config",  
};

async function askLogsChannel(client, message, lang) {
  if (client.logs_id == `0`) {
    let response = await client.awaitReply(message, lang.logs_LOGS_CHANNEL_QUESTION);
    if (message.guild.channels.resolve(response) == undefined) {
      message.channel.send(lang.logs_STATUS_LOGS_CHANNEL).then(msg => message.guild.channels.create(lang.LOGS_CHANNEL_NAME, {
        type: "text", topic: lang.logs_STATUS_TOPIC, permissionOverwrites: [
          {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
            deny: ['VIEW_MESSAGES']
          }, {
            id: client.config.botID,
            allow: ['SEND_MESSAGES'],
            allow: ['VIEW_MESSAGES']
          }
        ]
      }).then(channel => client.updateLogsID(channel.id, message.guild.id), msg.delete()));
    }
    else {
      let channel = message.guild.channels.resolve(response);
      message.channel.send(lang.logs_SAVING).then(msg => {
        client.updateLogsID(channel.id, message.guild.id);
        msg.edit(lang.logs_SAVED);
      });
    };
  };
};
