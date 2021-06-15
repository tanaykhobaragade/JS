// Show user a signout button if he is authenticated,
// otherwise show him  option to Login/Signup.


 var authenticated = false;

// if(authenticated){
//     console.log("show signout button");
// }else{
//     console.log("show login button");
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

authenticated ? console.log("SignOut") : console.log("LOGIN");