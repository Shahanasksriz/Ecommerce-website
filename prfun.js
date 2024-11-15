
    function goToProductDetails(productName) {
        // Redirect to the details page with the product name in the URL
        window.location.href = `product-details.html?product=${encodeURIComponent(productName)}`;
    }
// Function to initialize cart count from localStorage
function initializeCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to add item to cart and update cart count
function addToCart() {
    alert(`${productName} added to cart!`);
    
    // Increase cart count
    let cartCount = parseInt(localStorage.getItem('cartCount') || '0', 10);
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    
    // Update cart count display
    document.getElementById('cart-count').textContent = cartCount;

    // Save product data (assuming product data is already set up)
    const product = {
        image: document.getElementById('product-image').src,
        title: document.getElementById('product-title').textContent,
        description: document.getElementById('product-description').textContent,
        price: document.getElementById('product-price').textContent
    };
    localStorage.setItem('cartProduct', JSON.stringify(product));
}

// Function to remove item from cart and update cart count
function removeFromCart() {
    // Remove product data from localStorage
    localStorage.removeItem('cartProduct');
    
    // Decrease cart count
    let cartCount = parseInt(localStorage.getItem('cartCount') || '0', 10);
    if (cartCount > 0) {
        cartCount--;
        localStorage.setItem('cartCount', cartCount);
        document.getElementById('cart-count').textContent = cartCount;
    }
    
    // Update the cart display
    document.querySelector('.cart-container').innerHTML = '<p>No items in the cart.</p>';
    alert('Item removed from cart!');
}

// Call this function when the page loads to initialize the cart count display
document.addEventListener('DOMContentLoaded', initializeCartCount);

