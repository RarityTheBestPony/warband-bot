const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', function (user, userID, channelID, message, evt) {

    case '#server':
        case 'есть кто на сервере?':
        case 'Есть кто на сервере?':
        case 'играете?':
        case 'Играете?':
        case 'есть кто?':
        case 'Есть кто?':
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

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTI3MDUxOTQ1OTI4NTU2NTU0.DwOHSA.HQZromI6nfUwT7ljjTN20fxY7l8);
