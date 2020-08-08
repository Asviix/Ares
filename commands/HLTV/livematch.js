exports.run = async (client, lang, message, args) => {
  const Discord = require("discord.js");
  const moment = require("moment");
  const { HLTV } = require('hltv')
  const myHLTV = HLTV.createInstance({loadPage: (url) => fetch(url)})
  
  HLTV.getMatches().then(async Matches => {
    Matches = Matches.filter(Match => 
      Match.live == true
    );

    let content = [];
    Matches.forEach(Match => {
      content.push(`\`${Match.team1.name} vs ${Match.team2.name} (${Match.event.name}), ID: ${Match.id}\``)
    });

      let response = await client.awaitReply(message, `${lang.LIVEMATCH_MATCH_QUESTION}\n\n${content.join("\n")}\n\n${lang.LIVEMATCH_WARNING}`)
      let matchID = "";

      if (Matches.some(Match => Match.id == response) == true) matchID = response;
      else return message.channel.send(lang.LIVEMATCH_ERROR_NOTID);

      let flashAssist = "";
      let i = 0

      let weaponIcons = {
        "knife": "<:knife:709375620290969602>",
        "knife_flip": "<:knife:709375620290969602>",
        "knife_canis": "<:knife:709375620290969602>",
        "knife_push": "<:knife:709375620290969602>",
        "knife_tactical": "<:knife:709375620290969602>",
        "knife_gut": "<:knife:709375620290969602>",
        "knife_t": "<:knife:709375620290969602>",
        "knife_survival_bowie": "<:knife:709375620290969602>",
        "knife_falchion": "<:knife:709375620290969602>",
        "knife_karambit": "<:knife:709375620290969602>",
        "knife_butterfly": "<:knife:709375620290969602>",
        "knife_m9_bayonet": "<:knife:709375620290969602>",
        "knife_default_ct": "<:knife:709375620290969602>",
        "knife_ursus": "<:knife:709375620290969602>",
        "knife_css": "<:knife:709375620290969602>",
        "deagle": "<:deagle:709375619661561897>",
        "ak47": "<:ak47:709375619670212708>",
        "aug": "<:aug:709375619712155748>",
        "fiveseven": "<:fiveseven:709375619720413235>",
        "awp": "<:awp:709375619766419557>",
        "bizon": "<:bizon:709375619867213924>",
        "cz75a": "<:cz75a:709375619875733564>",
        "g3sg1": "<:g3sg1:709375619896442912>",
        "decoy": "<:decoy:709375619905093763>",
        "elite": "<:elite:709375619984785459>",
        "famas": "<:famas:709375620056088678>",
        "flashbang": "<:flashbang:709375620152426506>",
        "headshot": "<:headshot:709375620286775367>",
        "knife": "<:knife:709375620290969602>",
        "glock": "<:glock:709375620315873330>",
        "inferno": "<:inferno:709375620320198677>",
        "galilar": "<:galilar:709375620454416414>",
        "hkp2000": "<:hkp2000:709375620479713340>",
        "hegrenade": "<:hegrenade:709375620576182423>",
        "m4a1": "<:m4a1:709375620626513920>",
        "m4a1_silencer": "<:m4a1_silencer:709375620718526494>",
        "mag7": "<:mag7:709375620752212051>",
        "m249": "<:m249:709375620752343152>",
        "mac10": "<:mac10:709375620832034868>",
        "molotov": "<:molotov:709375620886298626>",
        "mp7": "<:mp7:709375621024710707>",
        "mp9": "<:mp9:709375621217779722>",
        "sawedoff": "<:sawedoff:709375621238882395>",
        "p90": "<:p90:709375621247270943>",
        "p250": "<:p250:709375621318574162>",
        "nova": "<:nova:709375621465374751>",
        "smoke": "<:smoke:709375621477826624>",
        "negev": "<:negev:709375621486084126>",
        "taser": "<:taser:709375621565775873>",
        "revolver": "<:revolver:709375621574426704>",
        "sg556": "<:sg556:709375621633146981>",
        "scar20": "<:scar20:709375621637210151>",
        "ump45": "<:ump45:709375621687410740>",
        "xm1014": "<:xm1014:709375621771427881>",
        "usp_silencer": "<:usp_silencer:709375621838536735>",
        "tec9": "<:tec9:709375621901320212>",
        "ssg08": "<:ssg08:709375622023217172>",
        "kevlar": "<:kevlar:709386723682943049>",
        "kevlar_helmet": "<:kevlar_helmet:709386599791722519>",
        "defuse_kit": "<:defusekit:709386599649247295>",
      }

      let images = {
        "de_inferno": "https://liquipedia.net/commons/images/thumb/2/2b/De_new_inferno.jpg/800px-De_new_inferno.jpg",
        "de_train": "https://liquipedia.net/commons/images/thumb/5/56/Train_csgo.jpg/800px-Train_csgo.jpg",
        "de_mirage": "https://liquipedia.net/commons/images/thumb/f/f3/Csgo_mirage.jpg/534px-Csgo_mirage.jpg",
        "de_nuke": "https://liquipedia.net/commons/images/thumb/5/5e/Nuke_csgo.jpg/534px-Nuke_csgo.jpg",
        "de_overpass": "https://liquipedia.net/commons/images/thumb/0/0f/Csgo_overpass.jpg/534px-Csgo_overpass.jpg",
        "de_dust2": "https://liquipedia.net/commons/images/thumb/1/12/Csgo_dust2.0.jpg/534px-Csgo_dust2.0.jpg",
        "de_vertigo": "https://liquipedia.net/commons/images/thumb/5/59/Csgo_de_vertigo_new.jpg/534px-Csgo_de_vertigo_new.jpg"
      }

      const filter = m => m.guild.id == message.guild.id
      let date = new Date()
      let o = 0;
      let round = 0;
      let players = {
        kills: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
  
      let waiting = new Discord.MessageEmbed()
        .setTitle(`Waiting for Update.`)

      let collector = message.channel.createMessageCollector(filter);

      message.channel.send(waiting).then(msg => {

      HLTV.connectToScorebot({id: matchID,
        onScoreboardUpdate: (data, done) => {
          let CTContent = [];
          let CTContent2 = [];
          let CTContent3 = [];
          data.CT.forEach(player => {
            CTContent.push(`${player.name} (${player.hp}) ${player.helmet ? `${weaponIcons.kevlar_helmet}` : player.kevlar ? `${weaponIcons.kevlar}`: ""}`);
            CTContent2.push(`${player.score}/${player.assists}/${player.deaths}`);
            CTContent3.push(`${eval(`weaponIcons.${player.primaryWeapon}`) || "**DEAD**"} ${player.hasDefuseKit ? `${weaponIcons.defuse_kit}` : ""}`);
          });

          let TContent = [];
          let TContent2 = [];
          let TContent3 = [];
          data.TERRORIST.forEach(player => {
            TContent.push(`${player.name} (${player.hp}) ${player.helmet ? `${weaponIcons.kevlar_helmet}` : player.kevlar ? `${weaponIcons.kevlar}`: ""}`);
            TContent2.push(`${player.score}/${player.assists}/${player.deaths}`);
            TContent3.push(`${eval(`weaponIcons.${player.primaryWeapon}`) || "**DEAD**"} ${player.hasDefuseKit ? `${weaponIcons.defuse_kit}` : ""}`);
          });


          let scoreboard = new Discord.MessageEmbed()
            .setTitle(`${data.ctTeamName} vs ${data.terroristTeamName}`)
            .setDescription(`${data.ctTeamScore} - ${data.terroristScore}`)
            .setThumbnail(eval(`images.${data.mapName}`))
            .addField(`${data.ctTeamName} (CT)`, CTContent, true)
            .addField(`Stats`, CTContent2, true)
            .addField(`Weapon`, CTContent3, true)
            .addField(`${data.terroristTeamName} (T)`, TContent, true)
            .addField(`Stats`, TContent2, true)
            .addField(`Weapon`, TContent3, true)

          if (round != data.currentRound) {
            setTimeout(() => {
              msg.edit(scoreboard);
            }, 5000);
            round = data.currentRound;
          };

          i = 0;
          for (i = 0; i < data.CT.length + data.TERRORIST.length; i++) {
            if (i <= 4) {
              if (data.CT[i].score != players.kills[i]) {
                players.kills[i] = data.CT[i].score
                msg.edit(scoreboard);
              };
            } else {
              if (data.TERRORIST[i - 5].score != players.kills[i]) {
                players.kills[i] = data.TERRORIST[i - 5].score
                msg.edit(scoreboard);
              };
            };
          };
        },
  
        onLogUpdate: async (data, done) => {
          let log = data.log[0]
          if (log.PlayerJoin) {
            o++;
            message.channel.send(`**${log.PlayerJoin.playerName}** joined`);
          };

          if (log.PlayerQuit) {o++;
            message.channel.send(`**${log.PlayerQuit.playerName}** left`);
          };

          if (log.RoundStart) {
            collector = message.channel.createMessageCollector(filter);
            message.channel.send("-----------\nRound Started");
            o = 0;
            date = new Date();
          }
            
          if (log.RoundEnd) {
            await message.channel.send(`Round Over - ${log.RoundEnd.winType.replace("_", " ")} (CT ${log.RoundEnd.counterTerroristScore}:${log.RoundEnd.terroristScore} T)`);
            setTimeout(() => {
              message.channel.bulkDelete(collector.collected);
            }, 5000);
            collector.stop();
          };

          if (log.Kill) {
            o++;
            if (log.Kill.flasherNick != undefined) flashAssist = `+ <:flashbang:709375620152426506> **${log.Kill.flasherNick}**`
            else flashAssist = "";
            message.channel.send(`${moment(new Date() - date).format("mm:ss")} - **${log.Kill.killerName}** ${flashAssist} ${eval(`weaponIcons.${log.Kill.weapon}`)} ${log.Kill.headShot.toString().replace("true", "<:headshot:709375620286775367> ").replace("false", "")} **${log.Kill.victimName}**`);
          };

          if (log.Suicide) {o++;
            message.channel.send(`${moment(new Date() - date).format("mm:ss")} - ${log.Suicide.playerName} Suicide`);
          };

          if (log.BombPlanted) {o++;
            message.channel.send(`-----\n${moment(new Date() - date).format("mm:ss")} - __${log.BombPlanted.playerName} Planted the bomb__ (${log.BombPlanted.ctPlayers} CTs - ${log.BombPlanted.tPlayers} Ts)`);
          };

          if (log.BombDefused) {o++;
            message.channel.send(`-----\n${moment(new Date() - date).format("mm:ss")} - __${log.BombDefused.playerName}\` Defused the Bomb__`);
          };
        }
        })
      });
    });
};

exports.conf = {
  enabled: false,
  reason: "Beta",
  guildOnly: true,
  aliases: [],
  permLevel: 10,
};

exports.help = {
  name: "livematch",
  module: "HLTV",
};