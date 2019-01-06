const Discord = require('discord.js');

const bot = new Discord.Client();

var net = require('net');

const bChannelID = '501417274016661504';

 

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    switch(message) {
        case 'Шинку':
        case 'шинку':
            bot.sendMessage({
                to: channelID,
                message: 'Шинку пидор!'
            });
            break;
        case 'Сырный':
        case 'сырный':
        case 'Сырно':
        case 'сырно':
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
                message: 'Ингнар молодец!'
            });
            break;
        case 'Рарити':
        case 'рарити':
            bot.sendMessage({
                to: channelID,
                message: 'Рарити молодец!'
            });
            break;
        case 'Мариса':
        case 'мариса':
            bot.sendMessage({
                to: channelID,
                message: 'Мариса трап!'
            });
            break;
        case 'Данила':
        case 'данила':
        case 'дани':
            bot.sendMessage({
                to: channelID,
                message: 'Данила любит Рикардо!'
            });
            break;
        case 'Хельвете':
        case 'хельвете':
            bot.sendMessage({
                to: channelID,
                message: 'Хельвете даун!'
            });
            break;
        case 'Кулсон':
        case 'кулсон':
            bot.sendMessage({
                to: channelID,
                message: 'Кулсон поставь сервак!'
            });
            break;
        case 'Фенрир':
        case 'фенрир':
            bot.sendMessage({
                to: channelID,
                message: 'Фенрир, че делал на выходных?'
            });
            break;
     }
});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
