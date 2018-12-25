var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
/*logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';*/
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
/*bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});*/
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
        case 'Ашот':
        case 'ашот':
            bot.sendMessage({
                to: channelID,
                message: 'Ашот пидор!'
            });
            break;
        case 'Рарити':
        case 'рарити':
            bot.sendMessage({
                to: channelID,
                message: 'Рарити молодец!'
            });
            break;
     }
});