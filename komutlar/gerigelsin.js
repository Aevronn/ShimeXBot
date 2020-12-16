const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    let sonuç = ["``%10``\nZor ama, imkansız değil. <:middle_finger:642160286991777813>","``%20``\nGelmez be kardeşim uğraşma.. <:disappointed_relieved:642160285578166292>","``%40``\nGeledebilir, gelmeyedebilir. <:pinching_hand:642160285771104266>","``%60``\nGelicek sanırım ya. <:thinking:642160285800595477>","``%80``\nGelmesi lazım artık. <a:timer:642160289407827990>","``%100``\nGelmiş bile, böyle devam. <:ok_hand:642160285787881482>"];
    let result = Math.floor((Math.random() * sonuç.length));
    let gerigelsin = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("Gelir mi acaba?", sonuç[result]);
  
    message.channel.send(gerigelsin);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["gerigelsin","gerigelicekmi?"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gerigelsin',
    description: 'gerigelsin',
    usage: 'gerigelicekmi'
  };