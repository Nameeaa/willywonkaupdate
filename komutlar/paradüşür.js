const Discord = require('discord.js');
const economy = require('discord-eco');

exports.run = function(client, message, args) {
  
  let kişilik = args.slice(0).join(' ');
  if(message.author.id === '437202096459087873') {
      economy.updateBalance(kişilik, -10000).then(i => {
        message.reply(10000+ " **"+ message.guild.name+ "**" + " altını eksiltildi!")
        console.log('10000 para eksiltti') 
      }) 
    }
    else{
      message.reply('Bu Komutu Sadece @Hılawla#0733 kullanabilir');
    }
}; 


exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['paraeksilt'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'paraeksilt', //adını belirledik (kullanmak için gereken komut)
  description: 'Para eksiltir', //açıklaması
  usage: 'paraeksilt' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz



