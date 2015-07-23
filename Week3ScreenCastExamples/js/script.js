/**
 * Created by matthewjones1 on 7/23/15.
 */
//Examples from week 3 screen cast videos

//alert("JavaScript works!");


//Nesting conditionals
//Nesting conditionals are used when there is an extra step within a conditional statement

if(sunny){
    goToTheBeach();
    if(warmWater){            //This block of code means that if it sunny outside AND the water is warm then we should wear our new swim suit
        wearNewSuit();
    }
} else {
    goToTheMovies();
}
