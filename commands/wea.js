module.exports.run = (data) => {
	const send = () => {
		data[1].channel.send(
			new data[2]()
				.setColor('RANDOM')
				.setAuthor('Произошла ошибка.')
		);
	};
	if(data[3].length != 0) {
		if(data[3][0] != '') {
			require('weather-js').find({
				search: data[3][0],
				degreeType: 'C',
				lang : 'ru-RU'
				}, (err, res) => {
					if(err == null) {
						if(res.length == 0) { send();
						} else {
							data[1].channel.send(
								new data[2]()
									.setColor('RANDOM')
									.setThumbnail(res[0].current.imageURL)
									.addField(res[0].location.name + '.', `Температура : ${res[0].current.temperature},\nОщущается : ${res[0].current.feelslike},\n${res[0].current.skytext},\n${res[0].current.winddisplay}.`)
									.setFooter(data[1].author.tag, data[1].author.avatarURL)
									.setTimestamp()
							);
						};
					} else { new (require('dream.log')).log(err).error(); send(); };
			});
		} else { send() };
	} else { send() };
};