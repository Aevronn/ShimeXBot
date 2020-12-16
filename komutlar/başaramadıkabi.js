const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/TKuanlQdpwcrRXbMRN/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("")
        .setColor("#FF69B4")
        .setFooter(` ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['basaramadıkabi','basaramadikabi'],
  permLevel: 0
};

exports.help = {
  name: 'başaramadıkabi',
  description: '.',
  usage: 'başaramadıkabi'
};
