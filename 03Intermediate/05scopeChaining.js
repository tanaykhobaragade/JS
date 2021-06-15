// Scope Chaining in context
// Example of PoPsicle

var name = "Tanay";

console.log("Line number 3", name);

function sayName(){
    // var name = "Mr.T"
    console.log("Line no 10", name);

    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr. TK";
        console.log("Line number 15", name);
    }
}

sayName();