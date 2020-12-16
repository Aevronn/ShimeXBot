const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user)return message.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (':point_right: Kendini veya Başkasını Etiketle :point_left:')
     }});
    let iq = ["70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130",];
    let result = Math.floor((Math.random() * iq.length));
    const op = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
    .addField(`@${user.username} adlı kişinin iq'su `, iq[result]);

    message.channel.send(op);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["iqtesti","ıq",],
  permLevel: 0
};
 
exports.help = {
  name: 'iq',
  description: 'iq',
  usage: 'iq '
};