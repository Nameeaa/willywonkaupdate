const Discord = require('discord.js');


exports.run = function(client, message) {
  const parahelp = new Discord.RichEmbed()
    .setDescription('Para Komutları')
    .setColor('#00ffcd')
    .addField('>altın','Altınınızın miktarını gösterir');
  message.channel.send(parahelp); 

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ph'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'parahelp', //adını belirledik (kullanmak için gereken komut)
  description: 'Para komutlarını gösterir', //açıklaması
  usage: 'parahelp' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz