module.exports = (client) => {

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise")
      text = await text;
    if (typeof text !== "string")
      text = require("util").inspect(text, {depth: 1});

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

    return text;
  };

  client.awaitReply = async (msg, question, limit = 30000) => {
    const filter = m => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };
  
  client.loadCommand = (commandName, module) => {
    try {
      //client.logger.log(`Loading Command: ${commandName}`);
      const props = require(`../commands/${module}/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e} ${e.stack}`;
    }
  };

  client.unloadCommand = async (commandName, module) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command) return `The command \`${commandName}\` doesn't seem to exist, nor is it an alias. Try again!`;
    
    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod = require.cache[require.resolve(`../commands/${module}/${command.help.name}`)];
    delete require.cache[require.resolve(`../commands/${module}/${command.help.name}.js`)];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };

  String.prototype.toProperCase = function(opt_lowerCaseTheRest) {
    return (opt_lowerCaseTheRest ? this.toLowerCase() : this)
      .replace(/(^|[\s\xA0])[^\s\xA0]/g, function(s){ return s.toUpperCase(); });
  };

  client.addServer_Default = async (id) => {
    client.db.query(`INSERT INTO \`servers\` (\`id\`, \`prefix\`, \`language\`, \`welcome_message\`, \`welcome_id\`, \`memberCount_id\`, \`logs_id\`, \`logs_int\`) VALUES ('${id}', 'A-', 'en', '0', '0', '0', '0', '000000000000000000000000000000000000000000000000')`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.addStaff = async (id, guild_id, level) => {
    client.db.query(`INSERT INTO \`staff\` (\`id\`, \`guild_id\`, \`level\`) VALUES ('${id}', '${guild_id}', '${level}')`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.removeStaff = async (id, guild_id) => {
    client.db.query(`DELETE FROM \`staff\` WHERE \`id\` = ${id} AND \`guild_id\` = ${guild_id}`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.updateStaff = async (id, guild_id, response) => {
    client.db.query(`UPDATE \`staff\` SET \`level\`='${response}' WHERE \`id\` = '${id}' AND \`guild_id\` = '${guild_id}'`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.updatePrefix = async (id, prefix) => {
    client.db.query(`UPDATE \`servers\` SET \`prefix\`='${prefix}' WHERE \`id\` = '${id}'`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.updateLang = async (id, language) => {
    client.db.query(`UPDATE \`servers\` SET \`language\`='${language}' WHERE \`id\` = '${id}'`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };

  client.updateLogsID = async (id, guild_id) => {
    client.db.query(`UPDATE \`servers\` SET \`logs_id\`='${id}' WHERE \`id\` = '${guild_id}'`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  }

  client.updateLogsInt = async (value, id) => {
    client.db.query(`UPDATE \`servers\` SET \`logs_int\`='${value}' WHERE \`id\` = '${id}'`, (err) => {
      if (err) client.logger.error(`There was an error ! ${err}, ${err.stack}`);
    });
  };
}