document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('products');

    productForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productQuantity = document.getElementById('product-quantity').value;
        const productDescription = document.getElementById('product-description').value;

        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <h3>${productName}</h3>
            <p>Price: ₹${productPrice} per unit</p>
            <p>Quantity: ${productQuantity}</p>
            <p>${productDescription}</p>
        `;

        productList.appendChild(productItem);

        // Clear form
        productForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const farmerList = document.getElementById('farmer-list');

    const farmers = [
        { name: 'Harsh Vardhan', location: 'Punjab', experience: 10, price: 20000, contact: 'johndoe@example.com' },
        { name: 'Sai Raj', location: 'Haryana', experience: 8, price: 25000, contact: 'janesmith@example.com' },
        { name: 'Bhoopesh Kumar', location: 'Uttar Pradesh', experience: 12, price: 15000, contact: 'ravikumar@example.com' },
        { name: 'lalith kumar', location: 'Maharashtra', experience: 15, price: 20000, contact: 'sunitapatil@example.com' },
    ];

    farmers.forEach(farmer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${farmer.name}</td>
            <td>${farmer.location}</td>
            <td>${farmer.experience}</td>
            <td>₹${farmer.price.toLocaleString()}</td>
            <td><a href="mailto:${farmer.contact}">Contact</a></td>
        `;
        farmerList.appendChild(row);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const products = [
        { id: 1, name: 'Organic Wheat', price: 3000, description: 'High-quality organic wheat.' },
        { id: 2, name: 'Brown Rice', price: 2500, description: 'Freshly harvested rice.' },
        { id: 3, name: 'Farm Fresh Vegetables', price: 1500, description: 'Assorted farm-fresh vegetables.' },
        { id: 4, name: 'Dairy Farm Milk', price: 600, description: 'Pure and fresh dairy milk.' },
    ];

    let cart = [];

    function renderProducts() {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ₹${product.price.toLocaleString()}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;
        cart.forEach((item, index) => {
            totalPrice += item.price;
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>₹${item.price.toLocaleString()}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }

    renderProducts();
});