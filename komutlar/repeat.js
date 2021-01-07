const Discord = require('discord.js');
const Player = require('discord-music-player');

exports.run = async (client, message, args) => {
const voiceChannel = message.member.voiceChannel;
if (voiceChannel) return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));

if (args[0] === "açık") {
  if (client.player.isPlaying(message.guild.id) === true) {
    client.player.setRepeatMode(message.guild.id, true);
    message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Şarkı tekrarlanma modu açık.'));
  }
  else {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Şuanda Şarkı Çalınmıyor!'));
  }
}

if (args[0] === "kapalı") {
  if (client.player.isPlaying(message.guild.id) === true) {
    client.player.setRepeatMode(message.guild.id, false);
    message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Şarkı tekrarlanma modu kapalı.'));
  }
  else {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Şuanda Şarkı Çalınmıyor!'));
  }
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tekrarla','repeat'],
  permLevel: 0
};

exports.help = {
  name: 'repeat',
  description: '.',
  usage: 'repeat'
};
