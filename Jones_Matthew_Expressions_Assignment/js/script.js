/*
  Matthew Jones Scalable Data Infrastructures 201507 Expressions Assignment
 */

//alert("Good job! JavaScript works! "); //Testing my JavaScript file connection


// Calculate the total price of a purchase including a coupon and sales tax.

//variables


const salesTax = .06;//This line declares the value of .06 to the const salesTax
const coupon = 5; // This line declares the value of 5 to the const of coupon
var redShirt = prompt("How much does the red shirt cost?"); // This prompts the user to input the value for the variable of redShirt
var blueShirt = prompt("How much does the blue shirt cost?");// This line prompts the user to input the value for the variable of blueShirt
var purpleShirt = prompt("How much does the purple shirt cost?"); // This line prompts the user to input the value for the variable of purpleShirt
var tealShirt = prompt("how much does the teal shirt cost?"); // This line prompts the user to input the value for the variable of tealShirt
var shoppingItems=[redShirt,blueShirt, purpleShirt, tealShirt]; // This line shows the array of the four variables
var totalPrice = Number(shoppingItems[0]) + Number(shoppingItems[1]) + Number(shoppingItems[2]) + Number(shoppingItems[3]); //This line shows the use of Array Index Notation

