const Discord = require('discord.js');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.run = function(client,args, message) {
  const onoff = args.slice(0).join(' ');
  if (onoff.length < 1) return message.reply('On/Off Doğru kulanım : >oyunbil on/off')
  if (onoff === 'on') {
    var x = 0;
    message.channel.send('Oyun bil modu açıldı!')
  }
  if(onoff === 'of') {
    var x = 1;
    message.channel.send('Oyun bil modu kapandı !')
  }
  
  if(x === 0) {
    var d1 = Math.floor(Math.random() *7) + 10;
    var d2 = Math.floor(Math.random() *7) + 10;
    if (d1 === d2){
      var sayı = getRandomInt(6);
      if(sayı === 0){
        message.channel.sendMessage('Oyunu Bil !', {files: ["./resimler/at.png"]});
      }
    }
  }
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'oyunubil', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'oyunubilon/off' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz