const config = require('../config.json')

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`On-line com a conta ${config.client.id}!`)
        console.log(`ID do servidor: ${config.guild.id}.`)
        client.user.setActivity(config.activity.name, { type: config.activity.type })
        client.user.setStatus(config.activity.status)
    }  
}