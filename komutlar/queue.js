const Discord = require('discord.js');
const Player = require('discord-player');

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(` You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` You are not in the same voice channel !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(` No songs currently playing !`);


    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Server queue')
    .setDescription(`${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nNow Playing :  ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
      return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
  }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length} song(s)...`}`))
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
