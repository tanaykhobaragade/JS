const tanay = {
    firstName : "Tanay",
    lastName : "Khobragade",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        Role is ${this.role}
        and he is studing ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

// tanay.getInfo();
// dj.getInfo();

// here comes in borrowing of method
//+++++++++++++++++ .bind always gives us reference back and we have to run that reference manually 

// tanay.getInfo.bind(dj)();
// we can directly call or we can just wrap up in var
var djInfo = tanay.getInfo.bind(dj);
djInfo();

// +++++++++++++++ on other hand call() gives an output directly
tanay.getInfo.call(dj);
