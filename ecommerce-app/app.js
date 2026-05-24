const container = document.getElementById("product-list");

products.forEach(product => {
    container.innerHTML += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products.find(p => p.id === id);
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}
