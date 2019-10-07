const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
msg.channel.send(
new RichEmbed()
.setColor("RANDOM")
.addField("Синтаксис.", "[ ] - необязательный аргумент.\n( ) - обязательный аргумент.\n## - префикс.")
.addField("Развлекательные.", "flip - орёл или решка.\nssp (stone или scissors или paper) - камень, ножницы, бумага.")
.addField("Информационные.", "help - информация о командах.\nbi - информация о боте.\nsi - информация о сервере.\nui [@пользователь#0000] - информация о пользователе.\ninv (bot или srv) - получить приглашение.")
.addField("Оффициальные.", "sub (название новостей) - подписка/отписка на новости.\ncol (цвет) - получить цвет для ника.")
.addField("Приватные.", "s - говорить от лица бота.")
.setFooter(msg.author.tag, msg.author.avatarURL)
.setTimestamp()
);
};
module.exports.help = {
  name: 'help'
};