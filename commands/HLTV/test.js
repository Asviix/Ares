exports.run = async (client, lang, message, args) => {
  const Discord = require("discord.js");
  const moment = require("moment");
  const HLTV = require("hltv");
  const myHLTV = HLTV.HLTV.createInstance({loadPage: (url) => fetch(url)});
  
  countries = {
    "France": 0
  }
  let active = true;
  let i = 1;
  while (active) {
    setTimeout(() => {
    HLTV.HLTV.getPlayer({id: i}).then(res => {
      console.log(res.country.name)
      i++
      if (i > 200) {
        active = false
        console.log(countries);
      }
    });
    }, 1000);
  };
};

exports.conf = {
  enabled: true,
  reason: "Beta",
  guildOnly: true,
  aliases: [],
  permLevel: 10,
};

exports.help = {
  name: "test",
  module: "HLTV",
};