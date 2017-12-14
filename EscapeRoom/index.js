const rs = require("readline-sync");

console.log("You are in a locked room.\nThere is a door, a hidden key and a hole in the wall.");

let inv = [];
let isAlive = true;

while(isAlive) {
    let userinput = rs.question("What would you like to do? ");
    userinput = userinput.toLowerCase();

    if(userinput.includes("hole") && userinput.includes("put")) {
        console.log("Sorry... um ... you died");
        isAlive = false;
        console.log("THE CAKE IS A LIE");
    } else if(userinput.includes("open") && userinput.includes("door")) {
        if(inv.includes("key")) {
            console.log("Congrats you WIN the game!! Yo'ur going to Disneyland!!");
            break;
        } else {
            console.log("Sorry you dont have the key you idiot.");
        }
    } else if(userinput.includes("take") && userinput.includes("key")) {
        console.log("You found the key but is it the key?");
        inv.push("key");
    } else if(userinput.includes("look")) {
        console.log("You are in a locked room.\nThere is a door, a hidden key and a hole in the wall.");        
    } else {
        console.log("Yo'ur idiot? What are you new? That isnt one of the commands");
    }
}
