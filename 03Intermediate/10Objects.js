//OBJECTS

// in object it start with var user = {here it is having key value pair key : "value"}
var user = {
    firstName : "Tanay",
    lastName : "Khobaragade",
    role : "Admin",
    loginCount : 70,
    facebookSignedIn : true
};
console.log(user.firstName);        //method 1 and most commonly used
console.log(user["lastName"]);      // method 2


console.log(user.loginCount);
user.loginCount = 77;
console.log(user.loginCount);

console.table(user);