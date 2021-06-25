
// lecture 33:- Counter project in js 

/*
    SetTimeout(function,milliseconds)....once the timeout is over repeate or execute the function
    setInterval(function,milliseconds)...give me the milliseconds and the function executes for that particular time
*/ 

/*-----in Browser For Example---------
var number = document.querySelector(".counter") //class can be access by .class
undefined
number
<h1 class=​"counter">​1000​</h1>​
number.innerText    
"1000"
number.innerText = "Tanay"    
"Tanay"
*/

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 1001;

let count = 1;
setInterval(() => {
    if(count < 1000){
        count++;
    counter.innerText = count;
    }
},1)

setTimeout(() => {
    followers.innerText = "Followers on Instagram!"
}, 4000)


/* Assignment 
dont use querySelector,
instead use getElementById or use inner HTML
*/
