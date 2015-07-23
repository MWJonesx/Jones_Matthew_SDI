/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos




//alert("JavaScript works!");
//Conditional Logic - else if

// if a child is tall enough to ride a roller coaster


var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

// if the child is tall enough, print out to the console "You can ride the coaster!"
// if the kid is over 48 inches in height
//if the kid is wearing shoes that give him 2 extra inches in height

if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!");
} else if(kidHeight > wParentHeight) {
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}