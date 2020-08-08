const language = {

//#region General:
  YES: "yes",
  NO: "no",
  TRUE: "True",
  FALSE: "False",
  ON: "On",
  OFF: "Off",
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
  
  ERROR_COOLDOWN: "❌ Please wait TIME_VALUE to use this command again.",
  ERROR_PERMLEVEL: "❌ You don't have the require level to use this command !",
  ERROR_PRIVATE_COMMAND: "❌ This command is not available in private messages !",
  ERROR_PERMISSIONS: "❌ I am missing the following permissions !",
  ERROR_PERMISSIONS_MANAGE_CHANNELS: "Manage Channels",
  ERROR_DISABLED: "❌ Sorry, this command is disabled for the following reason :\n- ",
  LOGS_CHANNEL_NAME: "Ares Logs",
  //#endregion

//#region addmod.js
  ADDMOD_ERROR_PING: "❌ You need to ping someone !",
  ADDMOD_ERROR_LEVEL: "❌ This user is already a staff member on this guild !",
  ADDMOD_ERROR_LEVEL2: "❌ You cannot add a level equal or above to you !",
  ADDMOD_LEVEL_QUESTION: "❓ What should be the level of the user ?",
  ADDMOD_ADDING: "⏳ Saving...",
  ADDMOD_LEVEL_DONE: "✅ The user was successfully added from the staff list !",

  ADDMOD_DESC: "Adds a member to the staff list.",
  ADDMOD_CATEGORY: "Administration",
  ADDMOD_USAGE: "addmod @user",
  //#endregion

//#region purge.js
  PURGE_ERROR_ARGS: "❌ You didn't put any arguments !",
  PURGE_ERROR_ARGS_NUMBER: "❌ The first argument needs to be a number !",

  PURGE_DESC: "Allows you to purge messages from all or certains users.",
  PURGE_CATEGORY: "Administration",
  PURGE_USAGE: "purge [number (id1 id2 id3 ...)-optional]",
  //#endregion

//#region removemod.js
  REMOVEMOD_ERROR_PING: "❌ You need to ping someone !",
  REMOVEMOD_ERROR_LEVEL: "❌ This user is already not a staff member on this guild !",
  REMOVEMOD_ERROR_LEVEL2: "❌ You cannot remove a level equal or above to you !",
  REMOVEMOD_REMOVING: "⏳ Saving...",
  REMOVEMOD_LEVEL_DONE: "✅ The user was successfully removed from the staff list !",

  REMOVEMOD_DESC: "Removes a member from the staff list.",
  REMOVEMOD_CATEGORY: "Administration",
  REMOVEMOD_USAGE: "removemod @user",
  //#endregion

//#region updatemod.js
  UPDATEMOD_ERROR_PING: "❌ You need to ping someone !",
  UPDATEMOD_ERROR_LEVEL: "❌ This user is not a staff member on this guild !",
  UPDATEMOD_ERROR_LEVEL2: "❌ You cannot edit a level equal or above to you !",
  UPDATEMOD_LEVEL_QUESTION: "❓ What should be the level of the user ?",
  UPDATEMOD_UPDATING: "⏳ Saving...",
  UPDATEMOD_LEVEL_DONE: "✅ The user was successfully edited.",

  UPDATEMOD_DESC: "Updates a member to the staff list.",
  UPDATEMOD_CATEGORY: "Administration",
  UPDATEMOD_USAGE: "updatemod @user",
  //#endregion

//#region language.js
  LANGUAGE_OUTPUT: {
    fr: "French",
    en: "English",
  },

  LANGUAGE_ERROR_NO_ARGS: "❌ You need to input an argument !",
  LANGUAGE_ERROR_INVALID: "❌ This is not a valid argument ! (fr / en)",
  LANGUAGE_SAVING: "⏳ Saving....",
  LANGUAGE_DONE: "✅ The Language was successfully changed to :",

  LANGUAGE_DESC: "Changes the language of the bot on this guild",
  LANGUAGE_CATEGORY: "Config",
  LANGUAGE_USAGE: "language [en/fr]",
  //#endregion

//#region logs.js
  LOGS_ERROR_ARGS: "❌ You need to add one of the available arguments !",
  LOGS_ERROR_ARGS1: "❌ This is not a valid argument !",
  LOGS_ERROR_DISABLED: "❌ Logs are already disabled !",
  LOGS_SKIP_DELETION: "The logs channel is non-existent, skipping part...",
  LOGS_DISABLE_DONE: "✅ Logs were successfully disabled !",
  LOGS_ENABLE_DONE: "✅ Logs were successfully enabled !",

  LOGS_LOGS_CHANNEL_QUESTION: "❓ Do you want the logs to be in an already existing channel ? If yes type the `ID of channel`, otherwise type \"`no`\"",
  LOGS_STATUS_LOGS_CHANNEL: "⏳ Creating the Logs channel....",
  LOGS_STATUS_TOPIC: "The Administration Logs of the Ares Bot.",

  LOGS_SELECTION: "```asciidoc\n= What Logs do you want to enable/disable ? (type their name) =\n\n",
  LOGS_ERROR_ARG: "❌ This is not a valid argument ! (Please Mind Upper/Lower Case)",
  LOGS_ERROR_TIMEOUT: "❌ The command has timed out.",
  
  LOGS_ARGS: ['Disable', 'All', 'TextChannel', 'VoiceChannel', 'Category', 'Emoji', 'Bans', 'Members', 'Guild', 'Invites', 'Messages', 'Roles'],


  CHANNEL_NAME: "Channel Name :",
  CHANNEL_TYPE: "Channel Type :",
  CHANNEL_CREATED_AT: "Created At :",
  CHANNEL_DELETED_AT: "Deleted At :",
  CHANNEL_RENAME: "Channel Name Changed :",
  CHANNEL_TOPIC_CHANGE: "Channel Topic Changed :",

  LOGS_EVENTS_TEXTCHANNEL: ['Create', 'Delete', 'Name', 'SlowMode', 'NSFW', 'Topic'],
  LOGS_TEXTCHANNEL_MODIFIER: 0,
  TEXT_CREATE: "Channel Created",
  TEXT_DELETE: "Channel Deleted",
  TEXT_UPDATE: "Channel Updated :",
  TEXT_RATE_CHANGE: "Slow Mode time Changed :",
  TEXT_NSFW_CHANGE: "NSFW Settings Changed :",

  LOGS_EVENTS_VOICECHANNEL: ['Create', 'Delete', 'Name', 'BitRate', 'UserLimit'],
  LOGS_VOICECHANNEL_MODIFIER: 6,
  VOICE_CREATE: "Voice Channel Created",
  VOICE_DELETE: "Voice Channel Deleted",
  VOICE_UPDATE: "Voice Channel Updated :",
  VOICE_BITRATE_CHANGE: "Bit Rate Changed :",
  VOICE_USERLIMIT_CHANGE: "User Limit Changed :",

  LOGS_EVENTS_CATEGORY: ['Create', 'Delete', 'Name'],
  LOGS_CATEGORY_MODIFIER: 11,
  CATEGORY_CREATE: "Category Created",
  CATEGORY_DELETE: "Category Deleted",
  CATEGORY_UPDATE: "Category Updated :",
  CATEGORY_RENAME: "Category Name Changed :",

  LOGS_EVENTS_EMOJI: ['Create', 'Delete', 'Name'],
  LOGS_EMOJI_MODIFIER: 14,
  GUILDEMOJI_CREATE: "Emoji Created :",
  GUILDEMOJI_NAME: "Emoji Name :",
  GUILDEMOJI_UPDATE: "Emoji Updated :",
  GUILDEMOJI_RENAME: "Emoji name changed :",
  GUILDEMOJI_DELETE: "Emoji Deleted :",

  LOGS_EVENTS_BANS: ['BanAdd', 'BanRemove'],
  LOGS_BANS_MODIFIER: 17,
  BAN_ADD: "User Banned :",
  BAN_USER: "User :",
  BAN_REASON: "Reason :",
  BAN_REMOVED: "User Unbanned :",

  LOGS_EVENTS_MEMBERS: ['Add', 'Remove', 'Nickname', 'Avatar', 'Name', 'Tag'],
  LOGS_MEMBERS_MODIFIER: 19,
  MEMBER_JOINED: "Member joined the server",
  MEMBER_UPDATE: "Member Updated :",
  MEMBER_NAME: "Name :",
  MEMBER_DATE: "Date of Join :",
  MEMBER_LEFT: "Member Left the server",
  MEMBER_LEFT_DATE: "Time :",
  MEMBER_NICKNAME_UPDATE: "Nickname Changed :",
  MEMBER_AVATAR_UPDATE: "Changed his avatar :",
  MEMBER_USERNAME_UPDATE: "Changed his Username :",
  MEMBER_TAG_UPDATE: "Tag Modified :",

  LOGS_EVENTS_GUILD: ['afkChannel', 'Banner', 'Description', 'Icon', 'Large', 'mfaLevel', 'Name', 'Owner', 'Partnered', 'PremiumSubscriptionCount', 'PremiumTier', 'Region'],
  LOGS_GUILD_MODIFIER: 25,
  GUILD_UPDATE: "Guild Changed :",
  GUILD_AFK_CHANGE: "AFK Channel Changed :",
  GUILD_BANNER_CHANGE: "Guild Banner Changed :",
  GUILD_DESCRIPTION_CHANGE: "Guild Description Changed :",
  GUILD_LARGE_CHANGE: "\"Large\" Guild Change",
  GUILD_NOT_LARGE: "The guild is no longer Large ! <250 members",
  GUILD_LARGE: "The guild is now Large ! >250 members",
  GUILD_MFA_CHANGE: "MFA Level Change :",
  GUILD_MFA_LEVEL: {
    0: "MFA not required anymore",
    1: "MFA now required",
  },
  GUILD_NAME_CHANGE: "Guild Name Changed :",
  GUILD_OWNER_CHANGE: "⚠️ Guild Owner Changed !",
  GUILD_PARTNER_CHANGE: "Guild Partner change :",
  GUILD_PARTNER: {
    false: "The Guild is not partnered anymore",
    true: "The Guild is now partnered !",
  },
  GUILD_BOOST_COUNT_CHANGE: "Number of users boosting the server changed :",
  GUILD_BOOST_LEVEL_CHANGE: "Boost Level changed !",
  GUILD_BOOST_LEVEL: {
    0: "No Boost",
    1: "Level 1",
    2: "Level 2",
    3: "Level 3"
  },
  GUILD_REGION_CHANGE: "Region Changed :",

  LOGS_EVENTS_INVITES: ['Create', 'Delete'],
  LOGS_INVITES_MODIFIER: 37,
  LOGS_INVITES_CREATED: "Invite Created",
  LOGS_INVITED_CREATED_DATE: "Date of Creation :",
  LOGS_INVITE_EXPIRE: "Expiration Date :",
  LOGS_INVITES_CHANNEL: "Channel :",
  LOGS_INVITES_GUILD: "Guild :",
  LOGS_INVITES_URL: "URL :",
  LOGS_INVITES_DELETED: "Invite Deleted",
  LOGS_INVITE_CODE: "Code :",
  LOGS_INVITES_DELETED_DATE: "Time of Deletion :",

  LOGS_EVENTS_MESSAGES: ['Delete', 'Update'],
  LOGS_MESSAGES_MODIFIER: 39,
  LOGS_MESSAGE_DELETED: "Message Deleted",
  LOGS_MESSAGE_CONTENT: "Message Content :",
  LOGS_MESSAGE_AUTHOR: "Author :",
  LOGS_MESSAGE_CHANNEL: "Channel :",
  LOGS_MESSAGE_DELETE_DATE: "Time of Deletion :",
  LOGS_MESSAGE_UPDATED: "Message Updated",
  LOGS_MESSAGE_OLD: "Old Content :",
  LOGS_MESSAGE_NEW: "New Content :",
  LOGS_MESSAGE_UPDATE_TIME: "Time of Update :",

  LOGS_EVENTS_ROLES: ['Create', 'Delete', 'Color', 'Hoist', 'Name', 'Permissions', 'Position'],
  LOGS_ROLES_MODIFIER: 41,
  LOGS_ROLE_CREATED: "Role Created",
  LOGS_ROLE_NAME: "Role Name :",
  LOGS_ROLE_CREATED_AT: "Date of creation :",
  LOGS_ROLE_UPDATED: "Role Updated :",
  LOGS_ROLE_COLOR: "Color :",
  LOGS_ROLE_HOIST: "Hoist :",
  LOGS_ROLE_PERMISSIONS: "Permissions",
  LOGS_ROLE_NEW_PERMS: "New Permissions :",
  LOGS_ROLE_REMOVED_PERMS: "Permissions Removed :",
  LOGS_ROLE_POSITION: "Position :",

  LOGS_SAVING: "⏳ Saving...",
  LOGS_SAVED: "✅ The logs settings were successfully saved !",

  LOGS_DESC: "Allows you to Select what logs to use and/or disable/enable them",
  LOGS_CATEGORY: "Config",
  LOGS_USAGE: "logs [Disable, All, TextChannel, VoiceChannel, Category, Emoji, Bans, Members, Guild, Invites, Messages, Roles]",

  CHANNEL_LINK: "\u200b",
  //#endregion

//#region prefix.js
  PREFIX_ERROR_NO_ARGS: "❌ You need to add the new prefix !",
  PREFIX_SAVING: "⏳ Saving...",
  PREFIX_DONE: "✅ The prefix was successfully changed to :",
  
  PREFIX_DESC: "Changes the bot's prefix in the current guild.",
  PREFIX_CATEGORY: "Config",
  PREFIX_USAGE: "prefix [prefix]",
  //#endregion

//#region uplogs.js
  UPLOGS_ERROR_ARGS: "❌ You need to enter a channel ID !",
  UPLOGS_ERROR_ARGS1: "❌ This is not a valid channel ID !",
  UPLOGS_SAVING: "⏳ Saving...",
  UPLOGS_SAVED: "✅ The ID was successfully updated !",

  UPLOGS_DESC: "Changes the channel where the logs will be sent.",
  UPLOGS_CATEGORY: "Config",
  UPLOGS_USAGE: "uplogs [channel-id]",
  //#endregion

//#region credits.js
  CREDITS_TITLE: "Ares Bot Credits",
  CREDITS_FIELD1: "Main Dev & Owner :",
  CREDITS_FIELD2: "Developpers :",
  CREDITS_FIELD3: "Special thanks :",
  CREDITS_FIELD4: "All the people who created issues, sent Pull request to make this bot better <3",

  CREDITS_DESC: "Shows the bot's credit",
  CREDITS_CATEGORY: "Miscelaneous",
  CREDITS_USAGE: "credits",
  //#endregion

//#region help.js
  HELP_1: "= Command List =\n\n[Use",
  HELP_2: "help <commandname> for details] =\n",

  HELP_DESC: "Displays all the available commands.",
  HELP_CATEGORY: "Miscelaneous",
  HELP_USAGE: "help [command]",
  //#endregion

//#region levels.js
  LEVELS_ERROR_ARGS: "❌ You didn't provide any level !",
  LEVELS_ERROR: "❌ This is not a valid level !",
  LEVELS_0: "```asciidoc\n= User (0) =\n\n- A normal User, they cannot use any Moderation command.\n```",
  LEVELS_1: "```asciidoc\n= Moderator (1) =\n\n- A Server Moderator, they can use the following commands :\n```",
  LEVELS_2: "```asciidoc\n= Adminitrator (2) =\n\nA Server Admin, they can use the following commands :\n```",
  LEVELS_3: "```asciidoc\n= Server Owner (3) =\n\nThe Server Owner, he can use the following commands: \n```",

  LEVELS_DESC: "Shows you the different levels and what command they can use.",
  LEVELS_CATEGORY: "Levels",
  LEVELS_USAGE: "levels [0, 1, 2, 3]",
  //#endregion

//#region mylevel.js
  LEVEL_1: "Your level is",

  MYLEVEL_DESC: "Tells you your permission level for the current message location.",
  MYLEVEL_CATEGORY: "Levels",
  MYLEVEL_USAGE: "mylevel",
  //#endregion

//#region ping.js
  PING: "Pong ! Client latency is:",
  PING2: "The command file took",
  PING3: "to execute.",

  PING_DESC: "Shows the response time (ping) of the bot",
  PING_CATEGORY: "Miscelaneous",
  PING_USAGE: "ping",
  //#endregion

//#region roleinfo.js
  ROLEINFO_ERROR_ARGS: "❌ You need to enter a Role Name !",
  ROLEINFO_ERROR_NAME: "❌ No Role with this name was found !",

  ROLEINFO_DESC: "Shows information about a role.",
  ROLEINFO_CATEGORY: "Roles",
  ROLEINFO_USAGE: "role [role name]",
  //#endregion

//#region roles.js
  ROLES_1: "```asciidoc\n= List of current Roles and Member Count : =\n",

  ROLES_DESC: "Shows the list of roles on this guild and the number of people that have it.",
  ROLES_CATEGORY: "Roles",
  ROLES_USAGE: "roles",
  //#endregion

//#region stats.js (Make sure to align the "::" when translating)
  STATS: [
    "= STATISTICS =",
    "• Mem usage     ::",
    "• Uptime        ::",
    "• Users         ::",
    "• Servers       ::",
    "• Channels      ::",
    "• discord.js    ::",
    "• Node          ::",
    "• Server Uptime ::"
  ],

  STATS_DESC: "Gives some useful bot statistics",
  STATS_CATEGORY: "Miscelaneous",
  STATS_USAGE: "stats",
  //#endregion

//#region liveMatch.js
  LIVEMATCH_MATCH_QUESTION: "❓ What match do you want to see ? Type the ID of the Match.",
  LIVEMATCH_WARNING: "⚠️ This can take a lot of space and **CAN NOT BE STOPPED**, please consider having a channel only for this command !",
  LIVEMATCH_ERROR_NOTID: "❌ This is not a Match id !",

  LIVEMATCH_DESC: "Shows the Match Bot of any match currently on going.",
  LIVEMATCH_CATEGORY: "HLTV",
  LIVEMATCH_USAGE: "liveMatch",  
  //#endregion

//#region command.js
  COMMAND_ERROR_ARGS: "❌ You need to enter a command name !",
  COMMAND_ERROR_NOTACOMMAND: "❌ This is not a valid command name !",
  COMMAND_REASON_QUESTION: "❓ What is the reason for the command to be disabled ?",
  COMMAND_DISABLED_DONE: "✅ The command \"COMMAND1\" was successfully disabled !",
  COMMAND_ENABLED_DONE: "✅ The command \"COMMAND1\" was successfully enabled !",

  COMMAND_DESC: "Enables/Disables any command in the bot.",
  COMMAND_CATEGORY: "System",
  COMMAND_USAGE: "command [...command]",  
  //#endregion

//#region eval.js
  EVAL_DESC: "Evaluates arbitrary javascript code.",
  EVAL_CATEGORY: "System",
  EVAL_USAGE: "eval [...code]",
  //#endregion

//#region reboot.js
  REBOOT_DESC: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  REBOOT_CATEGORY: "System",
  REBOOT_USAGE: "reboot",
  //#endregion

//#region reload.js
  RELOAD_ERROR_CONTENT: "❌ Must provide a command to reload.",
  RELOAD_ERROR_UNLOAD: "❌ Error Unloading:",
  RELOAD_ERROR_LOAD: "❌ Error Loading:",
  RELOAD_ERROR_LEVEL_1: "❌ You do not have the permissions tu use that command",
  RELOAD_1: "✅ The command",
  RELOAD_2: "has been reloaded",

  RELOAD_DESC: "Reloads a command that's been modified.",
  RELOAD_CATEGORY: "System",
  RELOAD_USAGE: "reload [command]",
  //#endregion
};

module.exports = language;
