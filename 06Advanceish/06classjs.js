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
}

module.exports = User;

const rock = new User("rock", "rock@rock.com")
console.log(rock.getInfo());
rock.enrollCourse("Angular BootCamp");
console.log(rock.getcourseList());
console.log(rock.courseList);