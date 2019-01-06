const Discord = require('discord.js');
const net = require('net');
const bChannelID = '501417274016661504';

 
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});

 

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    switch(true) {
        case (message == '#server'):
            var client = new net.Socket();

            client.connect(6553, '178.63.11.244', function() {
                console.log('Connected');
            });
            client.on('data', function(data) {
                var numberOfPlayers = parseInt(data.toString().split('<NumberOfActivePlayers>').pop().split('</NumberOfActivePlayers>')[0]);
                if(numberOfPlayers > 0){
                    bot.sendMessage({
                        to: bChannelID,
                        message: 'На сервере ' + numberOfPlayers + " игроков! Заходите играть!"
                    });
                } else{
                    bot.sendMessage({
                        to: bChannelID,
                        message: 'На сервере никого нет! Может пора начать?'
                    });
                }
                
                client.destroy(); // kill client after server's response
            });
            break;
        case (message.toLowerCase().indexOf("шинку") == -1):
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
                message: 'Сырный пидор!'
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
