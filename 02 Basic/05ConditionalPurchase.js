// User is only allowed to make a purchase when he is:
//logged in
//email verified 
//cardInfo - valid
//If any one is missing, Stop Purchase

var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged in Success");
//     if(isEmailVerified){
//         console.log("Email is Verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

// && allows when everything is true . || allows when even single value is true. 
if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
}else{
    console.log("sorry your reuirements dosent fullfilled to make a purchase")
}