//TODO: this is the basic or the part 1 of "this" keyword.
 
console.log(this);

var game = "cricket";

function sayName(){
    var name = "Tanay";
    console.log(this);

}

sayName();