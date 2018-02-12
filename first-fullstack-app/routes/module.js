const express = require("express");
const moduleRoute = express.Router();
const moduleModel = require('../models/module.js');

// const database = require('../database.js');

// Define route
moduleRoute.route("/")
    //handle all requests to /module here
    //if its a GET
    .get((req, res) => {
        // After 'find', we can tell it what object to look for
        // Req.query allows to use to specify a query at GET
        moduleModel.find(req.query, (err, foundModule) => {
            console.log("get");
            if(err){
                console.error(err);
            } else {
                res.send(foundModule)
            }
        });
    })
    
    // If its a POST
    .post((req, res) => {
        // Take body of request and turn it into a modelModel instance and save to database
        // Create a new resource from our blueprint
        let newModule = new moduleModel(req.body);
        // Callback function to display err or saved resource to databasse
        newModule.save((err, savedModule) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: "Data added successfully",
                    data: newModule
                });
            } 
        });
    });

moduleRoute.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        // Tells mongoose what to find and where to find it
        moduleModel.findById(id, (err, foundModule) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was found!`,
                    data: foundModule
                })
            }
        });
    })

// moduleRoute.route("/:title")  
//     .get((req, res) => {
//         let {id} = req.params;
//         moduleModel.find(title, (err, foundModule) => {
//             if(err) {
//                 console.error(err);
//             } else {
//                 res.send({
//                     msg: `Item ${id} was found`,
//                     data: foundModule
//                 })
//             }
//         });
//     })
    .delete((req, res) => {
        let { id } = req.params;
        // let found = false;
        moduleModel.findByIdAndRemove(id, (err, removedModule) => {
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
        moduleModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedModule) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was updated!`,
                    data: updatedModule                   
                })
            }
        })
    })



module.exports = moduleRoute;