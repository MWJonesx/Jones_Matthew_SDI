/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos


//Conditional Logic

//alert("JavaScript works!");


// if a child is tall enough to ride a roller coaster

var kidHeight = 47;
var minHeight = 48;

// if the child is tall enough, print out to the console "You can ride the coaster!"
// if the kid is over 48 inches in height
//if the kid is wearing shoes that give him 2 extra inches in height

if(kidHeight > minHeight){
    //code performed if the condition is true
    console.log("You can ride the coaster!");
}
if(kidHeight <= minHeight){
    console.log("Sorry kid, you've got some growing to do first!");
}

var kidHeight = 47;
var minHeight = 48;

// if the child is tall enough, print out to the console "You can ride the coaster!"
// if the kid is over 48 inches in height
//if the kid is wearing shoes that give him 2 extra inches in height

if(kidHeight > minHeight){
    //code performed if the condition is true
    console.log("You can ride the coaster!");
} else {
    console.log("Sorry kid, you've got some growing to do first!");
}