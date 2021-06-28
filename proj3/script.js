const courses = [
    {
        name: "Complete ReactJS course",
        Price: "2.3",
    },
    {
        name: "Complete Angular course",
        Price: "2.0",
    },
    {
        name: "Complete MERN course",
        Price: "3.0",
    },
    {
        name: "Complete C++ course",
        Price: "1.5",
    },
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach( (course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.Price);
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);
    });
};

// generateList();
window.addEventListener("load", generateList);
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    course.sort ((a, b) => a.price - b.price)
    generateList(); 
});