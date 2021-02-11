const Discord = require('discord.js')
const canvacord = require("canvacord");
const Player = require('discord-music-player');
exports.run = (client, message, args) => {
           var user = message.mentions.users.first() || message.author;
  
          let convert = require('parse-ms')
  
          let status = user.presence.activities[0];

          let vuser = message.member.voice.channel;

         if(!vuser) return message.channel.send(new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setDescription('Lütfen Sesli Bir Kanala Giriş Yapınız!'));
  
          if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("Bu Kullanıcı Spotify'dan Şarkı Dinlemiyor");

          if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null & client.player.isPlaying(message.guild.id) === false) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
              name = status.details,
              artist = status.state,
              album = status.assets.largeText,
              timeStart = "00:00",
              timeEnd = status.timestamps.end,
              timeConvert = convert(timeEnd - timeStart);
  
            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
  
            let time = `${minutes}:${seconds}`;
  
            let sarki = name + artist;
            
            var song = client.player.play(message.member.voice.channel, sarki,);
            const card = new canvacord.Spotify()
              .setAuthor(artist)
              .setAlbum(album)
              .setStartTimestamp(timeStart)
              .setEndTimestamp(timeEnd)
              .setImage(image)
              .setProgressBar('BAR', "RED")
              .setTitle(name);
            card.build()
              .then(data => {
                const attatchment = new Discord.MessageAttachment(data, 'spotify.png')
                message.channel.send("Şu anda oynatılıyor:")
                message.channel.send(attatchment)
              })

        };

        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null & client.player.isPlaying(message.guild.id) === true) {
          let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = "00:00",
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);

        let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
        let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;

        let time = `${minutes}:${seconds}`;

        let sarki = name + artist;
        var song = client.player.addToQueue(message.guild.id, sarki)
        const card = new canvacord.Spotify()
          .setAuthor(artist)
          .setAlbum(album)
          .setStartTimestamp(timeStart)
          .setEndTimestamp(timeEnd)
          .setImage(image)
          .setProgressBar('BAR', "RED")
          .setTitle(name);
        card.build()
          .then(data => {
            const attatchment = new Discord.MessageAttachment(data, 'spotify.png')
            message.channel.send("Başarıyla Sıraya Eklendi:")
            message.channel.send(attatchment)
          })

        };
      };
      
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: [],
            permLevel: 0
          };
          
          exports.help = {
            name: 'spotify',
            description: '',
            usage: 'spotify'
          };