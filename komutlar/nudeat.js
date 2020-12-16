const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.discordapp.net/attachments/694513976247320589/718924307006488717/nahsupermen.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setFooter(`Bak Attım Sapık ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nude","atnude"],
  permLevel: 0
};

exports.help = {
  name: 'nudeat',
  description: 'nude.',
  usage: 'nudeat'
};