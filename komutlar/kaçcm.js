const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let cm = Math.round(Math.random() * 60);

    let gayembed = new Discord.MessageEmbed()
        .setColor("#f442d4")
       .setDescription(`<@${message.author.id}> Adlı Kullanıcının haşmetlisi **${cm}** Santimetre!`)
    return message.channel.send(gayembed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Acaba Kaç CM',
  usage: 'kaçcm'
};
