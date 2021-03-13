const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {


if (args[0] === "general") {
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('#fff000')
        .setAuthor(`Komutlar`, client.user.avatarURL) 
        .addField(`**:man_technologist:General commands**\n\n\n  `, `**/info = bot info.** \n **/say = you write something and bot says it.** \n **/servericon = shows servers icon.** \n **/myicon = shows your icon.** \n **/clear = deletes as many as given number.** \n **/ping = bot ping.** \n **/website = shows website link.** \n`) 
        .addField(`Linkler :arrow_down_small:`, `[My Website](https://shimex.cf) 
        [My server](https://discord.gg/7gTT9nW)`) 
        .setFooter(`Asked by ${message.author.username}.`, message.author.avatarURL));
};

if (args[0] === "music") {
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('#fff000')
        .setAuthor(`Komutlar`, client.user.avatarURL) 
        .addField(`:musical_note:Music commands**\n  `,`**/play or /p = find songs and play.** \n **/skip = skips song.** \n **/stop = stops the music.** \n **/volume = sets volume.** \n **/queue = queue songs.** \n  **/pause = pause the songs!.** \n  **/resume = resume the pausing song.** \n **/spotify = plays The song that anyone is listening to on the spotify.** \n `) 
        .addField(`Linkler :arrow_down_small:`, `[My Website](https://shimex.cf) 
        [My Server](https://discord.gg/7gTT9nW)`) 
        .setFooter(`Asked by ${message.author.username}.`, message.author.avatarURL));
};

return message.channel.send(new Discord.MessageEmbed()

.setColor('#fff000')
.setAuthor(`categories`, client.user.avatarURL) 
.addField(`:man_technologist:General \n`, `/help general  `) 
.addField(`:musical_note:Music\n`, `/help music`) 
.addField(`Links :arrow_down_small:`, `[My Website](https://shimex.cf) 
[My Server](https://discord.gg/7gTT9nW)`) 
.setFooter(`asked by ${message.author.username} .`, message.author.avatarURL));
}
 
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["help"],
permLevel: 0,
};
 
exports.help = {
name: 'Help',
description: '',
usage: 'Help'
};
