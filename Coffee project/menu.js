// Initialize an empty array to store cart items
let cartItems = [];

// Function to add items to the cart
function addToCart(productName, price) {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.product === productName);
    if (existingItem) {
        // If product exists, increase quantity
        existingItem.quantity++;
    } else {
        // Otherwise, add a new item to the cart
        cartItems.push({ product: productName, quantity: 1, price: price });
    }

    // Update the cart table display
    updateCart();
}

// Function to update the cart table
function updateCart() {
    const cartItemsBody = document.getElementById('cart-items-body');
    cartItemsBody.innerHTML = ''; // Clear existing cart items

    let totalAmount = 0;

    cartItems.forEach(item => {
        const total = item.quantity * item.price;
        totalAmount += total;

        // Create a new row for each item in the cart
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
        `;
        cartItemsBody.appendChild(row);
    });

    // Update the checkout button with the total amount
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.innerText = `Checkout ($${totalAmount.toFixed(2)})`;
}

// Function to handle checkout
function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += item.quantity * item.price;
        });
        alert(`Your total is $${totalAmount.toFixed(2)}`);
    }
}
