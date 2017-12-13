const rs = require("readline-sync");

console.log("Youa are in a locked room. \nThere is a door, a hidden key, and a hole in the wall.");

let userInput = rs.question("What would you like to do?");



//possible things do to in room
//look -> will print a description of the room
//open door -> try to open door (if you have key go out if not you FAIL!)
//put hand in the hole wall -> they die (GAME OVER)
//take key -> put key in inventory