module.exports = async (client, message) => {
  const Discord = require("discord.js");
  const moment = require("moment");

  client.start = new Date
  if (message.author.bot) return;

  client.db.query(`SELECT * FROM \`servers\` WHERE \`id\` = ${message.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);
    if (result.length == 0) {
      client.addServer_Default(message.guild.id);
      message.reply(`The bot was missing a configuration, it is now created.\nPlease send the command again.`);
      return;
    }

  client.db.query(`SELECT * FROM \`staff\` WHERE \`id\` = '${message.author.id}' AND \`guild_id\` = '${message.guild.id}' OR "1"`, async (err, result1) => {
    if(err) client.logger.error(`There was an error ! ${err}`);

    client.prefix = result[0].prefix;
    client.language = result[0].language
    client.memberCount_id = result[0].memberCount_id;
    client.logs_int = result[0].logs_int;
    client.logs_int = result[0].logs_int.toString().split("");

    message.author.id == client.config.ownerID ? client.level = 10
    : message.author.id == message.guild.ownerID ? client.level = 3
    : result1.length == 0 ? client.level = 0
    : client.level = result1[0].level

    lang = eval(`require("../languages/${result[0].language}")`) || require("../languages/en");

//#region PREFIX MENTION REPLY

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`${client.lang.MENTION_PREFIX}\`${client.prefix}\``);
    };
//#endregion

    if (message.content.indexOf(client.prefix) !== 0) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.guild && !message.member) await message.guild.fetchMember(message.author);

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    if (err) client.logger.error(`There was en error ! ${err}`);

    if (cmd.conf.enabled == false) {
      message.channel.send(lang.ERROR_DISABLED + `\`${cmd.conf.reason}\`` || lang.NONE);
      return;
    }

//#region COOLDOWN

    if (!client.cooldowns.has(cmd.help.name)) {
      client.cooldowns.set(cmd.help.name, new Discord.Collection());
    };

    const now = Date.now();
    const timestamps = client.cooldowns.get(cmd.help.name);
    const cooldownAmount = (cmd.conf.cooldown || 5) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = moment(expirationTime - now).format("mm:ss");
        return message.channel.send(lang.ERROR_COOLDOWN.replace("TIME_VALUE", timeLeft));
      };
    };
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
//#endregion

//#region LEVEL CHECK

    if (cmd.conf.permLevel) {
      if (client.level < cmd.conf.permLevel) {
        return message.channel.send(lang.ERROR_PERMLEVEL);
      };
    };
//#endregion

//#region  GUILD ONLY CHECK

    if (cmd && !message.guild && cmd.conf.guildOnly) {
      return message.channel.send(lang.ERROR_PRIVATE_COMMAND);
    };
//#endregion

    //client.LOGS_cmd.send(`${message.author.username} (${message.author.id}) ran command \`${cmd.help.name}\` in server ${message.guild.name} (${message.guild.id})`);

    await cmd.run(client, lang, message, args);
    client.logger.cmd(`${message.author.username} (${message.author.id}) ran command ${cmd.help.name} (${new Date - client.start}ms to execute)`);
  });
  });
};