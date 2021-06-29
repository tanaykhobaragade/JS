fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    // console.log("API:", response.json);
    return response.json();
})
.then((data) => {
    // console.log("DATA is:", data);
    var joke = data.value;
    console.log("JOKE:", joke);
})
.catch()