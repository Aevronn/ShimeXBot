const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`ShimeX `, client.user.avatarURL())
        .setColor('RANDOM')
        .setTitle(`ShimeX - donate`)
        .setDescription(`If You Want Donate To Me
        https://www.patreon.com/shimex
 ` + ``)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`Asked by ${message.author.username}`, message.author.avatarURL)
    return message.channel.send(embed);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['donate','DONATE'],
  permLevel: 0,
};

exports.help = {
  name: 'Donate',
  description: '',
  usage: 'Donate'
};
