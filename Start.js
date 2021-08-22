const fs = require('fs');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const { token, prefix } = require('./Config/config.json');

const client = new Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
	console.log(`${client.user.tag}` + ` is ready to go`)
	client.user.setActivity(`${prefix}help`, {
		type: "STREAMING",
		url: "https://www.twitch.tv/roblox"
    })
})

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
        console.error(error);
		const embed = new MessageEmbed()
		.setTitle("⚠️ There was an error executing that command. ⚠️")
        .setColor(0)
        message.channel.send(embed);
	}
});
client.login(token);