exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor :broken_heart:.",
      "Aşkölçer %6 Gösteriyor.:broken_heart: ",
      "Aşkölçer %9 Gösteriyor.:broken_heart:",
      "Aşkölçer %12 Gösteriyor.:green_heart:",
      "Aşkölçer %18 Gösteriyor. :green_heart:",
      "Aşkölçer %20 Gösteriyor.:orange_heart:",
      "Aşkölçer %23 Gösteriyor.:orange_heart:",
      "Aşkölçer %26 Gösteriyor.:yellow_heart:",
      "Aşkölçer %29 Gösteriyor.:yellow_heart:",
      "Aşkölçer %30 Gösteriyor.:heart:",
      "Aşkölçer %40 Gösteriyor.:white_heart:",
      "Aşkölçer %50 Gösteriyor.:white_heart:",
      "Aşkölçer %60 Gösteriyor.:white_heart:",
      "Aşkölçer %70 Gösteriyor.:white_heart:",
      "Aşkölçer %73 Gösteriyor.:white_heart:",
      "Aşkölçer %76 Gösteriyor.:blue_heart:",
      "Aşkölçer %79 Gösteriyor.:blue_heart:",
      "Aşkölçer %82 Gösteriyor.:blue_heart:",
      "Aşkölçer %85 Gösteriyor.:blue_heart:",
      "Aşkölçer %88 Gösteriyor.:blue_heart:",
      "Aşkölçer %90 Gösteriyor.:couple_with_heart:",
      "Aşkölçer %91 Gösteriyor.:couple_with_heart:",
      "Aşkölçer %92 Gösteriyor.:couple_with_heart:",
      "Aşkölçer %93 Gösteriyor.:couple_with_heart:",
      "Aşkölçer %94 Gösteriyor.:couple_with_heart:",
      "Aşkölçer %95 Gösteriyor.:black_heart:",
      "Aşkölçer %96 Gösteriyor.:black_heart:",
      "Aşkölçer %97 Gösteriyor.:black_heart:",
      "Aşkölçer %98 Gösteriyor.:black_heart:",
      "Aşkölçer %99 Gösteriyor.:black_heart:",
      "Aşkölçer %100 Gösteriyor.:black_heart:",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kimi Seviyorsun?')
  }});



    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }


  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["aşk","askolç","askölç","ask"],
    permLevel: 0
   };

  exports.help = {
    name: 'aşkölç',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölç'
   }
