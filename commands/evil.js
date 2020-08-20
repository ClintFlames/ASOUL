module.exports.run = (data) => {
	const client = data[0], message = data[1],
		RichEmbed = data[2],
		clean = text => {
		if(typeof(text) === 'string') {
			return text.replace(/`/g, "`" + String.fromCharCode(8302)).replace(/@/g, "@" + String.fromCharCode(8203));
		} else { return text; };
	};
	try {
		if(data[3].length != 0) {
			let input = data[3].join(' ');
			evalcode = eval(input);
			if(typeof evalcode !== 'string') {
				evalcode = require('util').inspect(evalcode);
				message.channel.send(
					new RichEmbed()
						.setColor('RANDOM')
						.addField('Получено.', `**${input}**`)
						.addField('Вывод.', `**${clean(evalcode)}**`)
						.addField('Тип.', `**${typeof evalcode}**`)
						.setFooter(message.author.tag, message.author.avatarURL)
						.setTimestamp()
				);
			};
		} else { message.channel.send(new RichEmbed().setColor('RANDOM').setAuthor('Пустой запрос.')); };
	} catch (e) {
		message.channel.send(
			new RichEmbed()
				.setColor('RANDOM')
				.addField('Ошибка.', `**${clean(e)}**`)
				.setFooter(message.author.tag, message.author.avatarURL)
				.setTimestamp()
		);
	};
};