module.exports.run = (data) => (data[1].channel.send("https://discordapp.com/oauth2/authorize?client_id=" + data[0].user.id + "&scope=bot&permissions=2146958847"));