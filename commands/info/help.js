const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("❓See my commands and informations."),
	execute: async ({ client, interaction }) => {

        await interaction.reply({ content: '**Check your direct messages for informations and a list of commands!** :information_source:', ephemeral: true})
		
		//Custom the embed
		const embed = new EmbedBuilder()
		.setDescription(
		'Hello! I am a multi-purpose discord bot that does music, moderation and other fun and useful things. \n I am here to to help discord users to have the best experience using discord. \n Do `/help <command>` for extended information on a command.')

		.setColor('#3533cd')
		.setTimestamp(Date.now())
		.setAuthor({
			url: `https://somelink.com/nothing`,
			iconURL: client.user.displayAvatarURL(),
			name: 'TAURUS',
		})
	
		.addFields([
			{
				name:`**Looking for support?**`,
				value: `https://somelink.com/nothing`,
				inline: false,
	
		
			},
			{
				name:`**Invite:**`,
				value: `https://discord.com/api/oauth2/authorize?client_id=1093174673874878606&permissions=8&scope=applications.commands%20bot`,
				inline: false,
			},
			{
				name: `**Tip!**`,
				value: `For more details about how to use each command access the link: https://somelink.com/nothing`,
				inline: false,
			}])
        //Category Commands
		.addFields([
			{
				name:'__**Commands**__',
				value: ' ',
				inline:false,
			},
			{
				name:`**:tools: Admin**`,
				value: '`/clear`',
				inline: false
			},
		
			{
				name:`**:information_source: Info**`,
				value: '`/help`',
				inline: false
			}

		])
		
		//Send message to the user
		await interaction.user.send({
			embeds: [embed]
		});
	},
}

//TODO: studying the code and keep updating the code.