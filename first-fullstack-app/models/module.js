const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regexSearch = require('mongoose-regex');
searchPlugin = require('mongoose-search-plugin')



// Define schema
const moduleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    operation: {
        type: String
    },
    manufacturer: {
        type: String
    },
    size: {
        type: String
    },
    imgUrl: {
        type: String
    },
    caption: {
        type: String
    }
});

moduleSchema.plugin(searchPlugin, {
    fields: ['title', 'operation', 'manufacturer' ]
});

module.exports = mongoose.model('Module', moduleSchema);