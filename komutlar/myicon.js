const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('your icon')
  .setImage(message.author.avatarURL({ dynamic: true, size: 512 }))
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['icon'],
  permLevel: 0
};

exports.help = {
  name: 'myicon',
  description: '',
  usage: 'myicon'
};
