module.exports.run = (data) => {
	let m = data[1].guild
	data[1].channel.send(
		new data[2]()
			.setColor("RANDOM")
			.setAuthor(`Сервер ${m.name}.`)
			.setThumbnail(data[1].guild.iconURL)
			.addField("Акроним.", m.nameAcronym)
			.addField("Идентификатор.", m.id)
			.addField("Дата создания.", m.createdAt)
			.addField("Владелец.", m.owner)
			.addField("Регион.", m.region)
			.addField("Уровень защиты.", m.verificationLevel)
			.setFooter(data[1].author.tag, data[1].author.avatarURL)
			.setTimestamp()
	);
};