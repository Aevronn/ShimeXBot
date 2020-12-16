const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/FWmWhp1wUfpMQ/giphy.gif","https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("stres çarkınız;")
        .setColor("#FF69B4")
        .setFooter(`stres çarkın ${message.author.tag} `, message.author.avatarURL,)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çark","stres","stresçarki","strescarki","strescarkı"],
  permLevel: 0
};

exports.help = {
  name: 'stresçarkı',
  description: 'sizin için stresçarkı çevirir.',
  usage: 'stresçarkı'
};
