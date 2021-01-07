const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

if (args[0] === "eğlence") {
return message.channel.send(new Discord.MessageEmbed()
        .setColor('#fff000')
        .setAuthor(`Komutlar`, client.user.avatarURL) 
        .addField(`**:joy:Eğlence Komutları**   \n`,`**/kedi = Rastgele kedi gif atar.** \n **/nahçek = İstediğiniz Kişiye nah çekersiniz.** \n **/kaçcm = kaç santim.** \n **/aşkölç = aşkınızı ölçersiniz.** \n **/yarraa = beter ali.** \n **/okay  = ok gif.** \n **/kıymetlimizz = gollum.** \n **/stresçarkı = sizin için stres çarkı çevirir.** \n **/espri =  sizin için çok kötü espri yapar.** \n **/nezaman = istediğiniz şeyin ne zaman olucağını tahmin eder.** \n **/gusül = gusül nasıl alınır öğretir.** \n **/gerigelsin = geri dönüp dönmeyeceğini tahmin eder.** \n **/başaramadıkabi = neyi başaramadın a...** \n **/nudeat = nude gönderir.** \n **/iq = iq ölçer.** \n ,`) 
        .addField(`Linkler :arrow_down_small:`, `[Websitem](https://shimex.cf) 
        [Sunucum](https://discord.gg/7gTT9nW)`) 
        .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL));
};

if (args[0] === "genel") {
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('#fff000')
        .setAuthor(`Komutlar`, client.user.avatarURL) 
        .addField(`**:man_technologist:Genel Komutlar**\n\n\n  `, `**/temizle = belirttiğiniz kadar mesaj siler.** \n **/bağış = bağış linkini yollar.** \n **/bilgi = bot hakkında bilgi.** \n **/yaz = bota birşeyler söyletirsiniz.** \n **/servericon = server iconunu gösterir.** \n **/iconum = profil fotoğrafınızı gösterir.** \n **/kullanıcıbilgim = bilgilerinizi gösterir.** \n **/ping = botun pingini Gösterir.** \n **/yazıtura = yazı tura atar.** \n **/komutsayısı = botta kaç tane komut olduğunu görürsünüz.** \n **/website = botun websitesine yönlendirir.** \n **/kaçıklama = kanal açıklamasını değiştirir.**`) 
        .addField(`Linkler :arrow_down_small:`, `[Websitem](https://shimex.cf) 
        [Sunucum](https://discord.gg/7gTT9nW)`) 
        .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL));
};

if (args[0] === "müzik") {
        return message.channel.send(new Discord.MessageEmbed()
        .setColor('#fff000')
        .setAuthor(`Komutlar`, client.user.avatarURL) 
        .addField(`:musical_note:Müzik Komutları**\n  `,`**/repeat veya /tekrarla = /repeat açık yazdığınız zaman çalınan şarkı tekrarlanır kapatmak için /repeat kapalı yazmanız yeterli.** /çal veya /p = girdiğiniz müzik ismini youtubede arar ve çalar.** \n **/geç = bir sonraki müziğe geçer.** \n **/durdur = müziği durdurur ve sesli kanaldan çıkar.** \n **/ses = ses düzeyini ayarlar :bangbang: önerilen ses seviyesi 150'dir :bangbang:.** \n **/sıra = çalan ve sıradaki şarkıları gösterir.** \n  **/duraklat = şarkıyı duraklatır sesli konuşmadan çıkmaz!.** \n  **/devam = duraklatılan şarkıyı devam ettirir.** \n  `) 
        .addField(`Linkler :arrow_down_small:`, `[Websitem](https://shimex.cf) 
        [Sunucum](https://discord.gg/7gTT9nW)`) 
        .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL));
};

return message.channel.send(new Discord.MessageEmbed()

.setColor('#fff000')
.setAuthor(`Kategoriler`, client.user.avatarURL) 
.addField(`:joy:Eğlence \n`, `/yardım eğlence `) 
.addField(`:man_technologist:Genel \n`, `/yardım genel  `) 
.addField(`:musical_note:Müzik\n`, `/yardım müzik`) 
.addField(`Linkler :arrow_down_small:`, `[Websitem](https://shimex.cf) 
[Sunucum](https://discord.gg/7gTT9nW)`) 
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL));
}
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help"],
permLevel: 0,
kategori: "kategori"
};
 
exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
