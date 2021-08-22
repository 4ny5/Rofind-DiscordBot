module.exports = {
	name: 'invite',
	description: 'invite command allows the user to invite the bot to their server.',
	execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .addField("Invite The bot to your server.", "[Bot Invite](https://discord.com)")
        .addField("Have Errors? Report them here.", "[Server Invite](https://discord.gg/d)")
        .setThumbnail("https://cdn.discordapp.com/avatars/858263515202322483/83b8c624ac15c473ca675f63d0a24be6.webp?size=256")
        .setColor(0)
		message.channel.send(embed);
	},
};
