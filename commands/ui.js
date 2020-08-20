module.exports.run = (data) => {
let user = data[1].mentions.users.first() || data[1].author,
	member = data[1].guild.member(data[1].mentions.users.first() || data[1].guild.members.get(data[3][1])),
	a = 'Пользователь'
if(user.bot==true){
a = 'Бот'
}
var b = user.id
	data[1].channel.send(
		new data[2]()
			.setColor('RANDOM')
			.setAuthor(a + ' ' + user.username + '.')
			.setThumbnail(user.avatarURL)
			.addField('Дискриминатор.', user.discriminator)
			.addField('Тег.', user.tag)
			.addField('Идентификатор.', b)
			.addField('Дата создания.', user.createdAt)
			.setFooter(data[1].author.tag, data[1].author.avatarURL)
			.setTimestamp()
	);
};