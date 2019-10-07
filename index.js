const { Client, RichEmbed } = require('discord.js'),
	config  = require('./botconfig.json'),
	prefix  = config.prefix,
	bot = new Client(),
	fs = require('fs');
bot.commands    = new Map();
fs.readdir('./cmds', (err, files) => {
    if(err) console.log(err)
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('##NO COMMANDS FOR LOAD')
        return
    }
    console.log(`##COMMANDS LOAD:${files.length}`)
    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        bot.commands.set(props.help.name, props);
    })
})
bot.on('ready', () => {
  console.log(`##LOAD BOT:${bot.user.username}`);
  bot.user.setPresence({ game: { type: 0, name: "глобальное обновление скоро | ##help" } });
});
bot.on('message', msg => {
	if(msg.channel.type =='dm') return;
	if(msg.channel.id == '579211229667655701') return;
	if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix)) return;
	msg.content = msg.content.trim();
	const args  = msg.content.split(/ +/g),
		cmd   = args.shift().slice(prefix.length).toLowerCase();
	let commandFile = bot.commands.get(cmd);
	if (commandFile) commandFile.run(bot, msg, args);
});
//логгер
bot.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.channel.type == 'dm') {
        bot.channels.get('622322956588154890').send(
            new RichEmbed()
                .setColor('#00FF00')
                .setThumbnail(msg.author.avatarURL)
                .setDescription('<:dmget:610852364471107614> получено.')
                .addField(`${msg.author.tag} | ${msg.author.id}`, msg.content)
                .setTimestamp()
        );
    };
});
bot.on('messageUpdate', (msg0, msg1) => {
    if (msg0.author.bot) return;
    if (msg0.channel.type == 'dm') {
        bot.channels.get('622322956588154890').send(
            new RichEmbed()
                .setColor('#FFFF00')
                .setThumbnail(msg0.author.avatarURL)
                .setDescription('<:dmupd:610852401229987850> изменено.')
                .setAuthor(`${msg0.author.tag} | ${msg0.author.id}`)
                .addField(`Раньше:`, msg0.content)
                .addField(`Теперь:`, msg1.content)
                .setTimestamp()
        );
    } else {
        bot.channels.get('597715336543862786').send(
            new RichEmbed()
                .setColor('#FFFF00')
                .setThumbnail(msg0.author.avatarURL)
                .setDescription('<:dmupd:610852401229987850> изменено.')
                .setAuthor(`${msg0.guild.name} | ${msg0.channel.name}${msg0.author.tag} | ${msg0.author.id}`)
                .addField(`Раньше:`, msg0.content)
                .addField(`Теперь:`, msg1.content)
                .setTimestamp()
        );
    };
});
bot.on('messageDelete', msg => {
    if (msg.author.bot) return;
    if (msg.channel.type == 'dm') {
        bot.channels.get('622322956588154890').send(
            new RichEmbed()
                .setColor('#FF0000')
                .setThumbnail(msg.author.avatarURL)
                .setDescription('<:dmdel:610852426840277021> удалено.')
                .addField(`${msg.author.tag} | ${msg.author.id}`, msg.content)
                .setTimestamp()
        );
    } else {
        bot.channels.get('597715336543862786').send(
            new RichEmbed()
                .setColor('#FF0000')
                .setThumbnail(msg.author.avatarURL)
                .setDescription('<:del:610852314307362846> удалено.')
                .addField(`${msg.guild.name} | ${msg.channel.name} | ${msg.author.tag} | ${msg.author.id}`, msg.content)
                .setTimestamp()
        );
    };
});
bot.login(config.token);