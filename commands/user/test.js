const { Command } = require('discord.js-commando');

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'user',
            aliases: ['s'],
            memberName: 'test',
            description: 'Test Command'
        });
    }

    async run(message) {
        message.reply("Test");
    }
};