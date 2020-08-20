module.exports.run = (data) => {
	let OutPut = 0;
	const IntR = Math.floor(Math.random() * (1 - 0 + 1)) + 0,
	random = () => {
			if(IntR == 0) {
				OutPut = OutPut + '.';
			} else {
				OutPut = OutPut + '.';
			};
		},
		type = [', вы победили.', ', вы проиграли.'];
	if(IntR == 0) {
		OutPut = 'Выпал орёл';
	} else {
		OutPut = 'Выпала решка';
	};
	if(data[3].length != 0) {
		switch(data[3][0]) {
			case 'up':
				if(IntR == 0) {
					OutPut = OutPut + type[0];
				} else {
					OutPut = OutPut + type[1];
				};
				break;
			case 'down':
				if(IntR == 0) {
					OutPut = OutPut + type[1];
				} else {
					OutPut = OutPut + type[0];
				};
				break;
			default:
				random();
				break;
		};
	} else { random(); };
	data[1].channel.send(
		new data[2]()
			.setColor("RANDOM")
			.setAuthor(OutPut)
			.setFooter(data[1].author.tag, data[1].author.avatarURL)
			.setTimestamp()
	);
};