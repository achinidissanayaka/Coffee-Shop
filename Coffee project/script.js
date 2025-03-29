/* script.js */
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Welcome to the Coffee Shop!');
        });
    }

    const products = [
        { id: 1, name: 'Espresso', price: 2.5 },
        { id: 2, name: 'Latte', price: 3.5 },
        { id: 3, name: 'Cappuccino', price: 3.0 },
        { id: 4, name: 'Mocha', price: 3.8 },
        { id: 5, name: 'Americano', price: 2.8 },
        { id: 6, name: 'Macchiato', price: 3.2 },
        { id: 7, name: 'Cold Brew', price: 4.0 },
        { id: 8, name: 'Flat White', price: 3.5 }
    ];

    const productList = document.querySelector('#product-list');
    if (productList) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }
});

function addToCart(productId) {
    console.log(`Product ${productId} added to cart.`);
    alert('Product added to cart!');
}

/* cart.js */
window.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { id: 1, name: 'Espresso', price: 2.5, quantity: 2 },
        { id: 2, name: 'Latte', price: 3.5, quantity: 1 },
    ];

    const cartTable = document.querySelector('#cart-items tbody');
    if (cartTable) {
        cartItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            cartTable.appendChild(row);
        });

        const checkoutBtn = document.querySelector('#checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                alert('Checkout complete!');
            });
        }
    }
});


