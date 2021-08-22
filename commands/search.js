module.exports={
	name:'search',
	description: "finds users roblox profile",
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
			.setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
			.addField("Profile", `[click here](https://roblox.com/users/${id}/profile)`|| 'nul', true)
			.addField("Rolimons", `[click here](https://www.rolimons.com/player/${id})` || 'nul', true)
			.addField("RbxTrade", `[click here](https://rblx.trade/u/${username})` || 'nul', true)
			.addField("Username", `\`\`\`\n${info.username}\`\`\`` || 'nul', true)
			.addField("Displayname", `\`\`\`\n${info.displayName}\`\`\`` || 'nul', true)
			.addField("Account Age", `\`\`\`\n${info.age}\`\`\`` || 'nul', true)
			.addField("Roblox ID", `\`\`\`\n${id}\`\`\``)
			.addField("friendCount", `\`\`\`\n${info.friendCount}\`\`\``)
			.addField("isBanned", `\`\`\`\n${info.isBanned}\`\`\``)
			.addField("About", `\`\`\`\n${info.blurb}\`\`\``|| 'nul', true)
			.setColor(0)
			message.channel.send({embed})
		  })
		}
	  }).catch(function (err) {
		const { MessageEmbed } = require('discord.js');
		const { prefix } = require('./.././Config/config.json');
		const embed = new MessageEmbed()
		.addField("Sorry, that user doesn't seem to exist.",`**double check your spelling and try again!**`)
		.addField("👍 Tip, If you're using {Roblox}",`**do ${prefix}search Roblox**`)
		.addField("👎 Dont do this",`**${prefix}search {Roblox}**`)
		.setColor(0)
	   message.channel.send({embed})
	 });  
  } else { 
	const { MessageEmbed } = require('discord.js');
	const { prefix } = require('./.././Config/config.json');
	const embed = new MessageEmbed()
	.addField("Please provide a valid username",`**👍 Tip: Like ${prefix}search Roblox**`)
	.setColor(0)
	message.channel.send({embed})
}
}
}