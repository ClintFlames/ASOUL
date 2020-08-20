module.exports.run = (data) => {
	client = data[0];
	input = data[1];
	const clean = (text) => { if(typeof(text) === 'string') { return text.replace(/`/g, "`" + String.fromCharCode(8302)).replace(/@/g, "@" + String.fromCharCode(8203)); } else { return text; }; },
		{ log } = require('dream.log');
	try {
		let evalcode = eval(input);
		if(typeof evalcode !== 'string') {
			evalcode = require('util').inspect(evalcode);
			new log(clean(evalcode)).progress();
		};
	} catch (e) { new log(e.message).error(); };
};