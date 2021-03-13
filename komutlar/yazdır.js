const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('you will write a something for to say');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say',],
  permLevel: 3
};

exports.help = {
  name: 'Say',
  description: '',
  usage: 'Say'
};
