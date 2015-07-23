/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos




//alert("JavaScript works!");
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget OR we win the lottery
if(iPhonePrice < budget || wonLottery){ //This translates to if the iPhone price is less than the budget OR you win the lottery, then you can buy the phone
    console.log("We can buy the phone!");
} else {
    console.log("No phone for you!");
}