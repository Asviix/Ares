const language = {
  //General:
  YES: "yes",
  NO: "no",
  STOP: "Stop",
  LINK: "Link",
  ALL: "All",
  NONE: "None",
  FROM: "From",
  TO: "to",
  ALLOW: "Allow",
  DENY: "Deny",
  MEMBER: "Member",
  ROLE: "Role",
  
  ERROR_PERMLEVEL: "❌ You don't have the require level to use this command !",
  ERROR_PRIVATE_COMMAND: "❌ This command is not available in private messages !",
  ERROR_PERMISSIONS: "❌ I am missing the following permissions !",
  LOGS_CHANNEL_NAME: "Ares Logs",

  //addmod.js
  addmod_ERROR_PING: "❌ You need to ping someone !",
  addmod_ERROR_LEVEL: "❌ This user is already a staff member on this guild !",
  addmod_ERROR_LEVEL2: "❌ You cannot add a level equal or above to you !",
  addmod_LEVEL_QUESTION: "❓ What should be the level of the user ?",
  addmod_ADDING: "⏳ Saving...",
  addmod_LEVEL_DONE: "✅ The user was successfully added from the staff list !",

  addmod_DESC: "Adds a member to the staff list.",
  addmod_CATEGORY: "Administration",
  addmod_USAGE: "addmod @user",

  //purge.js
  purge_ERROR_ARGS: "❌ You didn't put any arguments !",
  purge_ERROR_ARGS_NUMBER: "❌ The first argument needs to be a number !",

  purge_DESC: "Allows you to purge messages from all or certains users.",
  purge_CATEGORY: "Administration",
  purge_USAGE: "purge [number (id1 id2 id3 ...)-optional]",

  //removemod.js
  removemod_ERROR_PING: "❌ You need to ping someone !",
  removemod_ERROR_LEVEL: "❌ This user is already not a staff member on this guild !",
  removemod_ERROR_LEVEL2: "❌ You cannot remove a level equal or above to you !",
  removemod_REMOVING: "⏳ Saving...",
  removemod_LEVEL_DONE: "✅ The user was successfully removed from the staff list !",

  removemod_DESC: "Removes a member to the staff list.",
  removemod_CATEGORY: "Administration",
  removemod_USAGE: "removemod @user",

  //updatemod.js
  updatemod_ERROR_PING: "❌ You need to ping someone !",
  updatemod_ERROR_LEVEL: "❌ This user is not a staff member on this guild !",
  updatemod_ERROR_LEVEL2: "❌ You cannot edit a level equal or above to you !",
  updatemod_LEVEL_QUESTION: "❓ What should be the level of the user ?",
  updatemod_UPDATING: "⏳ Saving...",
  updatemod_LEVEL_DONE: "✅ The user was successfully edited.",

  updatemod_DESC: "Updates a member to the staff list.",
  updatemod_CATEGORY: "Administration",
  updatemod_USAGE: "updatemod @user",

  //language.js
  language_OUTPUT: {
    fr: "French",
    en: "English",
  },

  language_ERROR_NO_ARGS: "❌ You need to input an argument !",
  language_ERROR_INVALID: "❌ This is not a valid argument ! (fr / en)",
  language_SAVING: "⏳ Saving....",
  language_DONE: "✅ The Language was successfully changed to :",

  language_DESC: "Changes the language of the bot on this guild",
  language_CATEGORY: "Config",
  language_USAGE: "language [en/fr]",

  //logs.js
  logs_ERROR_ARGS: "❌ You need to add one of the available arguments !",
  logs_ERROR_ARGS1: "❌ This is not a valid argument !",
  logs_ERROR_DISABLED: "❌ Logs are already disabled !",
  logs_SKIP_DELETION: "The logs channel is non-existent, skipping part...",
  logs_DISABLE_DONE: "✅ Logs were successfully disabled !",
  logs_ENABLE_DONE: "✅ Logs were successfully enabled !",

  logs_LOGS_CHANNEL_QUESTION: "❓ Do you want the logs to be in an already existing channel ? If yes type the `ID of channel`, otherwise type \"`no`\"",
  logs_STATUS_LOGS_CHANNEL: "⏳ Creating the Logs channel....",
  logs_STATUS_TOPIC: "The Administration Logs of the Ares Bot.",

  logs_SELECTION: "```asciidoc\n= What Logs do you want to enable/disable ? (type their name) =\n\n",
  logs_ERROR_ARG: "❌ This is not a valid argument ! (Please Mind Upper/Lower Case)",
  logs_ERROR_TIMEOUT: "❌ The command has timed out.",
  
  logs_ARGS: ['Disable', 'All', 'TextChannel', 'VoiceChannel', 'Category', 'Emoji', 'Bans', 'Members', 'Guild', 'Invites', 'Messages', 'Roles'],


  logs_EVENTS_TEXTCHANNEL: ['Create', 'Delete', 'Name', 'SlowMode', 'NSFW', 'Topic'],
  logs_TEXTCHANNEL_MODIFIER: 0,

  logs_EVENTS_VOICECHANNEL: ['Create', 'Delete', 'Name', 'BitRate', 'UserLimit'],
  logs_VOICECHANNEL_MODIFIER: 6,

  logs_EVENTS_CATEGORY: ['Create', 'Delete', 'Name'],
  logs_CATEGORY_MODIFIER: 11,

  logs_EVENTS_EMOJI: ['Create', 'Delete', 'Name'],
  logs_EMOJI_MODIFIER: 14,

  logs_EVENTS_BANS: ['BanAdd', 'BanRemove'],
  logs_BANS_MODIFIER: 17,

  logs_EVENTS_MEMBERS: ['Add', 'Remove', 'Nickname', 'Avatar', 'Name', 'Tag'],
  logs_MEMBERS_MODIFIER: 19,

  logs_EVENTS_GUILD: ['afkChannel', 'Banner', 'Description', 'Icon', 'Large', 'mfaLevel', 'Name', 'Owner', 'Partenred', 'PremiumSubscriptionCount',
  'PremiumTier', 'Region'],
  logs_GUILD_MODIFIER: 25,

  logs_EVENTS_INVITES: ['Create', 'Delete'],
  logs_INVITES_MODIFIER: 37,

  logs_EVENTS_MESSAGES: ['Delete', 'Update'],
  logs_MESSAGES_MODIFIER: 39,

  logs_EVENTS_ROLES: ['Create', 'Delete', 'Color', 'Hoist', 'Name', 'Permissions', 'Position'],
  logs_ROLES_MODIFIER: 41,


  logs_SAVING: "⏳ Saving...",
  logs_SAVED: "✅ The logs settings were successfully saved !",

  logs_DESC: "Allows you to Select what logs to use and/or disable/enable them",
  logs_CATEGORY: "Config",
  logs_USAGE: "logs [Disable, Amm, TextChannel, VoiceChannel, Category, Emoji, Bans, Members, Guild, Invites, Messages, Roles]",

  //events
  TEXT_CREATE: "Channel Created",
  TEXT_DELETE: "Channel Deleted",
  CHANNEL_NAME: "Channel Name :",
  CHANNEL_TYPE: "Channel Type :",
  CHANNEL_CREATED_AT: "Created At :",
  CHANNEL_DELETED_AT: "Deleted At :",
  TEXT_UPDATE: "Channel Updated :",
  CHANNEL_RENAME: "Channel Name Changed :",
  CHANNEL_RATE_CHANGE: "Slow Mode time Changed :",
  CHANNEL_NSFW_CHANGE: "NSFW Settings Changed :",
  CHANNEL_TOPIC_CHANGE: "Channel Topic Changed :",
  VOICE_CREATE: "Voice Channel Created",
  VOICE_DELETE: "Voice Channel Deleted",
  VOICE_UPDATE: "Voice Channel Updated :",
  CHANNEL_BITRATE_CHANGE: "Bit Rate Changed :",
  CHANNEL_USERLIMIT_CHANGE: "User Limit Changed :",
  CATEGORY_CREATE: "Category Created",
  CATEGORY_DELETE: "Category Deleted",
  CATEGORY_UPDATE: "Category Updated :",
  CATEGORY_RENAME: "Category Name Changed :",
  CHANNEL_LINK: "\u200b",

  //prefix.js
  prefix_ERROR_NO_ARGS: "❌ You need to add the new prefix !",
  prefix_SAVING: "⏳ Saving...",
  prefix_DONE: "✅ The prefix was successfully changed to :",
  
  prefix_DESC: "Changes the bot's prefix in the current guild.",
  prefix_CATEGORY: "Config",
  prefix_USAGE: "prefix [prefix]",

  //uplogs.js
  uplogs_ERROR_ARGS: "❌ You need to enter a channel ID !",
  uplogs_ERROR_ARGS1: "❌ This is not a valid channel ID !",
  uplogs_SAVING: "⏳ Saving...",
  uplogs_SAVED: "✅ The ID was successfully updated !",

  uplogs_DESC: "Changes the channel where the logs will be sent.",
  uplogs_CATEGORY: "Config",
  uplogs_USAGE: "uplogs [channel-id]",

  //credits.js
  credits_TITLE: "```asciidoc\n= Bot's Credit =",
  credits_FIELD_1_TITLE: "= Manager & Owner: =",
  credits_FIELD_1: "- Asviix",
  credits_FIELD_2_TITLE: "= Devs : =",
  credits_FIELD_2: "- A Canadian Guy, Natsukira",
  credits_FOOTER: "Discord Invite link :\n```",

  credits_DESC: "Shows the bot's credit",
  credits_CATEGORY: "Miscelaneous",
  credits_USAGE: "credits",

  //help.js
  help_1: "= Command List =\n\n[Use",
  help_2: "help <commandname> for details] =\n",

  help_DESC: "Displays all the available commands.",
  help_CATEGORY: "Miscelaneous",
  help_USAGE: "help [command]",

  //levels.js
  level_ERROR_ARGS: "❌ You didn't provide any level !",
  levels_0: "```asciidoc\n= User (0) =\n\n- A normal User, they cannot use any Moderation command.\n```",
  levels_1: "```asciidoc\n= Moderator (1) =\n\n- A Server Moderator, they can use the following commands :\n```",
  levels_2: "```asciidoc\n= Adminitrator (2) =\n\nA Server Admin, they can use the following commands :\n```",
  levels_3: "```asciidoc\n= Server Owner (3) =\n\nThe Server Owner, he can use the following commands: \n```",

  levels_DESC: "Shows you the different levels and what command they can use.",
  levels_CATEGORY: "Levels",
  levels_USAGE: "levels [0, 1, 2, 3]",


  //mylevel.js
  level_1: "Your level is",

  mylevel_DESC: "Tells you your permission level for the current message location.",
  mylevel_CATEGORY: "Levels",
  mylevel_USAGE: "mylevel",
  
  //ping.js
  ping: "Pong ! Client latency is:",
  ping2: "The command file took",
  ping3: "to execute.",

  ping_DESC: "Shows the response time (ping) of the bot",
  ping_CATEGORY: "Miscelaneous",
  ping_USAGE: "ping",

  //roleinfo.js
  roleinfo_ERROR_ARGS: "❌ You need to enter a Role Name !",
  roleinfo_ERROR_NAME: "❌ No Role with this name was found !",

  roleinfo_DESC: "Shows information about a role.",
  roleinfo_CATEGORY: "Roles",
  roleinfo_USAGE: "role [role name]",

  //roles.js
  roles_1: "```asciidoc\n= List of current Roles and Member Count : =\n",

  roles_DESC: "Shows the list of roles on this guild and the number of people that have it.",
  roles_CATEGORY: "Roles",
  roles_USAGE: "roles",

  //stats.js (Make sure to align the "::" when translating)
  stats_1: "= STATISTICS =",
  stats_2: "• Mem usage  ::",
  stats_3: "• Uptime     ::",
  stats_4: "• Users      ::",
  stats_5: "• Servers    ::",
  stats_6: "• Channels   ::",
  stats_7: "• discord.js ::",
  stats_8: "• Node       ::",

  stats_DESC: "Gives some useful bot statistics",
  stats_CATEGORY: "Miscelaneous",
  stats_USAGE: "stats",

  //eval.js
  eval_DESC: "Evaluates arbitrary javascript code.",
  eval_CATEGORY: "System",
  eval_USAGE: "eval [...code]",

  //reboot.js
  reboot_DESC: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  reboot_CATEGORY: "System",
  reboot_USAGE: "reboot",
  
  //reload.js
  reload_ERROR_CONTENT: "❌ Must provide a command to reload.",
  reload_ERROR_UNLOAD: "❌ Error Unloading:",
  reload_ERROR_LOAD: "❌ Error Loading:",
  reload_ERROR_LEVEL_1: "❌ You do not have the permissions tu use that command",
  reload_1: "✅ The command",
  reload_2: "has been reloaded",

  reload_DESC: "Reloads a command that's been modified.",
  reload_CATEGORY: "System",
  reload_USAGE: "reload [command]",
};

module.exports = language;
