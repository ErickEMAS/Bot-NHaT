const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const commands = require("./scripts/commandsReader")(config.prefix);
const unknowCommand = require("./scripts/unknowcommand");
const { default: Axios } = require("axios");

client.on("ready", ()=>{
    console.log(`O bot ${client.user.tag} foi logado.`);
    client.user.setActivity("Verdades na sua cara");

    
});

client.on("message", async (msg) =>{
    if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);
    if(!msg.author.bot && msg.guild){
        var args = msg.content.toLowerCase().split(" ");
        const arg0 = args[0];
        args.splice(0,1);
        if(commands[arg0]) commands[arg0](client,msg,args);
        else if(arg0.split("")[0] == (config.prefix)) unknowCommand(msg);
    }
});

client.login(config.token);