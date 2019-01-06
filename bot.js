const Discord = require('discord.js');

const bot = new Discord.Client();

var net = require('net');

const bChannelID = '501417274016661504';

 

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', message => {

    if (message.content === '#server') {
        var client = new net.Socket();

        client.connect(6553, '178.63.11.244', function() {
            console.log('Connected');
        });

        client.on('data', function(data) {
            var numberOfPlayers = parseInt(data.toString().split('<NumberOfActivePlayers>').pop().split('</NumberOfActivePlayers>')[0]);
            if(numberOfPlayers > 1){
                message.reply('На сервере ' + numberOfPlayers + " игроков! Заходите играть!");
            }
            if(numberOfPlayers == 0){
                message.reply('На сервере никого нет! Может пора начать?');
            }
            if(numberOfPlayers == 1){
                message.reply('На сервере всего один игрок! Ему наверняка одиноко, заходи и поиграй с ним!');
            } 
            client.destroy(); // kill client after server's response
        });
    }

});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
