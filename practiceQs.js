// QS. 1
let num = "115"
if(num % 10 == 0) {
    console.log("Good");
} else {
    console.log("bad");
}

// // QS.2

let userName = prompt("Enter your username");
let age = prompt("Enter your age");
alert(`${userName} is ${age} years old`);

// QS.3

let Qunter = "2" ;
switch(Qunter) {
    case "1" :
    console.log(" January, February, March");
    break;
    case "2" :
    console.log("April, May, June");
    break;
    case "3" :
    console.log("July, August, September");
    break;
    case "4" :
    console.log("October, November, December");
    break;
    default :
    console.log("Wrong");
}

// Qs.4

let str = "Abhishek";
     if ((str[0] === 'a' , 'A') && (str.length > 5)) {
         console.log("golden string");
     } else {
         console.log("Not");
     }

    //  QS.5

     let a = 5;
     let b = 18;
     let c = 13;
     if (a>b) {
         if(a>c) {
             console.log(a,"is largest");
         } else {
             console.log(c, "is largest");
         }
     } else {
        if (b > c) {
            console. log (b, "is largest");
     } else {
         console. log (c, "is largest");
     }
 }

// Qs. 6

let num1 = 32;
let num2 = 47852;

if((num1 % 10) == (num2 % 10) ) {
console.log("numbers have the same last digit which is", 
    num1 % 10);
} else {
console.log ("numbers don't have the same last digit");
}