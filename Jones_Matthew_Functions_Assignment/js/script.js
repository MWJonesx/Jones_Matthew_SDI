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

        ballOrLotto = prompt("If you really want to play you must choose, PowerBall or Florida State Lottery? (case sensitive)"; //this is the prompt that the user will see if they enter nothing

    }
    return ballOrLotto; //this returns the value to gameValidation
}
function randomNum (minimum, maximum, howMany){ //this sets up the function randomNum that holds our arguments for this function

    var randomNumsArray = []; //this is our array that our random numbers will come from
    for (var x = 0; x < howMany; x++) { //this is the setup of our for loop that says that the value of x is the array index of 0 and when x is less than the value of howMany we should add another number from the array

        var randomPower = Math.random() * (maximum - minimum) + minimum; //this is where we are telling the machine to choose a random number between whatever our minimum is and whatever our maximum is
        randomPower = Math.round(randomPower); //this is where we use the Math object Math.round to rond our random number that we got from the Math.random Math object to the nearest whole number
        var returnValue = checkNotRepeating(randomPower, randomNumsArray, x); //this line of code sets up a variable that will use the function checkNotRepeating to determine if a number has been repeated or not
        if( returnValue === -1){ //this sets up an if statement that will execute if the random number that is scheduled to be outputted matches a random number that has already been outputted
            x--; //this is saying that if the random number has been outputted then change the array index number by negative one. It changes by negative 1 here but when it goes back up for another cycle in the loop the x++ on line 33 will change it back to its original array index number. This will give the computer another chance to output a random number in the same spot that has not already been outputted
        }
        else { //this sets up what happens if the random number that has been outputted has not been outputted previously
            randomNumsArray[x] = randomPower; //this says that if the randomNumsArray of x equals the value of randomPower move onto the next line of code
        }
    }
    return randomNumsArray; // this returns the vaue of randomNumsArray to randomNum
}
function checkNotRepeating (powerRandom, array, arrayIndex){ //This sets up the function checkNotRepeating that will be used to make sure that none of the outputted numbers within a set have repeated

    for (var y = 0; y < arrayIndex; y++){ // this is the setup of this functions for loop that says that value of y is the array index 0 and while the value of y is less than the value of arrayIndex then add 1
        if (array [y] === powerRandom){ //this if statement says that if the array of y equals the value of powerRandom run the next line of code.

            return -1; //this line of code returns -1 to checkNotRepeating

        }

    }
    return 0; //this line of code means that the array of y did not equal the value of powerRandom therefore it should return 0

}


//main code
game = gameValidation(game); //this changes the value of game to be whatever the user inputs when prompted in the above code
console.log("You have chosen to play " + game + "!"); //this is the output that will appear once the user enters which game they would like to play

if (game === "PowerBall") { //this what happens if the user inputs PowerBall

    powerBallNums = randomNum(1, 59, 5); //this sets up the parameters for the arguments minimum, maximum, and howMany to output the 5 PowerBall numbers between 1 and 59
    powerBall = randomNum(1, 35, 1); //this sets up the paramets for the arguments minimum, maximum, and howMany to output the 1 number between 1 and 35 that will represent the PowerBall number
    console.log("Your PowerBall numbers are " + powerBallNums + " with the PowerBall " + powerBall + "!"); //this is the final output if the user opts to play the PowerBall
}
else if (game === "Florida State Lottery") { //this is what happens if the user inputs Florida State Lottery
    lotto = randomNum(1,53,6); //this sets up the parameters for the arguments minimum, maximum, and howMany to output the 6 Florida State Lottery numbers between 1 and 53
    console.log("Your Florida State Lottery numbers are " + lotto + "!"); //this is the final output if the user opts to play the Florida State Lottery
}