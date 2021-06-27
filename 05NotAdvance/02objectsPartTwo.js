// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var User = {
    name: "",
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
    },
};

var tanay = Object.create(User);
console.log(tanay);
tanay.name = "Tanay Khobragade";
tanay.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: {value : 3},
});

sam.getUserName();
