// Create an application with the following Roles:
// admin - gets full accesss
// subadmin  - get access to create/delete courses
// testprep - gets access to create /delete tests
// user - gets access to consume content

//for multiple privilages use switch case(conditional case)
 var user = "admin";

/* switch (key) {
     case value:
         
         break;
 
     default:
         break;
 }*/

 // after  using return keyword befor console.log() there is no need of break (return console.log("")).

 switch (user) {
     case "admin":
         console.log("your are admin and gets full access");
          break;
     case "subadmin":
         console.log("you are subadmin and allowed to create/delete courses");
         break;
     case "testprep":
         console.log("you are testprep and allowed to create/delete test")
         break;
     case "user":
         console.log("you are user and you can enjoy your content");
         break;
     default:
         console.log("sorry! please login");
         break;                
 }
 