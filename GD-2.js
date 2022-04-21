//Very Easy
const prompt = require('prompt-sync') ({signit: true});

function min(a ,b) {
    return Math.min(a, b);
}

console.log(`The minimum of A & B is ${min(48, 23)}`);

//Easy
var firstStudent = ["Reginald", "Devarel", "22"];
var secondStudent = ["Chris", "Rock", "52"];
var thirdStudent = ["Danny", "Phantom", "16"];

console.log(`Greetings, my name is ${secondStudent[0]} ${secondStudent[1]}, I am ${secondStudent[2]},
and I have just been slapped!`);

//Medium
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthInput = Number(prompt("Which number do you pick?"));
if (monthInput === 1) {
    console.log(`${monthInput} is ${months[0]}`);
}
else if (monthInput === 2) {
    console.log(`${monthInput} is ${months[1]}`);
}
else if (monthInput === 3) {
    console.log(`${monthInput} is ${months[2]}`);
}
else if (monthInput === 4) {
    console.log(`${monthInput} is ${months[3]}`);
}
else if (monthInput === 5) {
    console.log(`${monthInput} is ${months[4]}`);
}
else if (monthInput === 6) {
    console.log(`${monthInput} is ${months[5]}`);
}
else if (monthInput === 7) {
    console.log(`${monthInput} is ${months[6]}`);
}
else if (monthInput === 8) {
    console.log(`${monthInput} is ${months[7]}`);
}
else if (monthInput === 9) {
    console.log(`${monthInput} is ${months[8]}`);
}
else if (monthInput === 10) {
    console.log(`${monthInput} is ${months[9]}`);
}
else if (monthInput === 11) {
    console.log(`${monthInput} is ${months[10]}`);
}
else if (monthInput === 12) {
    console.log(`${monthInput} is ${months[11]}`);
}
else if (monthInput > 12) {
    console.log(`You've entered an invalid number`);
}
else if (monthInput < 1) {
    console.log(`You've entered an invalid number`);
}

//Hard

function tomBMI(a, b) {
    return b / (a * a);
}

function jerryBMI(a, b) {
    return b / (a * a);
}
var tomHeight = 9;
var tomMass = 8;

var jerryHeight = 10;
var jerryMass = 45;

console.log("Is Tom's BMI higher then Jerry's BMI ?");
console.log(tomBMI(tomHeight, tomMass) > jerryBMI(jerryHeight, jerryMass));


