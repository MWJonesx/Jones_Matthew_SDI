/*
Matthew Jones
Scalable Data Infrastructures
201507
 */

//alert("JavaScript works!");

//Calculate whether or not the user is old enough to take the driving test to get their Driver's License with or without a Driver's Permit or if they are only old enough to take the written test to get their Driver's Permit


var vehicle = " "; //this acts as a placeholder for the variable vehicle until its value is changed dependent upon the user's age
var requiredHours = 240; //this means that the value of the variable requiredHours is 240 which represents the required amount of driving hours with a Driver's Permit to take the driving test for a Driver's License
var studentAge = prompt("Enter your age: ");  //this sets up the variable studentAge and prompts the user to enter their age
if(studentAge === ""){
    studentAge = prompt("I'm sorry I didn't get that. \nHow old are you?"); //this prompt executes if the user enters nothing when they are prompted to enter their age
    console.log("You are " + studentAge + ".");} //this is the output that is displayed after the student enters their age after first entering nothing
var minAge = 16; //this sets up the variable minAge which represents the minimum age to take the test to get your Driver's License without a permit
var ageForPermit = 15; //this is the variable for the age requirement to take the written test to get your Driver's Permit
if(Number (studentAge) === Number (ageForPermit)) { //the variables studentAge and ageForPermit have been casted to turn the user's input into a number data type and checks if they are 15 years old before continuing onto the rest of the block of code related to the actions someone that is 15 years old would take
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
        if (permitHours >= requiredHours) { //this sets up the if statement for what happens if the amount of driving hours that have been done by the user is greater than or equal to the amount of driving hours that are required
            vehicle = prompt("Do you have a working vehicle with which to take the driving test? \n(yes or no, case sensitive)"); //this prompts the driver to answer the question "Do you have a working vehicle with which to take the driving test?" and then instructs them to answer yes or no with case sensitivity in mind
            if (vehicle === "") { //this instructs the machine to execute this code if the user does not enter anything
                vehicle = prompt("I'm sorry I didn't get that. \nDo you have a vehicle with which to take the driving test? \n(yes or no, case sensitive)"); //this is the prompt that appears if the user enters nothing
                console.log("You answered " + vehicle + "."); // this is what is outputted onto the console once the user enters their answer into the dialog box only after they enter nothing into the initial dialog box
            }
        }
        var output = (Number(permitHours) >= Number(requiredHours)) ? "You have completed enough driving hours to take the driving test for your Driver's License! " : "You need more driving hours to reach the required minimum to take the test to get your Driver's License."; //this is a ternary operation. The variables permitHours and requiredHours have been casted to change from a string that the user inputs to a number data type. This line of code determines if the user has enough driving hours to be eligible to take the test to get their Driver's License
        console.log(output); //this line of code outputs one of the two above responses dependent upon the answer the user inputs regarding the amount of time they have driven with a permit

        if (vehicle === "yes") { //this line of code sets up what happens if the user does have a vehicle with which to take the driving test
            console.log("You have the required vehicle to take the driving test to get your Driver's License!"); //this is what is outputted onto the console if the user answers yes
        }

        else if (vehicle === "no") { //this line of code sets up what happens if the user does not have a vehicle with which to take the driving test
            console.log("Sorry, you do not have the required vehicle to take the test to get your Driver's License at this time."); //this is what is outputted onto the console if the user answers no
        }
    }
} else if(Number (studentAge) >= Number (minAge)) { //these variables have been casted to turn the user's inputted string into a number data type and it checks if the user is at least 16 years old before executing the rest of this block of code that would pertain to someone that is 16 years old or older
    console.log("You are old enough to take the test to get your Driver's License!"); //if the user is 16 years old or older, the computer oututs this message onto the console
    vehicle = prompt("Do you have a working vehicle with which to take the driving test? \n(yes or no, case sensitive)"); // after the computer has determined that the user is at least 16 years old, it asks them if they have a vehicle with which to take the driving test
    if(vehicle === ""){ //this sets up what will happen if the user enters nothing
        vehicle = prompt("I'm sorry I didn't get that. \nDo you have a vehicle with which to take the driving test? \n(yes or no, case sensitive)"); //this is the message that the user will get if they enter nothing into the first dialog box
        console.log("You answered " + vehicle + "."); // this is what is outputted onto the console once the user answers the second prompt
    }var output2 = (vehicle != "no" && vehicle != "") ? "You have required vehicle to take the driving test to get your Driver's License!" : "Sorry, you do not have the required vehicle to take the test to get your Driver's License at this time."; //this is a ternary operation. the computer determines if the user has entered anything but no and nothing. If the user falls in that category the output is the first string and if they don't fall in that category the output is the second string that is after the colon
    console.log(output2); //this tells the computer to output the value of the variable output2 based on the user's input
}

else {
    console.log ("Sorry, you are not eligible to take any tests at this time.");// this message is what appears on the console if the user is under the age of 15 years old
}
