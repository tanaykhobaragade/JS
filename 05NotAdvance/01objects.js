// New Keyword
// new keyword is responsible for invoking the constructor and creating unique instance every single time
// when using prototype it is recommended to user uppercase in variable

// another way to define object----(functional approach to define object)
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};
// whenever new keyword is used this keyword is not a regular function call
var tanay = new User("tanay", 2);
console.log(tanay);

var yash = new User("yash", 4);
console.log(yash);