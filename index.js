const { CommandoClient } = require('discord.js-commando');
const auth = require('./config.json');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '!',
    owner: '246632397863387139',
    invite: 'https://discord.gg/RAER8eAg2f',
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('MaveN v1.0');
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['user', 'User related commands'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        eval: false,
    })
.registerCommandsIn(path.join(__dirname, 'commands'));

client.login(auth.dckey);

