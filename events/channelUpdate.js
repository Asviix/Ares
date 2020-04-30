module.exports = (client, oldChannel, newChannel) => {
  if (oldChannel.id == 696303867595456574) return;
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${newChannel.guild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");

    let embed = new MessageEmbed()
    .setTitle(eval(`lang.${oldChannel.type.toUpperCase()}_UPDATE`))
    .setColor(`#3B95EA`)
    .setTimestamp()
    if (await checkChange("name") == true && logs_int[2] == 1 && oldChannel.type == "text" || oldChannel.type == "voice") embed.addField(lang.CHANNEL_RENAME, `${lang.FROM} \`${oldChannel.name}\` ${lang.TO} \`${newChannel.name}\``);
    if (await checkChange("name") == true && logs_int[13] && oldChannel.type == "category") embed.addField(lang.CATEGORY_RENAME, `${lang.FROM} \`${oldChannel.name}s\` ${lang.TO} \`${newChannel.name}s\``)
    if (await checkChange("rateLimitPerUser") == true && logs_int[3] == 1 && oldChannel.type == "text") embed.addField(lang.CHANNEL_RATE_CHANGE, `${lang.FROM} \`${oldChannel.rateLimitPerUser}s\` ${lang.TO} \`${newChannel.rateLimitPerUser}s\``);
    if (await checkChange("nsfw") == true && logs_int[4] == 1 && oldChannel.type == "text") embed.addField(lang.CHANNEL_NSFW_CHANGE, `${lang.FROM} \`${oldChannel.nsfw.toProperCase()}\` ${lang.TO} \`${newChannel.nsfw.toProperCase()}\``);
    if (await checkChange("topic") == true && logs_int[5] == 1 && oldChannel.type == "text") embed.addField(lang.CHANNEL_TOPIC_CHANGE, `${lang.FROM} \`${oldChannel.topic || lang.NONE}\` ${lang.TO} \`${newChannel.topic || lang.NONE}\``);
    if (await checkChange("bitrate") == true && logs_int[9] == 1 && oldChannel.type == "voice") embed.addField(lang.CHANNEL_BITRATE_CHANGE, `${lang.FROM} \`${oldChannel.bitrate / 10}kbps\` ${lang.TO} \`${newChannel.bitrate / 10}kbps\``);
    if (await checkChange("userLimit") == true && logs_int[10] == 1 && oldChannel.type == "voice") embed.addField(lang.CHANNEL_USERLIMIT_CHANGE, `${lang.FROM} \`${oldChannel.userLimit || lang.NONE}\` ${lang.TO} \`${newChannel.userLimit || lang.NONE}\``);
    if (oldChannel.type == "text") embed.addField(lang.CHANNEL_LINK, `https://discordapp.com/channels/${newChannel.guild.id}/${newChannel.id}`)
    
    if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;

    if (logs_int.slice(2, 6).some(int => int == 1) || logs_int.slice(8, 11).some(int => int == 1) || logs_int.slice(13, 14).some(int => int == 1)) client.channels.cache.find(channel => channel.id == logs_id).send(embed);
  });

  async function checkChange(parameter) {
    if (eval(`oldChannel.${parameter} == newChannel.${parameter}`)) {
      return false;
    } else {
      return true;
    };
};
};
