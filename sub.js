const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
const a = args.join(" ");
if (msg.guild.id != '579204352544210954') {
	msg.channel.send(
		new RichEmbed()
		.setColor("RANDOM")
		.addField("Ошибка.", "Эта команда доступна только на официальном сервере.")
		.setFooter(msg.author.tag, msg.author.avatarURL)
		.setTimestamp()
	);
	return;
};
	switch (a) {
		case "genesu":
			let Duck0 = msg.guild.roles.find(r => r.name === 'genesu-news');
			if(msg.member.roles.has(Duck0.id)) {
				msg.member.removeRole(Duck0);
				msg.channel.send(
					new RichEmbed()
						.setColor("RANDOM")
						.setAuthor("Вы отписались.")
						.setFooter(msg.author.tag, msg.author.avatarURL)
						.setTimestamp()
				);
				return;
			}
			msg.guild.member(msg.author).addRole(Duck0);
			msg.channel.send(
				new RichEmbed()
					.setColor("RANDOM")
					.setAuthor("Подписка оформлена.")
					.setFooter(msg.author.tag, msg.author.avatarURL)
					.setTimestamp()
			);
		break;
		case "code":
			let Duck1 = msg.guild.roles.find(r => r.name === 'кодер');
			if(msg.member.roles.has(Duck1.id)) {
				msg.member.removeRole(Duck1);
				msg.channel.send(
					new RichEmbed()
						.setColor("RANDOM")
						.setAuthor("Вы отписались.")
						.setFooter(msg.author.tag, msg.author.avatarURL)
						.setTimestamp()
				);
			return;
		}
		msg.guild.member(msg.author).addRole(Duck1);
		msg.channel.send(
			new RichEmbed()
				.setColor("RANDOM")
				.setAuthor("Подписка оформлена.")
				.setFooter(msg.author.tag, msg.author.avatarURL)
				.setTimestamp()
		);
		break;
		case "srn":
			let Duck2 = msg.guild.roles.find(r => r.name === 'SRN-участник');
			let Duck3 = msg.guild.roles.find(r => r.name === 'SRN-учёный');
			if(msg.member.roles.has(Duck2.id && Duck3.id)) {
				msg.member.removeRole(Duck2);
				msg.member.removeRole(Duck3);
				msg.channel.send(
					new RichEmbed()
						.setColor("RANDOM")
						.setAuthor("Вы отписались.")
						.setFooter(msg.author.tag, msg.author.avatarURL)
						.setTimestamp()
				);
			return;
			} else if(msg.member.roles.has(Duck2.id)) {
				msg.member.removeRole(Duck2);
				msg.channel.send(
					new RichEmbed()
						.setColor("RANDOM")
						.setAuthor("Вы отписались.")
						.setFooter(msg.author.tag, msg.author.avatarURL)
						.setTimestamp()
				);
			return;
			} else if(msg.member.roles.has(Duck3.id)) {
				msg.member.removeRole(Duck3);
				msg.channel.send(
					new RichEmbed()
						.setColor("RANDOM")
						.setAuthor("Вы отписались.")
						.setFooter(msg.author.tag, msg.author.avatarURL)
						.setTimestamp()
				);
			return;
			}
			msg.guild.member(msg.author).addRole(Duck2);
			msg.channel.send(
				new RichEmbed()
					.setColor("RANDOM")
					.setAuthor("Подписка оформлена.")
					.setFooter(msg.author.tag, msg.author.avatarURL)
					.setTimestamp()
			);
		break;
		default:
		msg.channel.send(
			new RichEmbed()
				.setColor("RANDOM")
				.addField("Список новостей.", "genesu - подписка на новости игры Genesu.\ncode - вступление в кодеры.\nsrn - доступ к библиотеке SRN.")
				.setFooter(msg.author.tag, msg.author.avatarURL)
				.setTimestamp()
		);
	}
};
module.exports.help = {
  name: 'sub'
};