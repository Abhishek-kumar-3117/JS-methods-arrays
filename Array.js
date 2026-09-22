// let student1 = "Abhishek";
// let student2 = "Aman";
// let student3 = "rajat";

let students = ["Abhishek", "Aman", "rajat"];

let nums = [2, 4, 6, 8];

let marks = [99, 90, 59, 80, 86];
let name = ["abhishek", "aman", "rishi"];
let info = ["Abhishek", 22, 6.1];

let nemArr = [];

// Arrays Methods

let data = ["Abhishek", "aman", "badal"];
 data.push("nishant");
 data.pop();
//  data.unshift("Guddu");
data.shift("Guddu");

// Pratices Questions
let month = ["january", "july", "march", "august"];
//   month[0] = "july"; 
//   month[1] = "june";

// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");

let primary = ["red", "green", "yellow"];
let secondary = ["black", "orange", "blue"];
primary.concat(secondary);

// Pratices Questions
let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");

let lang = ["c", "c++", "sql", "javaScript", "python", "java", "C#"];
lang.reverse();
lang.indexOf("javaScript");

// Pratices Questions

let game = [["X", "null", "O"], ["null", "X", "null"], ["O", "null", "X"]];
 

// Pratices Questions .1

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0, n);
console.log(ans);

// QS 2

let arr1 = [7, 9, 0, -2];
let N = 3;

let ans1 = arr.slice(arr1.length-N);
console.log(ans1);

// QS 3

let str = prompt("please enter a string");
if(str.length == 0) {
console.log("string is empty");
}else{ 
     console. log ("string is not empty");
}

// QS.4

let name2 = "ADFvbgdchyf";
console.log(name2);
