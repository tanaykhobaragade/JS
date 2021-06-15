/*
Define a function that can answer the role of a user.
A user can be on following roles:
 admin - with all access
 subadmin - with access to create/delete courses
 testprep - with access to creat delete test
 user - consume all content
 other - trial user
 
 Input: getUserRole(name, role)
*/

// function getUserRole(name, role)
var getUserRole = function(name, role)
{
    switch (role){
        case "admin":
            return `${name} is admin with all access`
            // break; //this is not necessary because once's the value is returned the other never executes

        case "subadmin":
            return `${name} is sub-admin with  access to create/delete courses`;
            // break;
        case "testprep":
            return `${name} is testprep with access to create/ delete test`;
            // break;  
        case "user":
            return `${name} is a user to consume content`;
            // break;
        default:
            return `${name}is a trial user`
            // break;

    }
}

// getUserRole("Tanay", "admin");

console.log(getUserRole("Tanay", "admin"));

var getRole = getUserRole("Tanay", "testprep");
console.log(getRole);
