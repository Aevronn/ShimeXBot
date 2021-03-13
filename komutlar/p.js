const Discord = require('discord.js');
const Player = require('discord-player');
const getYouTubeID = require('get-youtube-id');
const yts = require( 'yt-search' )

exports.run = async (client, message, args) => {
if(!message.member.voice.channel) { return message.channel.send(new MessageEmbed().setDescription(` You're not in voice channel.`)) }

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) { return message.channel.send(new MessageEmbed().setDescription(` You're not in the same voice channel.`)) }

if(!args[0]) { return message.channel.send(new MessageEmbed().setDescription(` Please indicate the title of a song.`)) }


if (client.player.isPlaying(message) === true) {
  client.player.play(message, args.join(" "), { firstResult: true })
  let muzikse = await yts(args.join(" "))
  const videos = muzikse.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
    let muziksid = v.videoId;
    let muziksresim = ` https://i.ytimg.com/vi/${muziksid}/hqdefault.jpg`;
    const views = String( v.views ).padStart( 10, ' ' )
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Added to queue: ' + v.title)
    .setThumbnail(muziksresim)
    );
})
}
else{
  client.player.play(message, args.join(" "), { firstResult: true })
  let muzikse = await yts(args.join(" "))
  const videos = muzikse.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
    let muziksid = v.videoId;
    let muziksresim = ` https://i.ytimg.com/vi/${muziksid}/hqdefault.jpg`;
    const views = String( v.views ).padStart( 10, ' ' )
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Now playing: ' + v.title)
    .setThumbnail(muziksresim)
    );
})};

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['P','play','Play','PLAY'],
  permLevel: 0
};

exports.help = {
  name: 'p',
  description: '.',
  usage: 'p'
};
