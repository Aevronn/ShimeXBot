const Discord = require('discord.js');
const Player = require('discord-music-player');

exports.run = async (client, message, args) => {
const voiceChannel = message.member.voiceChannel;

if (voiceChannel) return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));

if (!args[0]) {
  message.channel.send('Lütfen 200-0 arası Ses Seviyesi Belirtin!');
};

if (args[0]) {
  client.player.setVolume(message.guild.id, args[0]);
  message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`ses seviyesi ayarlandı: ${args[0]}.`));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'ses',
  description: '.',
  usage: 'ses'
};
