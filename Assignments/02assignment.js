// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged from Facebook

var email = true;
var google = false;
var facebook = false;

if(email){
    console.log("logged in through Email");
}
if(google){
    console.log("logged in through Google");
}
if(facebook){
    console.log("logged in through Facebook")
}