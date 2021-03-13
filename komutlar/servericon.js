const Discord = require('discord.js');


exports.run = function(client, message) {
            if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.MessageEmbed()
        .setDescription("**Server icon**")
        .setImage(message.guild.iconURL({ dynamic: true, size: 512 }))

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Servericon'],
  permLevel: 0
};

exports.help = {
  name: 'servericon',
  description: '',
  usage: 'servericon'
};
