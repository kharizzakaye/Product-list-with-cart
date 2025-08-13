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

const dessertsListEl = document.querySelector("#desserts-list");
const ordersListEl = document.getElementById("cart-information");
const cartQuantityEl = document.getElementById("cart-quantity");
const grandTotalEl = document.getElementById("orders-total-amount");
const confirmOrderBtn = document.getElementById("confirm-order-btn");
const carbonNeutralSection = document.getElementById("carbon-neutral-section");
const totalAmountSection = document.getElementById("order-total-section");

const emptyOrdersListHTML = `
    <div class="text-center" id="empty-cart-image">
        <img src="/assets/images/illustration-empty-cart.svg" alt="">
    </div>
    <p class="card-text text-center img-fluid" id="empty-cart-text">Your added items will appear here</p>
`;

let cartItems = [];

// Render desserts
const renderDesserts = () => {
    dessertsListEl.innerHTML = data.map(dessert => `
        <div class="dessert-item-card" id="card-${dessert.id}">
            <div>
                <picture>
                    <source media="(min-width: 992px)" srcset="${dessert.image.desktop}">
                    <source media="(min-width: 768px)" srcset="${dessert.image.tablet}">
                    <img id="picture-${dessert.id}" class="dessert-image img-fluid" src="${dessert.image.mobile}" alt="Image of ${dessert.name}">
                </picture>
            </div>
            <div class="add-cart-btn-container text-center">
                <button class="btn btn-light add-cart-btn" id="btn-${dessert.id}" onclick="addToCart('${dessert.id}')">
                    <span><img src="/assets/images/icon-add-to-cart.svg" alt=""></span>
                    Add to Cart
                </button>
                <div class="quantityContainer" id="qty-container-${dessert.id}">
                    <button class="decreaseQuantity" onclick="decreaseQuantity('${dessert.id}')">-</button>
                    <span class="quantityText" id="qty-value-${dessert.id}">1</span>
                    <button class="increaseQuantity" onclick="increaseQuantity('${dessert.id}')">+</button>
                </div>
            </div>
            <div>
                <p class="dessert-details food-type">${dessert.category}</p>
                <p class="dessert-details food-name">${dessert.name}</p>
                <p class="dessert-details food-price">$${Number(dessert.price).toFixed(2)}</p>
            </div>
        </div>
    `).join('');
};
renderDesserts();


const emptyCartDisplay = () => {
    ordersListEl.innerHTML = emptyOrdersListHTML;
};
emptyCartDisplay();


// Update cart display
const updateCartDisplay = () => {
    if (cartItems.length === 0) {
        emptyCartDisplay();
        cartQuantityEl.textContent = "(0)";
        carbonNeutralSection.style.display = "none";
        confirmOrderBtn.style.display = "none";
        totalAmountSection.style.display = "none";
        return;
    }

    let cartHTML = "";
    let totalQuantity = 0;
    let totalAmount = 0;

    cartItems.forEach(item => {
        cartHTML += `
            <div class="cart-item-line">
                <p class="cart-name">${item.name}</p>
                <p class="cart-quantity">${item.quantity}x</p>
                <p class="cart-price">@ $${item.price.toFixed(2)}</p>
                <p class="cart-subtotal">$${item.subtotal.toFixed(2)}</p>
                <hr/>
            </div>
        `;
        totalQuantity += item.quantity;
        totalAmount += item.subtotal;
    });

    ordersListEl.innerHTML = cartHTML;
    cartQuantityEl.textContent = `(${totalQuantity})`;
    grandTotalEl.textContent = `$${totalAmount.toFixed(2)}`;
    carbonNeutralSection.style.display = "block";
    confirmOrderBtn.style.display = "block";
    totalAmountSection.style.display = "block";
};

// Add to cart
window.addToCart = (id) => {
    const dessert = data.find(item => item.id === id);
    if (!dessert) return;

    // Prevent duplicate items
    if (cartItems.some(item => item.id === id)) return;

    cartItems.push({
        ...dessert,
        quantity: 1,
        subtotal: dessert.price
    });

    document.getElementById(`btn-${id}`).style.display = "none";
    document.getElementById(`qty-container-${id}`).style.display = "inline-block";
    document.getElementById(`picture-${id}`).style.border = "3px solid hsl(14, 86%, 42%)";
    document.getElementById(`qty-value-${id}`).textContent = "1";

    updateCartDisplay();
};

// Decrease quantity
window.decreaseQuantity = (id) => {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    const item = cartItems[itemIndex];
    if (item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.quantity * item.price;
        document.getElementById(`qty-value-${id}`).textContent = item.quantity;
    } else {
        // Remove from cart
        cartItems.splice(itemIndex, 1);
        document.getElementById(`btn-${id}`).style.display = "inline-block";
        document.getElementById(`qty-container-${id}`).style.display = "none";
        document.getElementById(`picture-${id}`).style.border = "none";
    }
    updateCartDisplay();
};

// Increase quantity
window.increaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (!item) return;
    item.quantity += 1;
    item.subtotal = item.quantity * item.price;
    document.getElementById(`qty-value-${id}`).textContent = item.quantity;
    updateCartDisplay();
};

// Confirm order modal
window.confirmOrder = () => {
    const confirmationList = document.getElementById("confirmation-modal-list");
    const confirmationGrandTotal = document.getElementById("confirmation-grand-total");

    let confirmItemsHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        confirmItemsHTML += `
            <div class="row cart-item-line">
                <div class="col-4" id="confirmation-image">
                    <img class="img-fluid" src="${item.image.desktop}" alt="">
                </div>
                <div class="col">
                    <p class="cart-name">${item.name}</p>
                    <p class="cart-quantity">${item.quantity}x</p>
                    <p class="cart-price">@ $${item.price.toFixed(2)}</p>
                </div>
                <div class="col-2">
                    <p class="cart-subtotal">$${item.subtotal.toFixed(2)}</p>
                </div>
            </div>
            <hr/>
        `;
        total += item.subtotal;
    });

    confirmationList.innerHTML = confirmItemsHTML;
    confirmationGrandTotal.textContent = `$${total.toFixed(2)}`;
};

// Start new order
window.startNewOrder = () => {
    cartItems.forEach(item => {
        document.getElementById(`btn-${item.id}`).style.display = "inline-block";
        document.getElementById(`qty-container-${item.id}`).style.display = "none";
        document.getElementById(`picture-${item.id}`).style.border = "none";
    });
    cartItems = [];
    updateCartDisplay();
};