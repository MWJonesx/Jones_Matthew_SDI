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

if(kidHeight + 2 > minHeight){
    //code performed if the condition is true
    console.log("You can ride the coaster!");
}

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

// if the child is tall enough, print out to the console "You can ride the coaster!"
// if the kid is over 48 inches in height
//if the kid is wearing shoes that give him 2 extra inches in height

if(kidHeight + sneakerLift > minHeight){
    //code performed if the condition is true
    console.log("You can ride the coaster!");
}