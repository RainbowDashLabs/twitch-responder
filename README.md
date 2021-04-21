# OwO what is dis?

This is some cursed nodejs code, like everything else written in node.\
This bot will respond to a specific message on Twitch in a channel.\
This is helpful for minigames in channels with a fixed announcement message.

# I want this UwU

Then you should use it UwU

# Prerequisites
- Install nodeJs
- Clone this repository
- Execute `npm  ci` in the repository

# Configuration
Rename `config_template.json` to `config.json`.\
Configure the `config.json`.

``` json
{
    // Name of the bot on which this bot should react
    "bot_target": "botname",
    // Text of the trigger action maybe included in the action message or the full message
    // An action is executed via the /me command
    "trigger_action": "Dew it",
    // Text of the trigger message maybe included in the action message or the full message
    "trigger_message": "Dew it",
    // The message which should be used to answer to the trigger message
    "answer_message": "!cmd",
    // The message which should be used to answer to the trigger action
    "answer_action": "!cmd",
    // The minimum anwer delay
    "min_message_delay": 3000,
    // The maximum answer delay
    "message_delay": 15000,
    // log chat message events
    "verbose_logging": false
}
```

Create a start file or start your process with the following arguments:

``` sh
node bot.js user=<user> token=<oauth:token> channel=<channel>
```

replace `<user>` with your use name.\
replace `<oauth:token>` with your user token. [Get your token here](https://twitchapps.com/tmi/). \
replace `<channel>` with the channel the bot should join and listen to

Now start your bot, and you are ready to go.