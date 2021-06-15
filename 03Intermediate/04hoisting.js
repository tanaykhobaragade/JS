//                   Function declared are scanned and made avaliable
//                   Variables declared are scanned ande made undefined

// // Context in java Script

// // we are having 2 types of context in js. 
// // 1.the one is Gloable Context and
// // 2. second is the one which is executing right now

// var sayMe = 2;

// function sayMe(){
//     console.log("Say Me");
// }

// //till now the global context was running for console.log line (it kicks in and goes away) 
// // but as soon as we call the function the executionable context will run
// sayMe(); //execution context will be responsile for running this function.


function tipper(a){
    var bill = parseInt (a);
    console.log(bill + 5);
}

// tipper(10);
tipper("10"); //if tipper("a") any letter will pass it will show NaN (not a number).

// bigTipper("200");

// var bigTipper = function (a){
//     var bill = parseInt (a);
//     console.log(bill + 15);
// }

function bigTipper(a){
    var bill = parseInt (a);
    console.log(bill + 15);
}
bigTipper("200");



console.log(name);
var name = "tanay";


function sayName(){
    console.log("MR. T");
}

sayName();

console.log(name);