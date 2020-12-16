const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`ShimeX bot - Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail("https://cdn.discordapp.com/attachments/694513976247320589/787049663568019506/logo.jpg")
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['komut-sayısı'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutsayısı',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutsayısı'
};