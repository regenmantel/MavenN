const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tests',
            aliases: ['s'],
            memberName: 'test',
            description: 'Test Command'
        });
    }

    async run(message) {
        message.reply("Test");
    }
};