const config = require("../config.json");

module.exports = (msg) =>{
    var message = msg.content.split(" ");
    message = message[0];

    msg.reply(`comando '${message}' não existe. Digite ${config.prefix}help para obter a lista de comandos`)
}