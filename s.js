const { RichEmbed } = require('discord.js');
module.exports.run = (client, msg, args) => {
if(msg.author.id !== "483649025799880704") return
var a = args.join(" ")
msg.delete()
msg.channel.send(a)
};
module.exports.help = {
  name: 's'
};