/*
  Matthew Jones Scalable Data Infrastructures 201507 Expressions Assignment
 */

//alert("Good job! JavaScript works! "); //Testing my JavaScript file connection

//variables

var purchaseItems = []; //This line indicates the array
var arrayIndex = 0; // This line defines the value of arrayIndex as 0
const salesTax = 0.06; // This is the constant salesTax to be calculated into the total
var purchaseTotal; // This line declares the variable purchaseTotal

purchaseItems[arrayIndex] = prompt("How much does the red shirt cost?"); //Prompting the user to enter the cost of a red shirt.
console.log(arrayIndex); // This prints out the current value of arrayIndex
console.log("purchaseItems[0]="  + purchaseItems[arrayIndex]); //This outputs the first value of the array
