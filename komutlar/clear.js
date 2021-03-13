const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, args) => {
  const Sayı = Number(args[0]);

  const Hata = new MessageEmbed()
    .setColor("#7f0000")
    .setTitle("error!")
    .setFooter(`${Mesaj.author.username} Asked by.`,Mesaj.author.avatarURL);

  const Başarılı = new MessageEmbed()
    .setColor("#007f00")
    .setTitle("Succesfuly!")
    .setFooter(`${Mesaj.author.username} Asked by.`,Mesaj.author.avatarURL);
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      Hata.setDescription("you should have 'manage messages' permission to use this command.");
      Mesaj.channel.send(Hata).then(a => a.delete({ timeout: 5000 }));
      
    } else {
      if (!Sayı) {
        Hata.setDescription("specify a number");
        Mesaj.channel.send(Hata).then(a => a.delete({ timeout: 5000 }));
      } else {
        if (Sayı < 101) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(Sayı);
        }
        if (Sayı > 100 && Sayı < 200) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 100);
          });
        }
        if (Sayı == 200) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 200 && Sayı < 300) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 200);
          });
        }
        if (Sayı == 300) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 300 && Sayı < 400) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 300);
          });
        }
        if (Sayı == 400) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 400 && Sayı < 500) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 400);
          });
        }
        if (Sayı == 500) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 500 && Sayı < 600) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 500);
          });
        }
        if (Sayı == 600) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 600 && Sayı < 700) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 600);
          });
        }
        if (Sayı == 700) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 700 && Sayı < 800) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 700);
          });
        }
        if (Sayı == 800) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 800 && Sayı < 900) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 800);
          });
        }
        if (Sayı == 900) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 900 && Sayı < 1000) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 900);
          });
        }

        if (Sayı == 1000) {
          Başarılı.setDescription(`${Sayı} messages succesfuly deleted!`);
          Mesaj.channel.send(Başarılı).then(a => a.delete({ timeout: 5000 }));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 1000) {
          Hata.setDescription("You can delete up to 1000 messages.");
          Mesaj.channel.send(Hata).then(a => a.delete({ timeout: 5000 }));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Clear","Delete","c"],
  permLevel: 0
};

exports.help = {
  name: "clear"
};