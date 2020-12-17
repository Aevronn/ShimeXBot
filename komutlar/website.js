const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`ShimeX `, client.user.avatarURL())
        .setColor('0x36393E')
        .setTitle(`ShimeX - website`)
        .setDescription(`ShimeX Bot websitesine gitmek için linke tıklayınız
        https://shimex.cf
 ` + ``)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.send(embed);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site'],
  permLevel: 0,
};

exports.help = {
  name: 'website',
  description: '',
  usage: 'website'
};
