const Discord = require('discord.js');
const Player = require('discord-music-player');

exports.run = async (client, message, args) => {
let müzik = args[0];
const voiceChannel = message.member.voiceChannel;
if (voiceChannel) return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));

if (client.player.isPlaying(message.guild.id) === true) {
  client.player.stop(message.guild.id);
  message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Şarkı Başarıyla Durduruldu.'));
}
else {
  message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Şuanda Şarkı Çalınmıyor!'));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 0
};

exports.help = {
  name: 'durdur',
  description: '.',
  usage: 'durdur'
};
