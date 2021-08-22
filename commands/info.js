module.exports = {
	name: 'botinfo',
	description: 'infomation command',
	execute(message,client, args) {
        const { MessageEmbed } = require('discord.js');
        const prettyMilliseconds = require("pretty-ms");
		const embed = new MessageEmbed()
        .addField("**• Username:**",`\`\`\`\n${message.client.user.tag}\`\`\``)
        .addField("**• Servers in:**",`\`\`\`\n${message.client.guilds.cache.size}/200\`\`\``)
        .addField("• Bot:", `\`\`\`\n${message.client.user.bot}\`\`\``, true)
        .addField("**• UpTime**",`\`\`\`\n${prettyMilliseconds(message.client.uptime)}\`\`\``)
        .addField("**• Created**",`\`\`\`\nSat Jun 26 2021\`\`\``)
        .setColor(0)
        message.channel.send(embed);
	},
};