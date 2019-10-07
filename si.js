const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
var m = msg.guild
var i = m.id
var e = new RichEmbed()
.setColor("RANDOM")
.setAuthor(`Сервер ${m.name}.`)
.setThumbnail(msg.guild.iconURL)
.addField("Акроним.", m.nameAcronym)
.addField("Идентификатор.", i)
.addField("Дата создания.", m.createdAt)
.addField("Владелец.", m.owner)
.addField("Регион.", m.region)
//.addField("Количество ролей.", m.roles)
.addField("Уровень защиты.", m.verificationLevel)
.setFooter(msg.author.tag, msg.author.avatarURL)
.setTimestamp()
msg.channel.send(e)
};
module.exports.help = {
  name: 'si'
};