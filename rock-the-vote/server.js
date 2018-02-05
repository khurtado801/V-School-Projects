const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");

const voteRoute = require("./routes/vote.js");
const config = require ("./config.js");


const app = express();

//middleware
app.use(bodyParser.json());
// app.use(cors()); 

// app.use(logErrors)
// app.use(clientErrorHandler)
// app.use(errorHandler)

//routes
app.use("/vote", voteRoute);

// Used to connect to mongoose
mongoose.connect("mongodb://localhost:27017/votes", () => {
    console.log('Connected to MongoDB')
})


app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});