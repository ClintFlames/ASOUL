const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
var a = args.join(" ")
var b = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
var c = null;
var d = null;
switch (a) {
	case "stone":
		d = 0;
		switch (b) {
			case 0:
				c = 0;
			break;
			case 1:
				c = 1;
			break;
			case 2:
				c = 2;
			break;
		}
	break;
	case "scissors":
		d = 1;
		switch (b) {
			case 0:
				c = 2;
			break;
			case 1:
				c = 0;
			break;
			case 2:
				c = 1;
			break;
		}
	break;
	case "paper":
		d = 2;
		switch (b) {
			case 0:
				c = 1;
			break;
			case 1:
				c = 2;
			break;
			case 2:
				c = 0;
			break;
		}
	break;
	default:
	msg.channel.send(
		new RichEmbed()
			.setColor('RANDOM')
			.addField("Синтаксис.", "stone = камень, scissors = ножницы, paper = бумага.")
			.setFooter(msg.author.tag, msg.author.avatarURL)
			.setTimestamp()
	);
	return;
}
switch (d) {
	case 0:
		d = "Камень."
	break;
	case 1:
		d = "Ножницы."
	break;
	case 2:
		d = "Бумага."
	break;
}
switch (b) {
	case 0:
		b = "Камень."
	break;
	case 1:
		b = "Ножницы."
	break;
	case 2:
		b = "Бумага."
	break;
}
switch (c) {
	case 0:
		c = "Ничья."
	break;
	case 1:
		c = "Победа."
	break;
	case 2:
		c = "Проигрыш."
	break;
}
msg.channel.send(
		new RichEmbed()
			.setColor('RANDOM')
			.addField("Вы загадали...", d)
			.addField("Бот загадал...", b)
			.addField("Результат.", c)
			.setFooter(msg.author.tag, msg.author.avatarURL)
			.setTimestamp()
	);
};
module.exports.help = {
  name: 'ssp'
};