const { version } = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = (client, lang, message, args) => {
  const duration = moment.duration(client.uptime).format("D [days], H [hrs], m [mins], s [secs]");
  const server_uptime = moment(os.uptime * 1000).format("D [days], H [hrs], m [mins], s [secs]")
  message.channel.send(`
${lang.STATS[0]}
${lang.STATS[1]} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
${lang.STATS[2]} ${duration}
${lang.STATS[8]} ${server_uptime}
${lang.STATS[3]} ${client.users.cache.size.toLocaleString()}
${lang.STATS[4]} ${client.guilds.cache.size.toLocaleString()}
${lang.STATS[5]} ${client.channels.cache.size.toLocaleString()}
${lang.STATS[6]} v${version}
${lang.STATS[7]} ${process.version}`, {code: "asciidoc"});
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "stats",
  module: "General",
};