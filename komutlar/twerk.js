const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/C9M0Q2ks5Wt0mErIXe/giphy.gif","https://media.giphy.com/media/x4bq6nKyGZpY0MVqqv/giphy.gif","https://media.giphy.com/media/t1kRtJmCI4R1e/giphy.gif","https://media.giphy.com/media/gnE9JR4OxfLig/giphy.gif","https://media.giphy.com/media/tmK8yOGJa9myQ/giphy.gif","https://media.giphy.com/media/xPeNhbkP4HHX2/giphy.gif","https://media.giphy.com/media/OOUctxPkKBqFO/giphy.gif","https://media.giphy.com/media/ScMCHe4FAMwso/giphy.gif","https://media.giphy.com/media/lLZ4wfQnahdcI/giphy.gif","https://media.giphy.com/media/26n6JeACUHft3rl72/giphy.gif","https://media.giphy.com/media/YnLS7kZNufEIM/giphy.gif","https://media.giphy.com/media/6BRADOGAoRY0U/giphy.gif","https://media.giphy.com/media/3ornk5d834O3D7gFeE/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("twerk")
        .setColor("#FF69B4")
        .setFooter(`twerk it baby ${message.author.tag} `, message.author.avatarURL)
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
  name: 'twerk',
  description: 'twerkvakti.',
  usage: 'twerk'
};
