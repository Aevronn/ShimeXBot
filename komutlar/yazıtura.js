const Discord = require('discord.js');
 
var hd = [
    "Tura",
    "Yazı"
];
 
module.exports.run = async (bot, message, args) => {
 

  let replies = ["https://media.giphy.com/media/J1duLhGIwU5eqHv7pK/giphy.gif"];

  let result = Math.floor((Math.random() * replies.length));

  let gifembed = new Discord.MessageEmbed()
      .setImage(replies[result])
      .setTitle( hd[Math.floor(Math.random() * hd.length)]);

  message.channel.send(gifembed);

}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıtura','turayazı','paraçevir','paradöndür'],
  permLevel: 0
};
 
exports.help = {
  name: 'yazıtura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazıtura'
};