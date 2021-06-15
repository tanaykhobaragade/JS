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

