/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos




//alert("JavaScript works!");
var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget &&  payCheck > budget){ //you can only use the && operator between 2 Boolean expressions
    console.log("We can buy the phone!");
} else {
    console.log("No phone for you!!");
}