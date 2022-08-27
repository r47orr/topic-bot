const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId } = require('./config.json');
const fs = require('node:fs');
require('dotenv').config()

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Comandos (/) do bot estão sendo registrados.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Comandos (/) do bot atualizados com sucesso.');
	} catch (error) {
		console.error(error);
	}
})();
