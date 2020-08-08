module.exports = (client, oldGuild, newGuild) => {
  const { MessageEmbed } = require("discord.js")
  const moment = require("moment");
  client.db.query(`SELECT \`language\`, \`logs_id\`, \`logs_int\` FROM \`servers\` WHERE \`id\` = ${oldGuild.id}`, async (err, result) => {
    if (err) client.logger.error(`There was an error ! ${err}`);

    lang = eval(`require("../languages/${result[0].language}")`)
    logs_id = result[0].logs_id;
    logs_int = result[0].logs_int.toString().split("");
    
    if (!logs_int.slice(lang.LOGS_GUILD_MODIFIER, lang.LOGS_INVITES_MODIFIER).some(int => int == 1)) return;

    let embed = new MessageEmbed()
    .setTitle(lang.GUILD_UPDATE)
    .setColor(`#3B95EA`)
    .setTimestamp()
    if (await checkChange("afkChannel") && logs_int[lang.LOGS_GUILD_MODIFIER] == 1) embed.addField(`${lang.GUILD_AFK_CHANGE}`, `${lang.FROM} \`${oldGuild.afkChannel ? oldGuild.afkChannel.name : lang.NONE}\` ${lang.TO} \`${newGuild.afkChannel ? newGuild.afkChannel.name : lang.NONE}\``);
    if (await checkChange("bannerURL") && logs_int[lang.LOGS_GUILD_MODIFIER + 1] == 1) embed.addField(`${lang.GUILD_BANNER_CHANGE}`, `${lang.FROM} ${oldGuild.banner ? `[${lang.LINK}](https://cdn.discordapp.com/icons/${oldGuild.id}/${oldGuild.banner}.webp?size=128)` : lang.NONE} ${lang.TO} ${newGuild.banner ? `[${lang.LINK}](https://cdn.discordapp.com/icons/${newGuild.id}/${newGuild.banner}.webp?size=128)` : lang.NONE}`);
    if (await checkChange("description") && logs_int[lang.LOGS_GUILD_MODIFIER + 2] == 1) embed.addField(`${lang.GUILD_DESCRIPTION_CHANGE}; ${lang.FROM} \`${oldGuild.description || lang.NONE}\` ${lang.FROM} \`${newGuild.description || lang.NONE}\``);
    if (await checkChange("icon") && logs_int[lang.LOGS_GUILD_MODIFIER + 3] == 1) embed.addField(`${lang.GUILD_ICON_CHANGE}`, `${lang.FROM} ${oldGuild.icon ? `[${lang.LINK}](https://cdn.discordapp.com/icons/${oldGuild.id}/${oldGuild.icon}.webp?size=128)` : lang.NONE} ${lang.TO} ${newGuild.icon ? `[${lang.LINK}](https://cdn.discordapp.com/icons/${newGuild.id}/${newGuild.icon}.webp?size=128)` : lang.NONE}`)
    if (await checkChange("large") && logs_int[lang.LOGS_GUILD_MODIFIER + 4] == 1) oldGuild.Large == true ? embed.addField(`${lang.GUILD_LARGE_CHANGE}, ${lang.GUILD_NOT_LARGE}`) : embed.addField(`${lang.GUILD_LARGE_CHANGE}, ${lang.GUILD_LARGE}`)
    if (await checkChange("mfaLevel") && logs_int[lang.LOGS_GUILD_MODIFIER + 5] == 1) embed.addField(lang.GUILD_MFA_CHANGE, eval(`lang.GUILD_MFA_LEVEL.${newGuild.mfaLevel}`));
    if (await checkChange("name") && logs_int[lang.LOGS_GUILD_MODIFIER + 6] == 1) embed.addField(lang.GUILD_NAME_CHANGE, `${lang.FROM} \`${oldGuild.name}\` ${lang.TO} \`${newGuild.name}\``);
    if (await checkChange("owner") && logs_int[lang.LOGS_GUILD_MODIFIER + 7] == 1) embed.addField(lang.GUILD_OWNER_CHANGE, `${lang.FROM} @<${oldGuild.ownerID}> ${lang.TO} @<${newGuild.ownerID}>`);
    if (await checkChange("partnered") && logs_int[lang.LOGS_GUILD_MODIFIER + 8] == 1) embed.addField(lang.GUILD_PARTNER_CHANGE, eval(`lang.GUILD_PARTNER.${newGuild.partnered}`));
    if (await checkChange("premiumSubscriptionCount") && logs_int[lang.LOGS_GUILD_MODIFIER + 9] == 1) embed.addField(lang.GUILD_BOOST_COUNT_CHANGE, `${lang.FROM} \`${oldGuild.premiumSubscriptionCount}\` ${lang.TO} \`${newGuild.premiumSubscriptionCount}\``);
    if (await checkChange("premiumTier") && logs_int[lang.LOGS_GUILD_MODIFIER + 10] == 1) embed.addField(lang.GUILD_BOOST_LEVEL_CHANGE, `${lang.FROM} \`${eval(`lang.GUILD_BOOST_LEVEL.${oldGuild.premiumTier}`)}\` ${lang.TO} \`${eval(`lang.GUILD_BOOST_LEVEL.${newGuild.premiumTier}`)}\``);
    if (await checkChange("region") && logs_int[lang.LOGS_GUILD_MODIFIER + 11] == 1) embed.addField(lang.GUILD_REGION_CHANGE, `${lang.FROM} \`${oldGuild.region}\` ${lang.TO} \`${newGuild.region}\``);

    if (embed.fields.length == 0) return;
    if (client.channels.cache.find(channel => channel.id == logs_id) == undefined) return;
    client.channels.cache.find(channel => channel.id == logs_id).send(embed);
  });

  async function checkChange(parameter) {
    if (eval(`oldGuild.${parameter} == newGuild.${parameter}`)) {
      return false;
    } else {
      return true;
    };
  };
};
