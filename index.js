const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./index.json');
const prefix = (cfg.prefix);
const token = process.env.token;
bot.on('ready', function () (
    console.log("c'est parti !!!")
    bot.user.setActivity('Regardez moi !!!').catch(console.error)
});



bot login (token)
