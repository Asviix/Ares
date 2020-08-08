exports.run = (client, lang, message, args) => {
  if (!args[0]) {

    const myCommands = client.commands.filter(cmd => cmd.conf.permLevel <= client.level);

    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `${lang.HELP_1} ${client.prefix} ${lang.HELP_2}`;
    const sorted = myCommands.array().sort((p, c) => eval(`lang.${p.help.name.toUpperCase()}_CATEGORY`) > eval(`lang.${c.help.name.toUpperCase()}_CATEGORY`) ? 1 :  p.help.name > c.help.name && eval(`lang.${p.help.name.toUpperCase()}_CATEGORY`) === eval(`lang.${c.help.name.toUpperCase()}_CATEGORY`) ? 1 : -1 );
    sorted.forEach( c => {
      const cat = eval(`lang.${c.help.name.toUpperCase()}_CATEGORY`)
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${client.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${eval(`lang.${c.help.name.toUpperCase()}_DESC`)}\n`;
    });
    message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});

  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \ndescription:: ${eval(`lang.${command.help.name.toUpperCase()}_DESC`)}\ncategory:: ${eval(`lang.${command.help.name.toUpperCase()}_CATEGORY`)}\nusage:: ${eval(`lang.${command.help.name.toUpperCase()}_USAGE`)}\naliases:: ${command.conf.aliases.join(", ")}\n= ${command.help.name} =`, {code:"asciidoc"});
    }
  }
};

exports.conf = {
  enabled: true,
  reason: "",
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  module: "General",  
};