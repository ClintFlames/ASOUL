const { RichEmbed } = require('discord.js'),
    colors = ['coniferous', 'light-green'];
var Duck = false;
module.exports.run = (client, msg, args) => {
    switch (msg.guild.id) {
        case '579204352544210954':
            break;
        case '623823748080074754':
            break;
        default:
            Duck = true;
    }
    if (Duck == true) {
        msg.channel.send(
            new RichEmbed()
            .setColor("RANDOM")
            .addField("Ошибка.", "Эта команда доступна только на официальном сервере.")
            .setFooter(msg.author.tag, msg.author.avatarURL)
            .setTimestamp()
        );
        return;
    };
    /*colors.forEach((n, i) => {
    	Duck[i] = msg.guild.roles.find(r => r.name === n);
    	console.log(Duck[i]);
    });*/
    const Duck0 = msg.guild.roles.find(r => r.name === 'coniferous'),
        Duck1 = msg.guild.roles.find(r => r.name === 'light-green');
    const Duck2 = msg.guild.roles.find(r => r.name === 'light-blue');
    const Duck3 = msg.guild.roles.find(r => r.name === 'lilac');
    const Duck4 = msg.guild.roles.find(r => r.name === 'scarlet');
    const Duck5 = msg.guild.roles.find(r => r.name === 'yellow');
    const Duck6 = msg.guild.roles.find(r => r.name === 'orange');
    const Duck7 = msg.guild.roles.find(r => r.name === 'red');
    const Duck8 = msg.guild.roles.find(r => r.name === 'gray');
    const Duck9 = msg.guild.roles.find(r => r.name === 'graphite');
    const Duck10 = msg.guild.roles.find(r => r.name === 'dark-green');
    const Duck11 = msg.guild.roles.find(r => r.name === 'green');
    const Duck12 = msg.guild.roles.find(r => r.name === 'blue');
    const Duck13 = msg.guild.roles.find(r => r.name === 'purple');
    const Duck14 = msg.guild.roles.find(r => r.name === 'dark-crimson');
    const Duck15 = msg.guild.roles.find(r => r.name === 'light-brown');
    const Duck16 = msg.guild.roles.find(r => r.name === 'brown');
    const Duck17 = msg.guild.roles.find(r => r.name === 'dark-brown');
    const Duck18 = msg.guild.roles.find(r => r.name === 'dark-gray');
    /*Duck.forEach((n, i) => {
    if(msg.member.roles.has(Duck[i].id)) {
    	msg.member.removeRole(Duck[i]);
    }
    });*/
    if (msg.member.roles.has(Duck1.id)) {
        msg.member.removeRole(Duck1);
    }
    if (msg.member.roles.has(Duck1.id)) {
        msg.member.removeRole(Duck1);
    }
    if (msg.member.roles.has(Duck2.id)) {
        msg.member.removeRole(Duck2);
    }
    if (msg.member.roles.has(Duck3.id)) {
        msg.member.removeRole(Duck3);
    }
    if (msg.member.roles.has(Duck4.id)) {
        msg.member.removeRole(Duck4);
    }
    if (msg.member.roles.has(Duck5.id)) {
        msg.member.removeRole(Duck5);
    }
    if (msg.member.roles.has(Duck6.id)) {
        msg.member.removeRole(Duck6);
    }
    if (msg.member.roles.has(Duck7.id)) {
        msg.member.removeRole(Duck7);
    }
    if (msg.member.roles.has(Duck8.id)) {
        msg.member.removeRole(Duck8);
    }
    if (msg.member.roles.has(Duck9.id)) {
        msg.member.removeRole(Duck9);
    }
    if (msg.member.roles.has(Duck10.id)) {
        msg.member.removeRole(Duck10);
    }
    if (msg.member.roles.has(Duck11.id)) {
        msg.member.removeRole(Duck11);
    }
    if (msg.member.roles.has(Duck12.id)) {
        msg.member.removeRole(Duck12);
    }
    if (msg.member.roles.has(Duck13.id)) {
        msg.member.removeRole(Duck13);
    }
    if (msg.member.roles.has(Duck14.id)) {
        msg.member.removeRole(Duck14);
    }
    if (msg.member.roles.has(Duck15.id)) {
        msg.member.removeRole(Duck15);
    }
    if (msg.member.roles.has(Duck16.id)) {
        msg.member.removeRole(Duck16);
    }
    if (msg.member.roles.has(Duck17.id)) {
        msg.member.removeRole(Duck17);
    }
    if (msg.member.roles.has(Duck18.id)) {
        msg.member.removeRole(Duck18);
    }
    const a = args.join(" ")
    switch (a) {
        case "coniferous":
            msg.guild.member(msg.author).addRole(Duck0);
            break;
        case "lgreen":
            msg.guild.member(msg.author).addRole(Duck1);
            break;
        case "lblue":
            msg.guild.member(msg.author).addRole(Duck2);
            break;
        case "lilac":
            msg.guild.member(msg.author).addRole(Duck3);
            break;
        case "scarlet":
            msg.guild.member(msg.author).addRole(Duck4);
            break;
        case "yellow":
            msg.guild.member(msg.author).addRole(Duck5);
            break;
        case "orange":
            msg.guild.member(msg.author).addRole(Duck6);
            break;
        case "red":
            msg.guild.member(msg.author).addRole(Duck7);
            break;
        case "grey":
            msg.guild.member(msg.author).addRole(Duck8);
            break;
        case "graphite":
            msg.guild.member(msg.author).addRole(Duck9);
            break;
        case "dgreen":
            msg.guild.member(msg.author).addRole(Duck10);
            break;
        case "green":
            msg.guild.member(msg.author).addRole(Duck11);
            break;
        case "blue":
            msg.guild.member(msg.author).addRole(Duck12);
            break;
        case "purple":
            msg.guild.member(msg.author).addRole(Duck13);
            break;
        case "dcrimson":
            msg.guild.member(msg.author).addRole(Duck14);
            break;
        case "lbrown":
            msg.guild.member(msg.author).addRole(Duck15);
            break;
        case "brown":
            msg.guild.member(msg.author).addRole(Duck16);
            break;
        case "dbrown":
            msg.guild.member(msg.author).addRole(Duck17);
            break;
        case "dgray":
            msg.guild.member(msg.author).addRole(Duck18);
            break;
        default:
            msg.channel.send(
                new RichEmbed()
                .setColor("RANDOM")
                .addField('Список цветов.', 'coniferous - хвойный.\nlgreen - светло-зелёный.\nlblue - голубой.\nlilac - сиреневый.\nscarlet - алый.\nyellow - жёлтый.\norange - оранжевый.\nred - красный.\ngray - серый.\ngraphite - графитный.\ndgreen - тёмно-зелёный.\ngreen - зелёный.\nblue - синий.\npurple - фиолетовый.\ndcrimson - тёмно-малиновый.\nlbrown - светло-коричневый.\nbrown - коричневый.\ndbrown - тёмно-коричневый.\ndgray - тёмно-серый.')
                .setFooter(msg.author.tag, msg.author.avatarURL)
                .setTimestamp()
            );
            return;
    }
    msg.channel.send(
        new RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Цвет получен.")
        .setFooter(msg.author.tag, msg.author.avatarURL)
        .setTimestamp()
    );
};
module.exports.help = {
    name: 'col'
};
