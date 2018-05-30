const SlackBot = require('slackbots'); // Import slackbot library
const mongoose = require('mongoose');
const Badword = require('../models/Badword.js');

/* Instantiate SlackBots library with my Slack Bot token */
const bot = new SlackBot({
    token: 'BOT_API_KEY',
    name: 'SlackBot'
});

/* First run methods */
exports.run = () => {
    bot.on('start', onStart);
    bot.on('message', onMessage);
}

/* onStart to start the SlackBot on Slack Team */
const onStart = () => {
    console.log('Bot started');
}

/* Save and count bad words and send message back to Slack channel */
const saveWord = (channel, user, word) => {
    Badword.create({
        user_id: user.id,
        keyword: word
    }, 
    (err, post) => {
        if (err) {
            console.log(err);
            return;
        } else {
            countWord(channel, user);
        }
    });
}
const countWord = (channel, user) => {
    Badword.find({
        user_id: user.id
    })
    .exec((err, badwords) => {
        if (err) {
            console.log(err);
            return;
        } else {
            if(badwords.length > 5) {
                bot.postMessageToChannel(channel.name, 'It\'s enough '+user.name+', you will kicked from thhis channel!', {
                    as_user: true
                });
            } else {
                bot.postMessageToChannel(channel.name, 'Be careful '+user.name+', you have said '+badwords.length+' bad word(s).', {
                    as_user: true
                });
            }
        }
    });
}

/* onMessage is to retrieve messages from the Slack channel */
const onMessage = (message) => {
    users = [];
    channels = [];
    const botUsers = bot.getUsers();
    users = botChannels = bot.getChannels();
    channels = botChannels._value.channels;

    if(message.type === 'message' && Boolean(message.text)) {
        const channel = channels.find(channel => 
        user.id === message.user);
    }
    if(usr.name !== 'botbot') {
        if(message.text.toLowerCase().indexOf('shit') || message.text.toLowerCase().indexOf('fuck') || message.text.toLowerCase.indexOf('bitch')) {
            const keyword = '';
            if(message.text.toLowerCase().indexOf('shit')) {
                keyword = 'shit';
            }
            if(message.text.toLowerCase().indexOf('fuck')) {
                keyword = 'fuck';
            }
            if(message.text.toLowerCase().indexOf('bitch')) {
                keyword = 'bitch';
            }
            saveWord(channel, usr, keyword);
        }
    }
}