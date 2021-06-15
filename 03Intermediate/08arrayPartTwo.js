// function isEven(element){
//     // if (element % 2 === 0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return element % 2 === 0;
// }

// console.log(isEven(2));

// when arrow is used ( => ) ther should be return keyword 
var isEven = (element) => {
    return element % 2 === 0;
}
 // console.log(isEven(3));

//call back function

// var result = [ 2, 4, 6, 8, 3].every(isEven)  // .every actually does into an array and look for every single element
// //  and it do the operation with every sigle element.
// // Remember we are writing(isEven) not(isEven()) i.e we dont want yo run the function rather we want to pass a reference.

// console.log(result);

// var result = [ 2, 4, 6, 8].every((e) => {
//     return e % 2 === 0;

// })
// console.log(result);

// for single line we can rermove curly braces if we not use return keyword.
var result = [ 2, 4, 6, 8].every((e) =>  e % 2 === 0);
console.log(result);


// when we use return keyword ---- [].every(() => {})
// when we dont use return keyword ---- [].every(() => ())