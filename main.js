#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("welcome to my adventure quiz game:");
console.log("You are required to gain maximum 9 points for the window");
let points = 0;
//question1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["Python", "C++", "Java", "Javascript"],
    }
]);
if (question1.one == "Javascript") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// question2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "----- is a return type for when nothing is return?",
        type: "list",
        choices: ["Void", "Any", "Unknown", "any[]"],
    }
]);
if (question2.two == "Void") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "----- is similar to 'any' but a safer alternative when uncertain about the type?",
        type: "list",
        choices: ["Unknown", "Never", "Similar", "non of these"],
    }
]);
if (question3.three == "Unknown") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Type Aliases are mostly used with ?",
        type: "list",
        choices: ["String", "Number", "Boolean", "Undefined"],
    }
]);
if (question4.four == "String") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What are the two types of enums?",
        type: "list",
        choices: ["String and Boolean", "Number and Number Array", "String and Number", "Number and Boolean"],
    }
]);
if (question5.five == "Strring and Boolean") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question6
let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "Numeric enums first value is defaulted to what?",
        type: "list",
        choices: ["0", "10", "5", "1"],
    }
]);
if (question6.six == "0") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question7
let question7 = await inquirer.prompt([
    {
        name: "seven",
        message: "Who developed and designed Typesscript?",
        type: "list",
        choices: ["Microsoft", "Oracle", "Amazon", "Javascript"],
    }
]);
if (question7.seven == "Microsoft") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question8
let question8 = await inquirer.prompt([
    {
        name: "eight",
        message: "When was the first time Typescript was made public?",
        type: "list",
        choices: ["October 2012", "December 2012", "October 2013", "November 2012"],
    }
]);
if (question8.eight == "October 2012") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//uestion9
let question9 = await inquirer.prompt([
    {
        name: "nine",
        message: "Which of the following is the typing principle of typescript?",
        type: "list",
        choices: ["Gradual", "Dynamic", "Duck", "All of these"],
    }
]);
if (question9.nine == "All of these") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question10
let question10 = await inquirer.prompt([
    {
        name: "ten",
        message: "Which of the folllowing is a filename extension of typescript?",
        type: "list",
        choices: [".tsx", ".txt", ".tt", ".nod"],
    }
]);
if (question10.ten == ".tsx") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// output condition
if (points >= 9) {
    console.log("Congratulations! You Won ");
    console.log(`Your points is ${points}`);
}
else {
    console.log("You Loss! better luck next time");
    console.log(`Your points is ${points}`);
}
