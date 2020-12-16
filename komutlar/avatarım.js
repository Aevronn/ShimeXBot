const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('işte avatarın')
  .setImage(message.author.avatarURL())
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'iconum',
  description: 'profil fotoğrafını gösterir.',
  usage: 'iconum'
};
