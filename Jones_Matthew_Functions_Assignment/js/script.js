/**
 * Matthew Jones
 * Scalable Data Infrastructures
 * Functions Assignment
 * 201507
 */

//alert("JavaScript works!");

//Determine which lottery the user wants to play and output the correct amount of random numbers

//variables
var powerBallNums //this is the variable that will be used to output the 5 random numbers of the PowerBall lottery
var lotto //this is the variable that will be used to output the 6 random numbers for the Florida State Lottery
var powerBall //this is the variable that will be used to output the 1 random number that will represent the PowerBall in the PowerBall lottery
var game = prompt("Would you like to play the PowerBall or the Florida State Lottery? (case sensitive)"); //this will prompt the user to tell which game they would like to play


//functions
function gameValidation(ballOrLotto) { //this sets up the function gameValidation that will prompt the user to tell which game they would like to play if they do not enter anything


    while (ballOrLotto === "") { //this sets up the while loop. This line essentially say while the user enters nothing when asked then do that next line of code

        ballOrLotto = prompt("If you really want to play you must choose, PowerBall or Florida State Lottery? (case sensitive"); //this is the prompt that the user will see if they enter nothing

    }
    return ballOrLotto; //this returns the value to gameValidation
}


//main code
game = gameValidation(game); //this changes the value of game to be whatever the user inputs when prompted in the above code
console.log("You have chosen to play " + game + "!"); //this is the output that will appear once the user enters which game they would like to play
