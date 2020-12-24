const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`ShimeX `, client.user.avatarURL())
        .setColor('0x36393E')
        .setTitle(`ShimeX - Bağış`)
        .setDescription(`Bana Bağışta bulunmak isterseniz
        https://www.patreon.com/shimex
 ` + ``)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.send(embed);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bağış'],
  permLevel: 0,
};

exports.help = {
  name: 'Bağış',
  description: '',
  usage: 'Bağış'
};
