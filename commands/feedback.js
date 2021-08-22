module.exports = {
    name: "feedback",
    description: "feedback command (embed style)",
    execute(message, args) {
        if(!args[0]) return message.reply('Please provide a message to send ')
		message.reply(`✉️ Your message has been sent ✉️`)
		const Discord = require('discord.js')
        const { feedbackId } = require('../Data/ChannelID.json')
        const embed = new Discord.MessageEmbed()
        .setColor(0)
        .setTitle("Feedback")
        .setDescription(`**${message.author.username}#${message.author.discriminator}'s Message \`\`\`\n${args.join(" ")}\`\`\`**`)
        .addField("On the server:", `\`\`\`\n${message.guild.name}\`\`\``)
        .addField("Server ID:", `\`\`\`\n${message.guild.id}\`\`\``)
        message.client.channels.cache.get(feedbackId).send(embed)
    }
}  