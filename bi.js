module.exports.run = (bot, msg, args, info) => {
	msg.channel.send(
		new RichEmbed()
			.setColor("RANDOM")
			.addField("Количество команд.", 10)
			.addField("Разработчик.", "ClintFlames?HELLo!#6675")
			.addField("Специальное спасибо.", "DarkVessel ★NBF★#6145")
			.setFooter(msg.author.tag, msg.author.avatarURL)
			.setTimestamp()
	);
};
module.exports.help = {
  name: 'bi'
};