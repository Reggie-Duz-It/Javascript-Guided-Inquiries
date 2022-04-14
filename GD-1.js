
/* Note to who's ever grading, you should comment out all other sections when
    when getting a single section to work, each section works independently,
    except for very hard, which pulls from the operanc functions in the hard
    section
*/
//Very Easy

var six = 6;
var  two = 2;
console.log(six - two);

//Easy 

var myName = "Reggie";
var hisName = "Max";
var lengthCompare = myName.length - hisName.length;
console.log(myName + " is longer than " + hisName + " by "  + lengthCompare);

//Medium
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What's your name? ", name => {
   if (name.toUpperCase() === name) {
       console.log("Why are you shouting?") 
   }else if (name.toLowerCase() === name){ 
       console.log("You need talk louder!")
   }else{
       console.log("A normal talker I See")
   }
       readline.close()
 })

 //Hard
var plus = add(4,4);
 function add(a, b) {
     return a + b;
 }
 console.log(plus);

 var minus = subtract(3,2);
 function subtract(a, b) {
     return a - b;
 }
 console.log(minus);

 var product = multiply(6,3);
 function multiply(a, b) {
     return a * b;
 }
 console.log(product);

 var half = divide(64,8);
 function divide(a, b) {
     return a / b;
 }
 console.log(half);

 //Very Hard
const prompt = require('prompt-sync') ({signit: true});

var num1 = prompt("First number?" );

if (num1 === num1) {
    Number(num1);
    var num2 = prompt("Second number? ");

    if (num2 === num2) {
        Number(num2);
        var oper = prompt("+, -, *, or /");

        if (oper === "+") {
            var result = add(parseFloat(num1), parseFloat(num2));
            console.log(num1 + oper + num2 + " = " +result);
        }
        else if (oper === "-") {
            var result = subtract(num1, num2);
            console.log(num1 + oper + num2 + " = " +result);
        }
        else if (oper === "*") {
            var result = multiply(num1, num2);
            console.log(num1 + oper + num2 + " = " +result);
        }
        else if (oper === "/") {
            var result = divide(num1, num2);
            console.log(num1 + oper + num2 + " = " +result);
        } else {
            console.log("Something went worng!");
        }
    }
}



    
