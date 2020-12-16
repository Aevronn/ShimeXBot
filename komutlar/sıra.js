const Discord = require('discord.js');
const Player = require('discord-music-player');

exports.run = async (client, message, args) => {

if (client.player.isPlaying(message.guild.id) === true) {
  let calanadi = await client.player.nowPlaying(message.guild.id);
  let queue = await client.player.getQueue(message.guild.id);
  message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Sıra:')
  .setDescription(`çalan:  ${queue.songs.map((song) => {
    return ` ${song.name} \n`
}).join('\n')}`));
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
  aliases: ['queue'],
  permLevel: 0
};

exports.help = {
  name: 'sıra',
  description: '.',
  usage: 'sıra'
};
