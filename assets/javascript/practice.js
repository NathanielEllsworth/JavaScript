/**
 *
 * Code-Cadamy JavaScript course
 *
 * 5/29/2017
 *
 * '   ' Hours to complete
 *
 *
 */


//$(document).ready(function(){


/**
 * Comparisons
 */

// Here is an example of using the greater than (>) operator.
    console.log(15 !== 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
    console.log("Xiao Hui".length <= 122);
    console.log("Goody Donaldson".length >= 8);
    console.log(8*2 === 16);


/**
 * Decisions, decisions
 */

if ( "Nathaniel".length >= 7 ) {
    console.log("You have a long name!" );
}


/**
 * Computers are smart
 */

if( "myName".length >= 7 ) {
    console.log("You have a long name!");
}
else {
    console.log("You have a short name!");
}

/**
 * Math and the modulo
 */

// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4);
console.log(14%3);
console.log(99%8);
console.log(11%3);

/**
 * Modulo and if / else
 */

//An example of an if/else statement with modulo in the condition



if( 10 % 2 === 0) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}


/**
 * Substrings
 */

// Be careful with the substring's letter positions!
"wonderful day".substring(3,7);


/**
 * More substring practice
 */

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));


/**
 * Variables
 */


// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:
var myAge = 27;

console.log(myAge);


/**
 * More Variable Practice
 */


// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "America";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length );

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3) );


/**
 * Change variable values
 */

// On line 2, declare a variable myName and give it your name.
var myName = "Nate";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2
// letters of your name.
console.log(myName.substring(0,2));
// On line 9, use console.log to print out the myName variable.
console.log("myName");


/**
 * Conclusion: Part 2
 */


// Not sure where to begin? Check the Hint!

var myName = "Nathaniel"

if( "myName".length >= 7 ) {
    console.log("I did not finished my first course!");
}
else {
    console.log("I finished my first course!");
}






/**
 * -------------------------------------------------------------------------------------------
 */









/**
 * Old enough to play?
 */


// Check if the user is ready to play!
confirm("I understand confirm!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log("you are allowed to play but I take no responsibility");

} else {

    console.log("Here is an encouraging message to play on!");
}


/**
 * Asking for feedback
 */

// Check if the user is ready to play!
confirm("I understand confirm!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log("you are allowed to play but I take no responsibility");

} else {

    console.log("Here is an encouraging message to play on!");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");


console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer == "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Rate my game out of 10");

if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");

} else {

    console.log("I'll keep practicing coding and racing.");
}





/**
 * -------------------------------------------------------------------------------------------
 */




/**
 * Introduction to functions in JavaScript
 */

/**
 * Introduction
 */


var speed = 65;

// Complete the condition in the ()s on line 4
if (speed > 80 ) {
    // Use console.log() to print "Slow down"
    console.log("Slow down");
}
else {
    // Use console.log() to print "Drive safe"
    console.log("Drive safe");

}


/**
 * Introducing Functions
 */

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(36);


/**
 * Function syntax
 */


// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!

greeting("Nate");


/**
 * How does a function work?
 */


// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)

var foodDemand = function(food){
    console.log("I want to eat" + " " + food);
};

foodDemand("PIZZA!!");


/**
 * Tying it all together
 */


// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting = function (name) {
    console.log(name);
};

greeting("Fixed code");


/**
 * Don't Repeat Yourself (D.R.Y)
 */


var orangeCost = function (price){
    var total = price * 5;
    console.log(price * 5);
};

orangeCost(5);


/**
 * Return Keyword
 */


// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(9);
console.log(newNumber);


/**
 * Functions, return and if / else
 */


// Define quarter here.
var quarter = function(number) {
    return number / 4;
};


if (quarter(12) % 3 === 0 ) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}


/**
 * Functions with two parameters
 */

// Write your function starting on line 3

var perimeterBox = function(length, width){

    return length + length + width + width;
};
perimeterBox(2,4);


/**
 * Global vs local Variables
 */


var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);


/**
 *Functions recap
 */

var nameString = function( name ){

    return "Hi, I am" + " " + name ;
} ;

console.log(nameString("Nate")) ;


/**
 * Functions & if / else
 */


// Write your function below.
// Don't forget to call your function!

var sleepCheck = function (numHours){

    if(numHours >= 8){

        return "You're getting plenty of sleep! Maybe even too much!";

    } else {

        return "Get some more shut eye!";
    }

};


/**
 * ------------------------------------------------------------------------------------
 */












































//});