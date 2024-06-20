document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            addItemToCart(productName, productPrice);
        });
    });

    function addItemToCart(name, price) {
        const item = cart.find(product => product.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartCount();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        cartCount.textContent = totalItems;
    }
});
