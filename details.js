let data = [];
let prodects=document.querySelector(".prodects");
const urlparams = new URLSearchParams(window.location.search);
const id = urlparams.get('id');
// Make a request for a user with a given ID
axios.get('https://dummyjson.com/products')
    .then(function (response) {
        // handle success
        data = response.data.products;
        displaydata();
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
function displaydata() {
    prodects.innerHTML += `
        <div >
        <img src="${data[id-1].thumbnail}" >
        <h2>${data[id-1].title}</h2>
        <p>${data[id-1].description}</p>
        </div>
        `
};