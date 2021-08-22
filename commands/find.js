module.exports = {
	name: 'find',
	description: 'uses Rovers api',
	execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        const snekfetch = require('snekfetch');
        const arg = message.content.split(' ').slice(1).join(' ');
        snekfetch.get(`https://verify.eryn.io/api/user/${arg}` ).then(r => {
        var string = JSON.stringify(r.body);
        const embed = new MessageEmbed()
        .addField(`\n Username: ${r.body.robloxUsername}`,
        `\n [Go to profile](https://www.roblox.com/users/${r.body.robloxId}/profile)`)
        .setImage(`https://www.roblox.com/Avatar-thumbnail/image?userId=${r.body.robloxId}&width=420&height=420&format=png`)
        .setColor(0)
        message.channel.send(embed);
     })
	},
};