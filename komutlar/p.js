const Discord = require('discord.js');
const getYouTubeID = require('get-youtube-id');
const yts = require( 'yt-search' )


exports.run = async (client, message, args) => {
if(!message.member.voice.channel) { return message.channel.send(new MessageEmbed().setDescription(` You're not in voice channel.`)) }

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) { return message.channel.send(new MessageEmbed().setDescription(` You're not in the same voice channel.`)) }

if(!args[0]) { return message.channel.send(new MessageEmbed().setDescription(` Please indicate the title of a song.`)) }

if (args[0].startsWith("https")) {
  await client.player.playlist(message, {
    search: args.join(' '),
});
Mesaj.channel.send('Wait a few seconds').then(a => a.delete({ timeout: 3000 }));
  }

if (client.player.isPlaying(message) === true) {
  let song = await client.player.addToQueue(message, args.join(' '));
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
  
  let song = await client.player.play(message, args.join(' '));
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
