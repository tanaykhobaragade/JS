//Object - assi- get an info of all obj
var user = {
    firstName : "Tanay",
    lastName : "Khobaragade",
    role : "Admin",
    loginCount : 70,
    facebookSignedIn : true ,
    courseList : [] ,
    buyCourse : function (courseName){
        this.courseList.push(courseName); 
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function (){
        return `${this.firstName}
${this.lastName}
${this.role}
${this.loginCount}
${this.facebookSignedIn}
${this.courseList.length}`;
    },
};
var courseList = true;
console.log(user.firstName);
user.buyCourse("React JS Courses");
console.log(user.getCourseCount());
console.table(user.info());


//------------------------OR------------------------------

var user = {
    firstName : "Tanay",
    lastName : "Khobaragade",
    role : "Admin",
    loginCount : 70,
    facebookSignedIn : true ,
    courseList : [] ,
    buyCourse : function (courseName){
        this.courseList.push(courseName); 
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function (){
        console.table(user);

    
    },
};
var courseList = true;
console.log(user.firstName);
user.buyCourse("React JS Courses");
console.log(user.getCourseCount());
user.info();
