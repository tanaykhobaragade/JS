// import User from "./06classjs";

const User = require ("./06classjs");

const tanay = new User("Tanay", "tanayk0892@gmail.com")
console.log(tanay.getInfo());
tanay.enrollCourse("React BootCamp");
tanay.enrollCourse("Angular BootCamp");

console.log(tanay.getcourseList());

let courses = tanay.getcourseList();
courses.forEach( (c) => console.log(c) );