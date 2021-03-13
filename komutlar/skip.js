const Discord = require('discord.js');
const Player = require('discord-player');

exports.run = async (client, message, args) => {
if(!message.member.voice.channel) { return message.channel.send(new MessageEmbed().setDescription(`${client.emotes.error} | You're not in voice channel.`)) }

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) { return message.channel.send(new MessageEmbed().setDescription(`${client.emotes.error} | You're not in the same voice channel.`)) }

if (client.player.isPlaying(message) === true) {
  message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`Skipped`)
  );
  client.player.skip(message);
}
else{
    message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`where is the song?`)
        );
}



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s','S','Skip','SKİP'],
  permLevel: 0
};

exports.help = {
  name: 'skip',
  description: '.',
  usage: 'skip'
};
