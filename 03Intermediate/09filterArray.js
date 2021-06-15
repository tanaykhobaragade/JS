// var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// console.log(testArray.fill("T", 2, 5));
// // here arg1 is what we want to fill it up , and arg2 is what should be my start position  and arg3 is the end position  

const myNumbers = [12, 13, 14, 23, 34 ,45, 56];
//whenecver you use filter you get an new array
// const result = myNumbers.filter((num) => num!= 13);
const result = myNumbers.filter((num) => num < 56);
// console.log(result);


//slicing and splicing
var users =["Tim", "Ted", "Tom", "Sam", "Sor", "Sod"];
// console.log(users.slice(1, 4));
users.splice(1, 3, "HI", "BYE")
console.log(users);
// in case of splicing (1, 2, "HI") 1 is inclusive and 2 is not the end position , it is count value in this case and "Hi" is replaced