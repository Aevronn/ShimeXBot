const Discord = require('discord.js');
const Player = require('discord-music-player');
const getYouTubeID = require('get-youtube-id');
const yts = require( 'yt-search' )

exports.run = async (client, message, args) => {
var muzik = message.content.slice(6)
const voiceChannel = message.member.voiceChannel;

if (!args[0]) {
  message.channel.send('Lütfen Şarkı Belirtin!');
};
if (voiceChannel) return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));

if (client.player.isPlaying(message.guild.id) === true) {
  var song = client.player.addToQueue(message.guild.id, muzik)

  var muzik = message.content.slice(6)

  let muzikse = await yts(muzik)
  const videos = muzikse.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
    let muziksid = v.videoId;
    let muziksresim = ` https://i.ytimg.com/vi/${muziksid}/hqdefault.jpg`;
    const views = String( v.views ).padStart( 10, ' ' )
    message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Başarıyla sıraya eklendi: ' + v.title)
  .setThumbnail(muziksresim)
  );
  })
}
else{
var song = await client.player.play(message.member.voice.channel, muzik,);
var muzikveri = song.song;
let muzikurll = muzikveri.url;
let muzikid = getYouTubeID(muzikurll);;
let muzikresim = ` https://i.ytimg.com/vi/${muzikid}/hqdefault.jpg`;
message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Şu Anda Oynatılıyor: ' + muzikveri.name)
.setFooter('ses seviyesi otomatik olarak "100" ayarlandı')
.setThumbnail(muzikresim));
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oynat',
  description: '.',
  usage: 'oynat'
};
