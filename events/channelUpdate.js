module.exports = (client, oldChannel, newChannel) => {
  if (oldChannel.id == 696303867595456574) return;
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${newChannel.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);
    
    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    if (!logs_int.slice(lang.LOGS_TEXTCHANNEL_MODIFIER + 2, lang.LOGS_VOICECHANNEL_MODIFIER).some(int => int == 1) || !logs_int.slice(lang.LOGS_VOICECHANNEL_MODIFIER + 2, lang.LOGS_CATEGORY_MODIFIER).some(int => int == 1) || !logs_int.slice(lang.LOGS_CATEGORY_MODIFIER + 2, lang.LOGS_EMOJI_MODIFIER).some(int => int == 1)) return;

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_int = result[0].logs_int;
    logs_int = result[0].logs_int.toString().split("");

    let embed = new MessageEmbed()
    .setTitle(eval(`lang.${oldChannel.type.toUpperCase()}_UPDATE`))
    .setColor(`#3B95EA`)
    .setTimestamp()
    if (await checkChange("name") == true && logs_int[lang.LOGS_TEXTCHANNEL_MODIFIER + 2] == 1 && oldChannel.type == "text" || oldChannel.type == "voice") embed.addField(lang.CHANNEL_RENAME, `${lang.FROM} \`${oldChannel.name}\` ${lang.TO} \`${newChannel.name}\``);
    if (await checkChange("name") == true && logs_int[lang.LOGS_CATEGORY_MODIFIER + 2] && oldChannel.type == "category") embed.addField(lang.CATEGORY_RENAME, `${lang.FROM} \`${oldChannel.name}s\` ${lang.TO} \`${newChannel.name}s\``)
    if (await checkChange("rateLimitPerUser") == true && logs_int[lang.LOGS_TEXTCHANNEL_MODIFIER + 3] == 1 && oldChannel.type == "text") embed.addField(lang.TEXT_RATE_CHANGE, `${lang.FROM} \`${oldChannel.rateLimitPerUser}s\` ${lang.TO} \`${newChannel.rateLimitPerUser}s\``);
    if (await checkChange("nsfw") == true && logs_int[lang.LOGS_TEXTCHANNEL_MODIFIER + 4] == 1 && oldChannel.type == "text") embed.addField(lang.TEXT_NSFW_CHANGE, `${lang.FROM} \`${oldChannel.nsfw}\` ${lang.TO} \`${newChannel.nsfw}\``);
    if (await checkChange("topic") == true && logs_int[lang.LOGS_TEXTCHANNEL_MODIFIER + 5] == 1 && oldChannel.type == "text") embed.addField(lang.CHANNEL_TOPIC_CHANGE, `${lang.FROM} \`${oldChannel.topic || lang.NONE}\` ${lang.TO} \`${newChannel.topic || lang.NONE}\``);
    if (await checkChange("bitrate") == true && logs_int[lang.OGS_VOICECHANNEL_MODIFIER + 3] == 1 && oldChannel.type == "voice") embed.addField(lang.VOICE_BITRATE_CHANGE, `${lang.FROM} \`${oldChannel.bitrate / 10}kbps\` ${lang.TO} \`${newChannel.bitrate / 10}kbps\``);
    if (await checkChange("userLimit") == true && logs_int[lang.LOGS_VOICECHANNEL_MODIFIER + 4] == 1 && oldChannel.type == "voice") embed.addField(lang.VOICE_USERLIMIT_CHANGE, `${lang.FROM} \`${oldChannel.userLimit || lang.NONE}\` ${lang.TO} \`${newChannel.userLimit || lang.NONE}\``);
    if (oldChannel.type == "text") embed.addField(lang.CHANNEL_LINK, `https://discordapp.com/channels/${newChannel.guild.id}/${newChannel.id}`)
    
    if ((oldChannel.type == "text" && embed.fields.length == 1) || (oldChannel.type != "text" && embed.fields.length == 0)) return;
    if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
    client.channels.cache.find(channel => channel.id == logs_id).send(embed);
  });

  async function checkChange(parameter) {
    if (eval(`oldChannel.${parameter} == newChannel.${parameter}`)) {
      return false;
    } else {
      return true;
    };
  };
};
