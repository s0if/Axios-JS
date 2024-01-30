
let data = [];
let prodects = document.querySelector('.products');
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
    for (let i = 0; i < data.length; i++) {
        prodects.innerHTML += `
        <div >
        <img src="${data[i].thumbnail}" >
        <a href="details.html?id=${data[i].id}">Details</a>
        </div>
        `
    }
};