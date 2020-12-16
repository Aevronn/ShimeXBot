const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2020')
.addField('Bot Sahibi', '<@321959631335194634>')
.addField('sunucu','https://discord.gg/7gTT9nW    tıklayarak katılabilirsiniz')
.addField('Hedefimiz Nedir?', 'Yok')
.setFooter('ShimeX - Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};
