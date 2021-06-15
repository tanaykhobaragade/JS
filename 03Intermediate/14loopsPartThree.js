//  ------------for of loop-------for in loop----------

// for of loop ------is for array majorly
const names = [
    "YouTube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon",
]; 

for (const n of names){
    console.log(n);
}

// for in loop -----------is for objects 
const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"

}

for(const n in symbols){
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}

