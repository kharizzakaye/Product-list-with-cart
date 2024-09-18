const data = [
    {
        "id": "waffle-with-berries",
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
        "id": "creme-brulee",
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
        "id": "macaron-mix-five",
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
        "id": "classic-tiramisu",
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
        "id": "pistachio-baklava",
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
        "id": "lemon-meringue-pie",
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
        "id": "red-velvet-cake",
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
        "id": "salted-caramel-brownie",
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
        "id": "vanilla-panna-cotta",
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
            id="card-${dessert.id}"
        >
            <div>
                <picture >
                    <source media="(min-width: 992px)" srcset="${dessert.image.desktop}">
                    <source media="(min-width: 768px)" srcset="${dessert.image.tablet}">
                    <img id="picture-${dessert.id}" class="dessert-image img-fluid" src="${dessert.image.mobile}" alt="Image of ${dessert.name}">
                </picture>
            </div>

            <div class="add-cart-btn-container text-center">
                <button 
                    class="btn btn-light add-cart-btn" 
                    id="btn-${dessert.id}"
                    value="0"
                    onclick="addToCart('${dessert.id}')"
                > 
                    <div id=btn-text-${dessert.id}>
                        <span><img src="/assets/images/icon-add-to-cart.svg" alt=""></span>
                        Add to Cart
                    </div>
                </button>

                <div class="quantityContainer" id="qty-container-${dessert.id}">
                    <button 
                        class="decreaseQuantity"
                        id="btn-decrease-${dessert.id}"
                        onclick="decreaseQuantity('${dessert.id}')"
                    >
                    -
                    </button>

                    <p 
                        class="quantityText"
                        id="qty-value-${dessert.id}"
                        value="{
                            'id': ${dessert.id},
                            'name': ${dessert.name},
                            'price': ${dessert.price},
                            'image': ${dessert.image.desktop},
                        }"
                    >
                    1
                    </p>

                    <button 
                        class="increaseQuantity"
                        id="btn-increase-${dessert.id}"
                        onclick="increaseQuantity('${dessert.id}')"
                    >
                        +
                    </button>
                </div>
            </div>

            <div>
                <p class="dessert-details food-type">${dessert.category}</p>
                <p class="dessert-details food-name">${dessert.name}</p>
                <p class="dessert-details food-price">$${Number(dessert.price).toFixed(2)}</p>
            </div>
        </div>

        
    `
});

document.querySelector("#desserts-list").innerHTML = dessertsList;



// Add to Cart
let cartItems = [];

function addToCart(buttonId) 
{
    let ordersList = document.getElementById("cart-information");
    let confirmOrderButton = document.getElementById("confirm-order-btn");
    let carbonNeutralSection = document.getElementById("carbon-neutral-section");

    let selectedButton = document.getElementById(`btn-${buttonId}`);
    let selectedQuantityContainer = document.getElementById(`qty-container-${buttonId}`);

    let selectedImage = document.getElementById(`picture-${buttonId}`);

    cartItems.push(buttonId);

    // hide add to cart button 
    selectedButton.style.display = "none";

    // show quantity buttons
    selectedQuantityContainer.style.display = "inline-block";

    // add border to selected food
    selectedImage.style.border = "3px solid hsl(14, 86%, 42%)";

    console.log("cartItems",cartItems)

    if ( cartItems.length == 0 )
    {
        ordersList.innerHTML = `
            <div class="text-center" id="empty-cart-image">
                <img src="/assets/images/illustration-empty-cart.svg" alt="">
            </div>

            <p class="card-text text-center img-fluid" id="empty-cart-text">Your added items will appear here</p>
        `;

        carbonNeutralSection.style.display = "none";
        confirmOrderButton.style.display = "none";
    }
    else
    {
        cartItemsDisplay =  "";
        cartItems.forEach( cartItem => {
            cartItemsDisplay += `
                <p>${cartItem}</p>
                <hr/>
            `
        });



        ordersList.innerHTML = cartItemsDisplay;

        carbonNeutralSection.style.display = "block";
        confirmOrderButton.style.display = "block";
    }


    document.getElementById("cart-quantity").innerHTML = `(${cartItems.length})`
}

function decreaseQuantity(buttonId)
{
    let decreaseValue = document.getElementById(`qty-value-${buttonId}`);
    let selectedImage = document.getElementById(`picture-${buttonId}`);
    let selectedButton = document.getElementById(`btn-${buttonId}`);
    let selectedQuantityContainer = document.getElementById(`qty-container-${buttonId}`);

    newQuantity = Number(decreaseValue.textContent) - 1;

    // update styles
    if (newQuantity == 0)
    {
        decreaseValue.innerHTML = newQuantity;

        // remove border to selected food
        selectedImage.style.border = "none";

        // show add to cart button 
        selectedButton.style.display = "inline-block";

        // hide quantity buttons
        selectedQuantityContainer.style.display = "none";

        // remove item to cart

    }
    else
    {
        decreaseValue.innerHTML = newQuantity;
    }
}

function increaseQuantity(buttonId)
{
    let increaseValue = document.getElementById(`qty-value-${buttonId}`);

    newQuantity = Number(increaseValue.textContent) + 1;

    increaseValue.innerHTML = newQuantity;
}