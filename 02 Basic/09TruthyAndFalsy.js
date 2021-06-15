// Truthy and falsy Values i.e == ===

// TODO: falsy
// undefined
// null
// 0
// ""
// NaN (Not a number)

// var user; //her user is notdefined  where as in case of temperature we can define the null value as in case of empty i.e nun value found.
var user = "2";
// when you need strict checking of particular type then use === and if you use == js will not check if it is string ar any particular type.
if (2 === user){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}

// console.log(2 + 2);
// console.log("2" + 2);