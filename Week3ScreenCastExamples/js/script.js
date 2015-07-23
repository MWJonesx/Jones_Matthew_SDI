/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos




//alert("JavaScript works!");
 var age = 11;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age <10){
    book = "Green Eggs and Ham";
}else {
    book = ("The Time Machine");
}
console.log(book);*/

book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);   // This Ternary is the same as the above if else conditional statement

