const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
var user = msg.mentions.users.first() || msg.author;
var member = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
var a = "Пользователь "
if(user.bot==true){
a = "Бот "
}
var b = user.id
var e = new RichEmbed()
.setColor("RANDOM")
.setAuthor(a+user.username+".")
.setThumbnail(user.avatarURL)
.addField("Дискриминатор.", user.discriminator)
.addField("Тег.", user.tag)
.addField("Идентификатор.", b)
.addField("Дата создания.", user.createdAt)
.setFooter(msg.author.tag, msg.author.avatarURL)
.setTimestamp()
msg.channel.send(e)
};
module.exports.help = {
  name: 'ui'
};