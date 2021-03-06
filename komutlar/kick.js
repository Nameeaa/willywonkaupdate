
const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
    

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicklenen kişi", `${kUser} with ID ${kUser.id}`)
    .addField("Kickleyen", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicklendiği yer", message.channel)
    .addField("Kicklendiği zaman", message.createdAt)
    .addField("Sebep", kReason);

    let kickChannel = message.guild.channels.find(`name`, "ceza-takip-listesi");
    if(!kickChannel) return message.channel.send("ceza-takip-listesi isminde bir kanal bulamadım!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    message.channel.send('Kişi Kicklendi')
    return;
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kick', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'kick' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
