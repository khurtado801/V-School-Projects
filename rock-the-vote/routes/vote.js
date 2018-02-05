const express = require("express");
const voteRoute = express.Router();
const voteModel = require('../models/vote.js');

// const database = require('../database.js');

// Define route
voteRoute.route("/")
    //handle all requests to /vote here
    //if its a GET
    .get((req, res) => {
        // After 'find', we can tell it what object to look for
        // Req.query allows to use to specify a query at GET
        voteModel.find(req.query, (err, foundVote) => {
            if(err){
                console.error(err);
            } else {
                res.send(foundVote)
            }
        });
    })
    
    // If its a POST
    .post((req, res) => {
        // Take body of request and turn it into a ismModel instance and save to database
        // Create a new resource from our blueprint
        let newVote = new voteModel(req.body);
        // Callback function to display err or saved resource to databasse
        newVote.save((err, savedVote) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: "Data added successfully",
                    data: newVote
                });
            } 
        });
    });

voteRoute.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        // let found = false;
        // let foundvote;
        // Tells mongoose what to find and where to find it
        voteModel.findById(id, (err, foundVote) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was found!`,
                    data: foundVote
                })
            }
        });
    })
    .delete((req, res) => {
        let { id } = req.params;
        // let found = false;
        voteModel.findByIdAndRemove(id, (err, removedVote) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was successfully removed!`
                });
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params;
        // ID is the collection query and {new: true} is the configuration setting
        voteModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedVote) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was updated!`,
                    data: updatedVote                    
                })
            }
        })
    })

module.exports = voteRoute;