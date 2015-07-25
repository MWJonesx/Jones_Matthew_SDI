/*
Matthew Jones
Scalable Data Infrastructures
201507
 */

//alert("JavaScript works!");

//Calculate whether or not the user is old enough to take the driving test to get their Driver's License with or without a Driver's Permit or if they are only old enough to take the written test to get their Driver's Permit

var studentAge = prompt("Enter your age: ");  //this sets up the variable studentAge and prompts the user to enter their age
if(studentAge === ""){
    studentAge = prompt("I'm sorry I didn't get that. \nHow old are you?"); //this prompt executes if the user enters nothing when they are prompted to enter their age
    console.log("You are " + studentAge + ".");} //this is the output that is displayed after the student enters their age after first entering nothing
var minAge = 16; //this sets up the variable minAge which represents the minimum age to take the test to get your Driver's License without a permit
var ageForPermit = 15; //this is the variable for the age requirement to take the written test to get your Driver's Permit
