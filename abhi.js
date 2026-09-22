// Conditional Statements
// console.log("before if statement");
// let age = 25;
// if (age >= 18) {
//     console.log("You are eligible for voting.");
// }
// console.log("after if statement");
// if (age >= 20) {
//     console.log("You are eligible for driving.");
// }

// traffic lite system
// let color = "red";
// if (color == "red") {
//     console.log("Stop. light color is red");
// }

// if (color == "yellow") {
//     console.log("Go Slow. light color is yellow");
// }

// if (color == "green") {
//     console.log("Go. light color is green");
// }

// else if statement 
// let age = 15;
// if (age >= 18){
// console.log("you can vote");
// }
// else if (age >= 18 ) {
//     console.log("you cannot vote");
// }
// else if (age < 18 ) {
//     console.log("you cannot vote");
// }

// let marks = 80;
// if (marks >= 80) {
//     console.log("A+");
// }
// else if (marks >= 60){
//     console.log("A");
// }
// else if (marks >= 40){
//     console.log("A");
// }else if (marks >= 30){
//     console.log("A");
// }

// else statement

// let age = 16;
// if( age >= 18) {
//     console.log ("you can vote");
// } else {
//     console.log("you cannot vote");
// }

// Practice Qs

// let size = "L";
// if (size == "XL"){
//     console.log("price is Rs. 250");
// }
// else if (size == "L"){
//     console.log("price is Rs. 200");
// }
// else if (size == "M"){
//     console.log("price is Rs. 150");
// }
// else{
//     console.log("price is Rs. 100");
// }

// Nested if else statement
//   let marks =25;
//   if (marks >= 30) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("A+");
//     } else {
//         console.log("A");
//     }
//   } else {
//     console.log("fail");
//   }

// Practice Qs
   
    // let str = "apple";
    // if ((str[0] === 'a') && (str.length > 3)) {
    //     console.log("Good");
    // } else {
    //     console.log("Not Good");
    // }

    // Qs. 2

    // let num = 12;
    // if ((num%3 === 0)&& ((num+1 == 15)|| (num-1 ==11))) {
    //     console.log("safe");
    // } else {
    //     console.log("unsafe");
    // }

    // let string =" ";
    // if (string) {
    //     console.log("String is not empty");
    // } else {
    //     console.log("String is empty");
    // }

    // let num = -5;
    // if (num) {
    //     console.log("num is not equal to 0");
    // } else {
    //     console.log("num is equal to 0");
    // }

    // Switch Statement
    // let color = "red";

    // switch (color) {
    //     case "red":
    //         console.log("Stop.");
    //         break;
    //         case "yellow":
    //         console.log("Go Slow.");
    //         break;
    //         case "green":
    //         console.log("Go.");
    //         break;
    //         default:
    //         console.log("Broken light.");
            
    // }

    // Practice Qs

    // let day = "5"

    // switch (day) {
    //     case "1":
    //         console.log("Monday");
    //         break;
    //         case "2":
    //         console.log("Tuesday");
    //         break;
    //         case "3":
    //         console.log("Wednesday");
    //         break;
    //         case "4":
    //         console.log("Thrusday");
    //         break;
    //         case "5":
    //         console.log("Friday");
    //         break;
    //         case "6":
    //         console.log("Saturday");
    //         break;
    //         case "7":
    //         console.log("Sunday");
    //         break;
    //         default:
    //             console.log("Invalid day");

    // }

    // Alert and Prompt

    // alert("Something is wrong!");

    // console.log("this is a text message");
    // console.warn("this is a warning message");
    // console.error("this is an error message");

    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    console.log("Hello", firstName, "" , lastName);
    let msg = "Hello " + firstName + " " + lastName ;
    alert(msg);