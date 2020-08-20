module.exports.run = (data) => {
	let upt = [0, 0, 0, 0, data[0].uptime];
	for(;(upt[4] - 1000) > 999;) {
		upt[4] = upt[4] - 1000;
		upt[3]++;
	};
	for(;(upt[3] - 60) > 59;) {
		upt[3] = upt[3] - 60;
		upt[2]++;
	};
	for(;(upt[2] - 60) > 59;) {
		upt[2] = upt[2] - 60;
		upt[1]++;
	};
	for(;(upt[1] - 24) > 23;) {
		upt[1] = upt[1] - 24;
		upt[0]++;
	};
	data[1].channel.send(
		new data[2]()
			.setColor('RANDOM')
			.addField('Количество команд.', require('cmdm').list.size)
			.addField('Пинг.', `${data[0].uptime} миллисекунд.`)
			.addField('Аптайм.', `Суток : ${upt[0]},\nЧасов : ${upt[1]},\nМинут : ${upt[2]},\nСекунд : ${upt[3]}.`)
			.addField('Разработчик.', 'HellKing#5627')
			.setFooter(data[1].author.tag, data[1].author.avatarURL)
			.setTimestamp()
	);
};