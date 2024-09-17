const data = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];


let dessertsList = "";
data.forEach( dessert => {
    dessertsList += `
        <div 
            class="dessert-item-card" 
            id=${dessert.name.replace(/ /g, '-').toLowerCase()}-card
        >
            <div>
                <picture >
                    <source media="(max-width: 768px)" srcset="${dessert.image.mobile}">
                    <img class="dessert-image img-fluid" src="${dessert.image.desktop}" alt="Image of ${dessert.name}">
                </picture>
            </div>

            <div class="add-cart-btn-container text-center">
                <button 
                    class="btn btn-light add-cart-btn" 
                    id="btn-add-cart-${dessert.name.replace(/ /g, '-').toLowerCase()}"
                    value="0"
                    onclick="addToCart(btn-add-cart-${dessert.name.replace(/ /g, '-').toLowerCase()})"dxz
                > 
                    <img src="/assets/images/icon-add-to-cart.svg" alt="">
                    Add to Cart
                </button>
            </div>

            <div>
                <p class="dessert-details food-type">${dessert.category}</p>
                <p class="dessert-details food-name">${dessert.name}</p>
                <p class="dessert-details food-price">$${Number(dessert.price).toFixed(2)}</p>
            </div>
        </div>

        
    `
});



console.log(dessertsList)
document.querySelector("#desserts-list").innerHTML = dessertsList;


const addToCart = (foodId) => {
    console.log(foodId + " added");
}

// update add to cart button on hover
let selectedDessert = "";

// document.addEventListener("mouseover", function(event) {
//     if (event.target.tagName == "BUTTON")
//     {
//         console.log("id: ", event.target.id);
//         selectedDessert = event.target.id;
//     }
   
//     document.getElementById(selectedDessert).innerHTML = 
//     `
//         <img src="/assets/images/icon-decrement-quantity.svg">
//         1
//         <img src="/assets/images/icon-increment-quantity.svg">
//     `;
// });

// document.addEventListener("mouseout", function(event) {
//     if (event.target.tagName == "BUTTON")
//     {
//         selectedDessert = event.target.id;
//     }
   
//     document.getElementById(selectedDessert).textContent = `Add to Cart`;
// });