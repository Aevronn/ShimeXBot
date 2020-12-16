const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let nezaman = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","hiçbir zaman",];
    let result = Math.floor((Math.random() * nezaman.length));
    let gerigelsin = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("Ne diledin? :thinking:", nezaman[result]);
  
    message.channel.send(gerigelsin);
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nezaman',
  description: 'sa',
  usage: 'nezaman'
};