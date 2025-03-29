// Sample cart items
const cartItems = [
    { product: "Coffee", quantity: 2, price: 3.5 },
    { product: "Muffin", quantity: 1, price: 2.0 },
    { product: "Croissant", quantity: 3, price: 2.5 }
];

// Function to display cart items and calculate total balance
function displayCartItems() {
    const cartItemsBody = document.getElementById('cart-items-body');
    cartItemsBody.innerHTML = ''; // Clear any previous content

    let totalAmount = 0;

    cartItems.forEach(item => {
        const total = item.quantity * item.price;
        totalAmount += total;

        // Create a row for each item
        const row = document.createElement('tr');

        // Create columns for product, quantity, price, and total
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
        `;

        cartItemsBody.appendChild(row);
    });

    // Update the total amount on the page
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalAmount.toFixed(2);

    // Event listener for the 'Proceed to Payment' button
    const payButton = document.getElementById('pay-btn');
    payButton.addEventListener('click', () => {
        if (totalAmount > 0) {
            alert(`Payment successful! Total paid: $${totalAmount.toFixed(2)}`);
            // Optionally, you can redirect to a payment gateway or clear the cart
        } else {
            alert("Your cart is empty! Add items to the cart before proceeding.");
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayCartItems);
