/*
Matthew Jones
Scalable Data Infrastructures
201507
 */

//alert("JavaScript works!");

//Calculate whether or not the user is old enough to take the driving test to get their Driver's License with or without a Driver's Permit or if they are only old enough to take the written test to get their Driver's Permit



var requiredHours = 240; //this means that the value of the variable requiredHours is 240 which represents the required amount of driving hours with a Driver's Permit to take the driving test for a Driver's License
var studentAge = prompt("Enter your age: ");  //this sets up the variable studentAge and prompts the user to enter their age
if(studentAge === ""){
    studentAge = prompt("I'm sorry I didn't get that. \nHow old are you?"); //this prompt executes if the user enters nothing when they are prompted to enter their age
    console.log("You are " + studentAge + ".");} //this is the output that is displayed after the student enters their age after first entering nothing
var minAge = 16; //this sets up the variable minAge which represents the minimum age to take the test to get your Driver's License without a permit
var ageForPermit = 15; //this is the variable for the age requirement to take the written test to get your Driver's Permit
if(Number (studentAge) === Number (ageForPermit)) { //the variables studentAge and ageForPermit have been casted to turn the user's input into a number data type
    var hasPermit = prompt("Do you already have your Driver's Permit? (yes or no, case sensitive)"); //this prompts the user to answer if they already have a Driver's Permit or not
    if(hasPermit != "yes"){ //this is the if statement that says if the user does not answer "yes" that the following line of code will be outputted onto the console
        console.log("You are only eligible to take the written test for your Driver's Permit."); //this is what is outputted onto the console if the user does not answer yes when asked if they have a Driver's Permit
    }
    else { //this sets up the else statement that executes if the user answers "yes" when asked if they have a Driver's Permit

        var permitHours = prompt("How many driving hours have you done?"); //if the user answers "yes" when asked if they have a Driver's Permit, they are then prompted with this question
        if (permitHours === "") { //this is the set up for what happens if the user doesn't enter anything when they are asked how many driving hours they have done
            permitHours = prompt("I'm sorry I didn't get that. \nHow many driving hours have you done?"); //if the user does not enter anything when asked how many hours they have driven, they are then prompted with this question
            console.log("You have accomplished " + permitHours + " hours of driving."); // this is what is outputted onto the console after the user answers the above question

        }
