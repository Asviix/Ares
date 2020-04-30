const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, lang, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  message.channel.send(`${lang.stats_1}
${lang.stats_2} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
${lang.stats_3} ${duration}
${lang.stats_4} ${client.users.cache.size.toLocaleString()}
${lang.stats_5} ${client.guilds.cache.size.toLocaleString()}
${lang.stats_6} ${client.channels.cache.size.toLocaleString()}
${lang.stats_7} v${version}
${lang.stats_8} ${process.version}`, {code: "asciidoc"});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "stats",
  module: "General",
};