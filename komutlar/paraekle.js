const Discord = require('discord.js');
const economy = require('discord-eco');

exports.run = function(client, message, args) {
  let kişilik = args.slice(0).join(' ');
  if(message.author.id === '437202096459087873') {
      economy.updateBalance(kişilik, 10000).then(i => {
        message.reply(10000+ " **"+ message.guild.name+ "**" + " altını eklendi!")
        console.log('10000 para eklendi')
        
      }) 
    }
    else{
      message.reply('Bu Komutu Sadece @Hılawla#0733 kullanabilir');
    }
}; 


exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['paraekle','pe'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'paraekle', //adını belirledik (kullanmak için gereken komut)
  description: 'Paraekler', //açıklaması
  usage: 'paraekle' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz



