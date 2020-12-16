const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/694513976247320589/708409085946757251/gusulabdestinasilalinir-419.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setFooter(`ayıp ayıp nasıl bilmiyosun ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gusül',
  description: 'gusül nasıl alınır.',
  usage: 'gusül'
};