const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");

const moduleRoute = require("./routes/module.js");
const config = require ("./config.js");


const app = express();

//middleware
app.use(bodyParser.json());

//routes
app.use("/module", moduleRoute);

// Used to connect to mongoose
mongoose.connect("mongodb://localhost:27017/votes", () => {
    console.log('Connected to MongoDB')
})

app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});