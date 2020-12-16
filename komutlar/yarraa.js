const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/RfXmn94ZA3ZFp6ozSj/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("beterali")
        .setColor("#FF69B4")
        .setFooter(`yarraaa ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yara','yarra','yaraa','yraa','yarraa'],
  permLevel: 0
};

exports.help = {
  name: 'yara',
  description: 'beterali.',
  usage: 'yarraa'
};
