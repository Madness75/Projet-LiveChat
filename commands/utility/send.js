const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data : new SlashCommandBuilder()
    .setName('send')
    .setDescription('Allow user to send image to others'),
  async execute(interaction){
    await interaction.reply(`Image send by ${interaction.user.username}`)
  }
};