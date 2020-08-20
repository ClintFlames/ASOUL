module.exports.run = (data) => {
	const cmds = {
		fun : [
			'Развлекательные.',
			'flip [up или down] - орёл или решка.',
			'ssp [stone или scissors или paper] - камень, ножницы, бумага.',
			'hug [пользователь(и) или/и слова] - обнимашки.'
		],
		info : [
			'Информационные.',
			'help [команда] - получить помощь.',
			'bi - информация о боте.',
			'si - информация о сервере.',
			'ui [@пользователь#0000] - информация о пользователе.',
			'inv [bot или srv] - получить приглашение.',
			'wea (город) - получить погоду.'
		],
		off : [
			'Оффициальные.',
			'sub (название новостей) - подписка/отписка на новости.'
		],
		pri : [
			'Приватные.',
			's (сообщение) - говорить от лица бота.',
			'evil (код) - запустить код.'
		],
	/*	uni : [
			'Для союзников.',
			'col - получить цвет для ника.'
		]*/
	},
	all = cmd => {
		
	};
data[1].channel.send(
new data[2]()
.setColor('RANDOM')
.addField('Синтаксис.', '[ ] - необязательный аргумент.\n( ) - обязательный аргумент.\nПеред каждой командой вводите префикс ##.')
.addField(cmds.fun[0], `${cmds.fun[1]}\n${cmds.fun[2]}\n${cmds.fun[3]}`)
.addField(cmds.info[0], `${cmds.info[1]}\n${cmds.info[2]}\n${cmds.info[3]}\n${cmds.info[4]}\n${cmds.info[5]}\n${cmds.info[6]}`)
.addField(cmds.off[0], `${cmds.off[1]}\n${cmds.off[2]}`)
.addField(cmds.pri[0], `${cmds.pri[1]}\n${cmds.pri[2]}`)
//.addField(cmda.uni[0], `${cmds.uni[1]}`)
.setFooter(data[1].author.tag, data[1].author.avatarURL)
.setTimestamp()
);
};