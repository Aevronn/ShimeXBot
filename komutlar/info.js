const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Info')
.setTimestamp()
.addField('year of foundation', '2020')
.addField('Owner', '<@321959631335194634>')
.addField('Server','https://discord.gg/7gTT9nW')
.addField('what is my goal', 'I have no goal')
.setFooter('ShimeX - Info Command', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info','INFO'],
  permLevel: 0
};
exports.help = {
  name: 'Info',
  description: '.',
  usage: 'Info'
};
