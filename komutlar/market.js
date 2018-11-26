const Discord = require('discord.js');


exports.run = function(client, message) {
  const market = new Discord.RichEmbed()
  .setDescription('Market')
  .setColor(' #00ff87 ')
  .addField('>satınal airdrop1','Tier 1 airdrop satın alır : **50** ' + message.guild.name + ' altını')
  .addField('>satınal airdrop2','Tier 2 airdrop satın alır : **100** ' + message.guild.name + ' altını')
  .addField('>satınal airdrop3','Tier 3 airdrop satın alır : **250** ' + message.guild.name + ' altını');
  
  message.channel.send(market);  
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['shop'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'market', //adını belirledik (kullanmak için gereken komut)
  description: 'Marketi Açar', //açıklaması
  usage: 'market' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz