module.exports.run = (data) => {
	data[1].delete();
	data[1].channel.send(data[3].join(' '));
};