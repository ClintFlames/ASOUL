module.exports.run = (data) => {
	const random = () => {
		data[1].channel.send(
			new data[2]()
				.setColor("RANDOM")
				.setAuthor(`Бот выбрал : ${res(IntR)}.`)
				.setFooter(data[1].author.tag, data[1].author.avatarURL)
				.setTimestamp()
		);
	},
	send = cause => {
		switch(cause) {
			case 1:
				OutPut = 'победа.';
				break;
			case 0:
				OutPut = 'ничья.';
				break;
			case -1:
				OutPut = 'проигрыш.';
				break;
		};
	data[1].channel.send(
		new data[2]()
			.setColor("RANDOM")
			.addField(`Вы выбрали : ${res(data[3][0])}.\nБот выбрал : ${res(IntR)}.`, 'Результат : ' + OutPut)
			.setFooter(data[1].author.tag, data[1].author.avatarURL)
			.setTimestamp()
		);
	};
	res = argument => {
		switch(argument) {
			case 0:
				return 'камень';
				break;
			case 1:
				return 'ножницы';
				break;
			case 2:
				return 'бумага';
				break;
			case 'stone':
				return 'камень';
				break;
			case 'scissors':
				return 'ножницы';
				break;
			case 'paper':
				return 'бумага';
				break;
		};
	},
	IntR = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
	let IntC = 0,
		OutPut = 0;
	if(data[3].length != 0) {
		switch(data[3][0]) {
			case 'stone':
				if(IntR == 0) {
					send(0);
				} else if(IntR == 1) {
					send(1);
				} else {
					send(-1);
				};
				break;
			case 'scissors':
				if(IntR == 0) {
					send(-1);
				} else if(IntR == 1) {
					send(0);
				} else {
					send(1);
				};
				break;
			case 'paper':
				if(IntR == 0) {
				send(1);
				} else if(IntR == 1) {
				send(-1);
				} else {
				send(0);
				};
				break;
			default:
				random();
				break;
		};
		switch(IntC) {
			case 0:
				OutPut = 'ничья.';
				break;
			case 1:
				OutPut = 'победа.';
				break;
			case -1:
				OutPut = 'проигрыш.';
				break;
			};
	} else { random(); };
};