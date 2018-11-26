const Discord = require('discord.js');


exports.run = function(client, message) {
    const help = new Discord.RichEmbed()
      .setDescription('Komutlar')
      .setColor('#3eff00')
      .addField('>ping','Botun pingini gösterir')
      .addField('>reboot','Botu yeniden başlatır (Yanlızca yetkili kişiler yapabilir.)')
      .addField('>botinfo','Bot hakkında bilgi verir.')
      .addField('>serverinfo','Server hakkında bilgi verir.')
      .addField('>avatarım','Avatarınızı gönderir')
      .addField('>8ball',"8ball oynar")
      .addField('>oyunseç','Belirlenmiş oyunları seçip sizi oyun seçmekten kurtarır.')
      .addField('>spm yada >spam', 'Spam yapar')
      .addField('>davet , >invite','Botun kısaltılmış davet linkini atar.')
      .addFİeld('>kick','Kicklemek istediğiniz kişiyi kickler')
      
    message.channel.send(help);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['help','HELP','yardım','YARDIM'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'help', //adını belirledik (kullanmak için gereken komut)
  description: 'Bot yardımı', //açıklaması
  usage: 'help' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
