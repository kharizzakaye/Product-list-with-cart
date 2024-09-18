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



let ordersList = document.getElementById("cart-information");
let cartQuantity = document.getElementById("cart-quantity");
let grandTotal = document.getElementById("orders-total-amount");
let confirmOrderButton = document.getElementById("confirm-order-btn");
let carbonNeutralSection = document.getElementById("carbon-neutral-section");
let totalAmountSection = document.getElementById("order-total-section");

const emptyOrdersList = `
    <div class="text-center" id="empty-cart-image">
        <img src="/assets/images/illustration-empty-cart.svg" alt="">
    </div>

    <p class="card-text text-center img-fluid" id="empty-cart-text">Your added items will appear here</p>
`;


// Add to Cart
let cartItems = [];

function itemsDisplayOnCart()
{
    cartItemsDisplay =  "";

    for (let i=0; i< cartItems.length; i++)
    {
        if (cartItems[i].quantity == undefined)
        {
            cartItems[i].quantity = 1;
            cartItems[i].subtotal = cartItems[i].price;
        }
    }


    cartItems.forEach( cartItem => {
        cartItemsDisplay += `
            <div class="cart-item-line">
                <p class="cart-name">${cartItem.name}</p>
                <p class="cart-quantity">${cartItem.quantity}x</p>
                <p class="cart-price">@ $${Number(cartItem.price).toFixed(2)}</p>
                <p class="cart-subtotal">$${Number(cartItem.subtotal).toFixed(2)}</p>
                <hr/>
            </div>
        `
    });

    ordersList.innerHTML = cartItemsDisplay;

    let calculateTotalQuantity = 0;
    let grandTotalAmount = 0;
    cartItems.forEach(function(number) 
    {
        calculateTotalQuantity += number.quantity;
        grandTotalAmount += number.subtotal;
    });

    cartQuantity.innerHTML = `(${calculateTotalQuantity})`;
    grandTotal.innerHTML = `$${Number(grandTotalAmount).toFixed(2)}`;
}



function addToCart(buttonId) 
{
    let selectedButton = document.getElementById(`btn-${buttonId}`);
    let selectedQuantityContainer = document.getElementById(`qty-container-${buttonId}`);
    let quantityValue = document.getElementById(`qty-value-${buttonId}`);
    let selectedImage = document.getElementById(`picture-${buttonId}`);

    // hide add to cart button 
    selectedButton.style.display = "none";

    // show quantity buttons
    selectedQuantityContainer.style.display = "inline-block";

    // add border to selected food
    selectedImage.style.border = "3px solid hsl(14, 86%, 42%)";

    // set quantity to 1
    quantityValue.innerHTML = "1";

    // add item to cart
    const itemDetails = data.filter(food => food.id === buttonId);
    cartItems.push(itemDetails[0]);

    // hide empty cart message
    if ( cartItems.length == 0 )
    {
        carbonNeutralSection.style.display = "none";
        confirmOrderButton.style.display = "none";
        totalAmountSection.style.display = "none";
    }
    else // show cart items
    {
        itemsDisplayOnCart();

        carbonNeutralSection.style.display = "block";
        confirmOrderButton.style.display = "block";
        totalAmountSection.style.display = "block";
    }
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
        const removeToCart = cartItems.filter(function (food) {
            return food.id !== buttonId;
        });
        cartItems = removeToCart;


        itemsDisplayOnCart();

        if (cartItems.length == 0)
        {
            ordersList.innerHTML = emptyOrdersList;

            carbonNeutralSection.style.display = "none";
            confirmOrderButton.style.display = "none";
            totalAmountSection.style.display = "none";
        }
    }
    else
    {
        decreaseValue.innerHTML = newQuantity;

        const updateQuantity = cartItems.findIndex(any => { return any.id === buttonId; });
        cartItems[updateQuantity].quantity = newQuantity;
        cartItems[updateQuantity].subtotal = newQuantity * cartItems[updateQuantity].price;

        itemsDisplayOnCart();
    }
}

function increaseQuantity(buttonId)
{
    let increaseValue = document.getElementById(`qty-value-${buttonId}`);

    newQuantity = Number(increaseValue.textContent) + 1;
    increaseValue.innerHTML = newQuantity;

    const updateQuantity = cartItems.findIndex(any => { return any.id === buttonId; });
    cartItems[updateQuantity].quantity = newQuantity;
    cartItems[updateQuantity].subtotal = newQuantity * cartItems[updateQuantity].price;

    itemsDisplayOnCart();
}

function confirmOrder()
{
    let confirmationList = document.getElementById("confirmation-modal-list");
    let confirmationGrandTotal = document.getElementById("confirmation-grand-total");
    let confirmItemsDisplay =  "";

    cartItems.forEach( cartItem => {
        confirmItemsDisplay += `
             <div class="row cart-item-line">
                <div class="col-4" id="confirmation-image">
                    <img class="img-fluid" src="${cartItem.image.desktop}" alt="">
                </div>

                <div class="col ">
                    <p class="cart-name">${cartItem.name}</p>
                    <p class="cart-quantity">${cartItem.quantity}x</p>
                    <p class="cart-price">@ $${Number(cartItem.price).toFixed(2)}</p>
                </div>

                <div class="col-2">
                    <p class="cart-subtotal">$${Number(cartItem.subtotal).toFixed(2)}</p>
                </div>
            </div>

            <hr/>
        `
    });

    confirmationList.innerHTML = confirmItemsDisplay;


    let confirmationGrandTotalAmount = 0;
    cartItems.forEach(function(number) 
    {
        confirmationGrandTotalAmount += number.subtotal;
    });

    confirmationGrandTotal.innerHTML = `$${Number(confirmationGrandTotalAmount).toFixed(2)}`;
}

function startNewOrder()
{
    let selectedButton;
    let selectedQuantityContainer;
    let quantityValue;
    let selectedImage;

    // reset selections and cart
    for (let i=0; i<cartItems.length; i++)
    {
        selectedButton = document.getElementById(`btn-${cartItems[i].id}`);
        selectedQuantityContainer = document.getElementById(`qty-container-${cartItems[i].id}`);
        quantityValue = document.getElementById(`qty-value-${cartItems[i].id}`);
        selectedImage = document.getElementById(`picture-${cartItems[i].id}`);

        // remove border to selected food
        selectedImage.style.border = "none";

        // show add to cart button 
        selectedButton.style.display = "inline-block";

        // hide quantity buttons
        selectedQuantityContainer.style.display = "none";

    }

    cartItems = [];

    cartItemsDisplay = [];
    ordersList.innerHTML = emptyOrdersList;

    cartQuantity.innerHTML = "(0)"
    carbonNeutralSection.style.display = "none";
    confirmOrderButton.style.display = "none";
    totalAmountSection.style.display = "none";
}