const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const auth = require('../config.json');

const TeemoJS = require('teemojs');
let api = TeemoJS(auth.riotkey);

module.exports = class EloCommands extends Command {
    constructor(client) {
        super(client, {
            name: 'elo',
            group: 'user',
            aliases: ['elo'],
            memberName: 'elo',
            description: 'Elo Command',
            args: [
                {
                    key: 'text',
                    prompt: 'Please enter a valid Summoner Name',
                    type: 'string',
                    default: '',
                }
            ]
        });
    }

    async run(message, { text }) {
        var ranked;

        const sum = await api.get('euw1', 'summoner.getBySummonerName', text);
        const league = await api.get('euw1', 'league.getLeagueEntriesForSummoner', sum.id);

        let leagueData = league.find(x => x.queueType == 'RANKED_SOLO_5x5');

        if(leagueData === undefined) ranked = 'Unranked';
        else ranked = `${leagueData.tier} ${leagueData.rank}\n ${leagueData.leaguePoints} LP / ${leagueData.wins}W ${leagueData.losses}L`;

        message.channel.send(ranked);


    /*  
        const embed = new RichEmbed()
                .setColor(0xED3D7D)
                .setTitle(`op.gg: ${summoner.name}`)
                .setURL(`https://euw.op.gg/summoner/userName=${summoner.name.replace(' ', '+')}`)
                .setAuthor(`Summoner Profile: ${summoner.name}`)
                .setDescription('League of Legends')
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/profileicon/${summoner.profileIconId}.png`)
                .addField('Accound Info', `Name: ${summoner.name}\nLevel: ${summoner.summonerLevel}\nRegion: EUW`)
            message.channel.send(embed);
    */
    }
};