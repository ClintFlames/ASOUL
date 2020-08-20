module.exports = {
	client: {
		// Your bot token.
		token: "",
		/* Prefix for your bot.
			You need send prefix with command.
			Example: ##help
		*/
		prefix: "##",
		// Your ID, you can use private commands(typed all).
		ownerID: "676128096927350805",
		/* Cooldown for commands.
			1 for turn off.
			Example: 5000 is 5 seconds.
		*/
		command_cooldown: 5000,
		status: {
			// Nane of status
			name: "Minecraft | ##help",
			/*
				Type of status.
					PLAYING
					STREAMING
					LISTENING
					WATCHING
			*/
			type: "PLAYING"
		}
	}
}