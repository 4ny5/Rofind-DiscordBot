module.exports = {
	name: 'help',
	description: 'help command lists all the commands',
	execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        const { prefix } = require('./.././Config/config.json');
		const embed = new MessageEmbed()
        .setTitle("Commands")
        .addField("• `LookUp Command`", 
        `**${prefix}search {User} \n ${prefix}group {GroupID} \n ${prefix}find {DiscordID}**`)
        .addField("• `Avatar Command`", `**${prefix}av {User}**`)
        .addField("• `Feedback Command`", `**${prefix}feedback {Txt}**`)
        .addField("• `Info Command`", `**${prefix}botinfo**`)
        .addField("• `Invite Command`", `**${prefix}invite**`)
        .setColor(0)
        message.channel.send(embed);
	},
};