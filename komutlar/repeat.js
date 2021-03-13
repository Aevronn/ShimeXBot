const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(` You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(` No music currently playing !`);

    if(client.player.getQueue(message).repeatMode) {
        client.player.setRepeatMode(message, false)
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(` Repeat mode **disabled**.`)
        );
    } else {
        client.player.setRepeatMode(message, true)
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(` Repeat mode **enabled** the current music will be repeated endlessly.`)
        );
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Repeat','REPEAT'],
  permLevel: 0
};

exports.help = {
  name: 'repeat',
  description: '.',
  usage: 'repeat'
};
