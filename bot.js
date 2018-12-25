const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

    console.log('I am ready!');

});

bot.on('message', function (user, userID, channelID, message, evt) {

    switch(message) {

        case 'Шинку':
        case 'шинку':
            bot.sendMessage({
                to: channelID,
                message: 'Шинку пидор!'
            });
        break;
        case 'Ашот':
        case 'ашот':
            bot.sendMessage({
                to: channelID,
                message: 'Ашот пидор!'
            });
        break;
        case 'Ингнар':
        case 'ингнар':
            bot.sendMessage({
                to: channelID,
                message: 'Ингнар красавчик!'
            });
        break;
        case 'Рарити':
        case 'рарити':
            bot.sendMessage({
                to: channelID,
                message: 'Рарити красавчик!'
            });
        break;
        
     }
});
 
bot.login(process.env.BOT_TOKEN);
