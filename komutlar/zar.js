const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let nezaman = ["1","2","3","4","5","6"];
    let result = Math.floor((Math.random() * nezaman.length));
    let gerigelsin = new Discord.MessageEmbed()
    .setThumbnail("https://www.hareketligifler.net/data/media/710/zar-hareketli-resim-0104.gif")
    .addField("result: ", nezaman[result])
    .setColor('RANDOM');

    message.channel.send(gerigelsin);
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};
 
exports.help = {
  name: 'dice',
  description: '',
  usage: 'dice'
};