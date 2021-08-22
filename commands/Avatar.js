module.exports={
	name:'av',
	description: "finds the avatar of the user",
	execute(message, args){
	const roblox = require("noblox.js")
	let username = args[0]
if (username) {
	roblox.getIdFromUsername(username).then(id => {
		if (id)
		{
		  roblox.getPlayerInfo(parseInt(id)).then(function(info) 
		  {
			const { MessageEmbed } = require('discord.js');
			const embed = new MessageEmbed()
			.setTitle(`${info.username}'s Avatar`)
			.setImage(`https://www.roblox.com/Avatar-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
			.setColor(0)
			message.channel.send({embed})
		  })
		}
	  }).catch(function (err) {
		const { MessageEmbed } = require('discord.js');
		const { prefix } = require('./.././Config/config.json');
		const embed = new MessageEmbed()
		.addField("Sorry, that user doesn't seem to exist.",`**double check your spelling and try again!**`)
		.addField("👍 Tip, If you're using {Roblox}",`**do ${prefix}av Roblox**`)
        .addField("👎 Dont do this",`**${prefix}av {Roblox}**`)
		.setColor(0)
	   message.channel.send({embed})
	 });  
  } else { 
	const { MessageEmbed } = require('discord.js');
	const { prefix } = require('./.././Config/config.json');
	const embed = new MessageEmbed()
	.addField("Please provide a valid username",`**👍 Tip: Like ${prefix}av Roblox**`)
	.setColor(0)
	message.channel.send({embed})
}
}
}