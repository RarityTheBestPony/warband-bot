const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', function (user, userID, channelID, message, evt) {

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

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTI3MDUxOTQ1OTI4NTU2NTU0.DwOHSA.HQZromI6nfUwT7ljjTN20fxY7l8);
