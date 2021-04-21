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
    "bot_target": "botname",
    "trigger_action": "Dew it",
    "trigger_message": "Dew it",
    "answer_message": "!cmd",
    "answer_action": "!cmd",
    "min_message_delay": 3000,
    "message_delay": 15000,
    "verbose_logging": false
}
```

- **bot_target** => Name of the bot on which this bot should react
- **trigger_action** => Text of the trigger action maybe included in the action message, or the full message\
  An action is executed via the `/me` command
- **trigger_message** => Text of the trigger message maybe included in the action message, or the full message
- **answer_message** => The message which should be used to answer to the trigger message
- **answer_action** => The message which should be used to answer to the trigger action
- **min_message_delay** => The minimum answer delay
- **message_delay** => The maximum answer delay
- **verbose_logging** => log chat message events

Create a start file or start your process with the following arguments:

``` sh
node bot.js user=<user> token=<oauth:token> channel=<channel>
```

- Replace `<user>` with your use name.\
- Replace `<oauth:token>` with your user token. [Get your token here](https://twitchapps.com/tmi/). \
- Replace `<channel>` with the channel the bot should join and listen to

Now start your bot, and you are ready to go.