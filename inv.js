const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
const a = args.join(" ");
switch (a) {
	case "bot":
		msg.channel.send(
			new RichEmbed()
			.setColor('RANDOM')
			.addField('Ссылка на приглашение бота.', 'https://discordapp.com/oauth2/authorize?client_id=582995690158817301&scope=bot&permissions=2146958847')
			.setFooter(msg.author.tag, msg.author.avatarURL)
			.setTimestamp()
		);
	break;
	case "srv":
		msg.channel.send(
			new RichEmbed()
				.setColor('RANDOM')
				.addField('Ссылка на официальный сервер.', 'Ссылка в данный момент недоступна.')
				.setFooter(msg.author.tag, msg.author.avatarURL)
				.setTimestamp()
		);
	break;
	default:
		msg.channel.send(
			new RichEmbed()
				.setColor('RANDOM')
				.setAuthor('Укажите bot или srv.')
				.setFooter(msg.author.tag, msg.author.avatarURL)
				.setTimestamp()
		);
}
};
module.exports.help = {
  name: 'inv'
};