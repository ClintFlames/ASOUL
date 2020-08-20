const { Client, RichEmbed } = require('discord.js'),
	client = new Client(),
	{ log } = require('dream.log'),
	cmdm = require('./cmdm'),
	del = (id) => { cD.delete(id); };
global.config = require("./config.js");
global.pathFix = (path) => ((process.platform == "win32") ? path.replace(/\//g, "\\") : path);

let cD = new Map();
client.rld = 0;
cmdm.setPath(pathFix(__dirname + '/commands'));
cmdm.load('console', 'none', 'none');
['all', 'guild', 'dm'].forEach((type) => {
	['private', 'public'].forEach((access) => {
		require('./commands.json')[type][access].forEach((command) => {
			cmdm.load(command, access, type);
		});
	});
});
require('readline').createInterface({ input: process.stdin }).on('line', (input) => { if(input == 'exit') { /*try { */client.destroy(); /*} catch { */new log('Exit process').app(); process.exit(1); /*}; */} else { cmdm.run('console', [client, input]); }; });
client.on('ready', () => {
	if(client.rld == 0) {
		new log(`Load bot : ${client.user.username}`).app();
	} else {
		new log(`Reload bot : ${client.rld}`).warn();
	};
	client.user.setPresence({
		game : config.client.status
	});
	client.rld++;
});
client.on('message', (message) => {
	if(message.author.bot != true) {
		if(message.content.startsWith(config.client.prefix) == true) {
			const args = message.content.trim().split(/ +/g),
				req = args.shift().slice(config.client.prefix.length);
			if(cmdm.list.has(req) == true) {
				if(cD.has(message.author.id)) {
					const delM = (m) => { m.delete(); };
					message.channel.send(new RichEmbed().setColor('RANDOM').addField('Пожалуйста подождите чуть-чуть.', 'Длительность кулдауна 5 секунд.')).then((msg) => { setTimeout(delM, 2500, msg); });;
				} else {
					cD.set(message.author.id, setTimeout(del, config.client.command_cooldown, message.author.id));
					const cmd = cmdm.get(req),
						snd = () => { message.channel.send(new RichEmbed().setColor('RANDOM').setAuthor('Извините, команда недоступна.')); },
						run = () => { cmdm.run(req, [client, message, RichEmbed, args]); };
					if(cmd.type == 'all') {
						if(cmd.access == 'private') {
							switch(message.author.id) {
								case config.client.ownerID:
									run();
									break;
								default:
									snd();
									break;
							};
						} else { run(); };
					} else if(cmd.type == 'guild') {
						if(!message.channel.type == 'dm') {
							run();
						} else {
							snd();
						}
					} else {
						if(message.channel.type == 'dm') {
							if(cmd.access == 'private') {
									if(message.author.id == config.client.ownerID) {
									run();
								} else {
									snd();
								};
							} else {
								run();
							};
						} else {
							snd();
						};
					};
				};
			};
		};
	};
});
client.login(config.client.token);