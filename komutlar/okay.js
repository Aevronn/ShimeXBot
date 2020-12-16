const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send(new Discord.MessageEmbed()
   .setDescription('okay')
   .setImage('https://media.giphy.com/media/du8YLuZ9W7gqaFcx1W/giphy.gif')
 );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'okay',
  description: 'okay.',
  usage: 'okay'
};
