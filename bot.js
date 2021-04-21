const tmi = require('tmi.js');
const fs = require('fs');

let rawdata = fs.readFileSync('config.json');
const opts = JSON.parse(rawdata);

const cred = new Map();
process.argv.forEach(a => {
    if (a.includes("=")) {
        let words = a.split("=");
        cred[words[0]] = words[1]
    }
})

// Create a client with our options
const client = new tmi.client({
    identity: {
        username: cred["user"],
        password: cred["token"]
    },
    connection: {reconnect: true, timeout: 2000},
    channels: [
        cred["channel"]
    ]
});

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('action', onActionHandler);
client.on('connecting', l('connecting'));
client.on('reconnect', l('reconnecting'));
client.on('disconnected', l('disconnected'));

// logging
if (opts.verbose_logging) {
    client.on('chat', l('chat'));
}

// Connect to Twitch:
client.connect();

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

// Called every time a message comes in
function onMessageHandler(channel, userstate, msg, self) {
    if (self) return;

    if (opts.trigger_message.length == 0) return;

    if (equalIgnoreCase(userstate.username, opts.bot_target)) {
        if (includesIgnoreCase(msg, opts.trigger_message)) {
            print("Noticed trigger message.");
            let delay = getDelay();
            print("Waiting " + (delay / 1000) + " seconds.");
            setTimeout(() => client.say(channel, opts.answer_message), delay);
        } else {
            print("Not a trigger message.");
        }
    } else {
        print("Wrong user.");
    }
}

// Called when the /me command is used
function onActionHandler(channel, userstate, msg, self) {
    if (self) return;

    if (opts.trigger_action.length == 0) return;

    if (equalIgnoreCase(userstate.username, opts.bot_target)) {
        if (includesIgnoreCase(msg, opts.trigger_action)) {
            print("Noticed trigger action.");
            let delay = getDelay();
            print("Waiting " + (delay / 1000) + " seconds.");
            setTimeout(() => client.say(channel, opts.answer_action), delay);
        } else {
            print("Not a trigger action.");
        }
    } else {
        print("Wrong user.");
    }
}

function getDelay() {
    return Math.round(opts.min_message_delay + randomG(3) * (opts.message_delay - opts.min_message_delay));
}

// return a gaussian random number between 0-1 exclusive
function randomG(v) {
    var r = 0;
    for (var i = v; i > 0; i--) {
        r += Math.random();
    }
    return r / v;
}

function equalIgnoreCase(first, second) {
    return first.toLowerCase() == second.toLowerCase();
}

function includesIgnoreCase(first, second) {
    return first.toLowerCase().includes(second.toLowerCase());
}

function l(event) {
    return function () {
        console.log('EVENT: ' + event, arguments);
    }
}

function print(log) {
    console.log(log)
}