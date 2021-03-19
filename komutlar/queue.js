const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(` You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(` No songs currently playing !`);
   
    let queue = client.player.getQueue(message);
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Queue:\n'+(queue.songs.map((song, i) => {
      return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`}).join('\n')))
    );

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Queue','QUEUE'],
  permLevel: 0
};

exports.help = {
  name: 'queue',
  description: '.',
  usage: 'queue'
};
