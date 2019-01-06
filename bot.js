const Discord = require('discord.js');

const bot = new Discord.Client();

 

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
