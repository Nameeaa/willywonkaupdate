const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Spam atmam için bir yazı belirt >spm <yazı>');
  
  message.delete();
  let a = 10;
  let x = 10;
  while (true) {
    message.channel.send(mesaj)
    a -= 1;
    
    if (a === 0) {
        message.reply('Spam bitti ' + '**' + x +'**' +' adet mesaj spamlandı!')  
        break;
    }
    else
    {
      
      continue;
    }
  }
};


exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['spm','SPM'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'spam', //adını belirledik (kullanmak için gereken komut)
  description: 'Spam yapar.', //açıklaması
  usage: 'spam' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
