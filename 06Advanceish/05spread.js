/* // spread and Rest Operator

var returnValue = Math.max(2, 7, 5, 4, 3, 2, 9, 8);
console.log(returnValue);

var myObj = {}
// here myObj should be empty obj otherwise the existing values will be removed when we assigned
Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});
console.log(myObj); */

function sumOne(a, b) {
    return a + b;
}

var myA = [5,4];
// console.log(sumOne(...myA)); //spread operator 



// ------Rest Operator--------
function sumTwo(...args){
    console.log(args); //it takes all the element and arrange in array
    let sum = 0;
    for (const arg of args) {
        // sum = sum + arg;
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2,3,1,5,7));


function sumTwo(a, b, ...args){
    let multi =  a * b;
    let sum = 0;
    for (const arg of args) {
        // sum = sum + arg;
        sum += arg;
    }
    return [sum,multi];
}

console.log(sumTwo(2,3,1,1,1));