iconst rs = require("readline-sync");

console.log("Welcome to Election Death Match 2020. This is a cage match election year. You are in a locked cage with a toupee wearing Cheetoo, with its arm extended out, that wants to be your 'friend for life'. \nThere is a door, a bottle of beer, a hidden key, a window, and a hole in the wall. Don't just stand there, get the hell out before Donald Trump \ntries to shake your hand or defeats you in this years Election Death Match!!");
let inv = [];
let isAlive = true;
let length = 0;

while (isAlive) {
    let usrName = rs.question("Welcome first election candidate, what is your name? ");
    let userName = usrName.toLowerCase();
    length = userName.length;
    let firstChar = userName.substring(0, length - length + 2);
    console.log(firstChar);
    console.log("Let's give our first candidate " + userName + " a warm Election Death Match welcome!")

    let userInput = rs.question("Are you ready to fight? ")
    while (userInput === "yes" || userInput === "y" || userInput === "true") {
        userInput = rs.question("Let's get ready to rumble! It's your move " + userName + ". What would you like to do? ")
        if (userInput.includes("shake") && userInput.includes("hand")) {
            console.log("You have been covered with a toxic Cheetoo dust and die a slow painful death.");
            isAlive = false;
            console.log("Looks like " + userName + " has fallen to Trump's poisoned Cheetoo chi dust powder and died.\nHere's to another four years of big business USA running America.");
        } else if (userInput.includes("look")) {
            console.log("You are in a locked cage with a toupee wearing Cheetoo, with its arm extended out, that wants to be your 'friend for life'. \nThere is a door, a bottle of beer, a hidden key, a window, and a hole in the wall.")
        } else if (userInput.includes("open") && userInput("door")) {
            if (inv.includes("key")) {
                console.log("You have succesfully defended America against the TV personallity. Let's give it up to the new president of the United States of America " + userName + "!")
            }
        }
    }

}

///////////////////////////////////////////
//Possible things to do in the room
//Look -> will print description of room
//Open door -> try to open door (if you have key go out, if not you FAIL)
//Put hand in the hole in the wall -> they die (GAME OVER)
//Shake Trump's hand -> they die (GAME OVER)
//Take bottle -> put in inventory
//Drink bottle -> if drink and throw, super beer powers kick in, you kill Trump, YOU WIN!!
//Throw bottle -> if at window, you win (GAME OVER)
//Throw bottle -> if at Trump, (GOOD JOB, NOW GET OUT OF ROOM!)
