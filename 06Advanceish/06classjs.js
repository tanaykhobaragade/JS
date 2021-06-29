/*----class syntax
 class User {
    constructor(){

    }
} */
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    courseList =[];

    getInfo (){
        return {name: this.name, email: this.email}
    }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getcourseList(){
        return this.courseList;
    }
// static keyword is used for private
        static login() {
        return "You are logged in";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "Iam subAdmin";
    }
    login() {
        return "login for admin only";
    }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com")
console.log(rock.getInfo());
rock.enrollCourse("Angular BootCamp");
console.log(rock.getcourseList());
console.log(rock.courseList);


const tom = new SubAdmin("tom", "tom@gerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());