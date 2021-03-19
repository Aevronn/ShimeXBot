const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(` You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(` No music currently playing !`);

    if (!client.player.getQueue(message).paused) return message.channel.send(` The music is already playing !`);

    client.player.resume(message);

    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(` Song resumed !`)
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Resume','RESUME'],
  permLevel: 0
};

exports.help = {
  name: 'resume',
  description: '.',
  usage: 'resume'
};
