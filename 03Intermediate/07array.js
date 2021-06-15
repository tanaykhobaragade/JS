// // counting of array always starts with 0 and in [] square brackets.
// var countries = ["India","USA","Japan","Russia"];

// var states = new Array("Rajasthan","Delhi","Maharashtra","Assam");
// console.log(states);
// console.log(states[0]);

// console.log(states.length);      //.length (methods)

// states[0] = "Punjab";
// console.log(states);

//this is not a good data structure
var user = ["tanay", "tanayk0892@gmail.com", 2, 7, true];
// console.log(user);

user.pop();
user.pop();
// console.log(user);

user.unshift("New Value")
// console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("newyy")); // it will show -1 which we can then use in if else condition.

//Array.from ----learn more from docs MDN

console.log(Array.from("Tanay"));

