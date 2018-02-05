const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema
const voteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    comment: {
        type: Array,
    }
});

module.exports = mongoose.model("Vote", voteSchema);