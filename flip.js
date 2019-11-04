const {
    RichEmbed
} = require('discord.js')
exports.run = (client, msg, args) => {
    var min = 0;
    var max = 1;
    var m0 = false;
    var m1 = false;
    var random = Math.floor(Math.random() * (max - min + 1)) + min
    switch (random) {
        case 0:
            m0 = true;
            break;
        case 1:
            m1 = true;
            break;
    }
    var result = "Выпадает ";
    if (m0 == true) {
        result = result + "орёл.";
    } else if (m1 == true) {
        result = result + "решка.";
    }
    msg.channel.send(
        new RichEmbed()
        .setColor("RANDOM")
        .setAuthor(result)
        .setFooter(msg.author.tag, msg.author.avatarURL)
        .setTimestamp()
    )
};
exports.help = {
    name: 'flip'
}
