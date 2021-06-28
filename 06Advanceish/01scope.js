/* 
when we use let keyword inside a scope it ends there
means it cannot be access from outside and gives error+++++++++
on other hand if we use var keyword we can use outside the scope and gives undefined.
 */
console.log(name);
var name = "Tanay";

if (true) {
    let lastName = "Khobragade";
}
console.log(lastName);