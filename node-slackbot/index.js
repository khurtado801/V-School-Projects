const slackbot = require('./helpers/bot'); // import slackbot library
const mongoose = require('mongoose'); // import mongoose library for accessing MongoDB

const http = require('http'); // var to handle HTTP req/res including server creation method
http.createServer((req, res) => {}).listen(1337, '127.0.0.1');

/* Create MongoDB Connection */
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/slackbot', {
    promiseLibrary: require('bluebird')
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

slackbot.run();