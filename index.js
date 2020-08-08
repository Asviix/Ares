const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const mysql = require("mysql");
const cliProgress = require("cli-progress");
const HLTV = require("hltv");

const client = new Discord.Client();

client.config = require("./config.js");
client.token = require("../token.js");
client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);

client.db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3308",
  password: "",
  charset: "utf8_bin",
  database: "ares"
});
client.db.connect(function(err) {
  if (err) throw err;
  client.logger.log(`Successfully connected to Databse !`, "ready");
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const modules = ['General', 'System', 'Administration', 'Config', 'HLTV'];

const init = async () => {

let l = 0;
let i = 0;

modules.forEach(async c => {
  await readdir(`./commands/${c}`, (err, files) => {
    if (err) client.logger.error(`There was an error loading the commands ! ${err}`);
    files.forEach(f => {
      l++
      if (!f.endsWith(".js")) return;
      const response = client.loadCommand(f, c);
      if (response) console.log(response);
    });
  });
})

const evtFiles = await readdir("./events/");
evtFiles.forEach(file => {
  i++
  const eventName = file.split(".")[0];
  //client.logger.log(`Loading Event: ${eventName}`);
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
});

client.logger.log(`Loaded a total of ${l} commands and ${i} events`, "ready")

client.login(client.token.token);
};

init();