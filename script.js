// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxPrice = document.getElementById('lightboxPrice');
const closeLightbox = document.getElementById('closeLightbox');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartUI();
    
    // Event Listeners
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutButton.addEventListener('click', openCheckout);
    closeModal.addEventListener('click', closeCheckoutModal);
    checkoutForm.addEventListener('submit', handleCheckout);
    
    // Close modal when clicking outside
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });
    
    // Image lightbox event listeners
    closeLightbox.addEventListener('click', closeImageLightbox);
    imageLightbox.addEventListener('click', (e) => {
        if (e.target === imageLightbox) {
            closeImageLightbox();
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageLightbox.classList.contains('active')) {
            closeImageLightbox();
        }
    });
});

// Load Products
function loadProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openImageLightbox(${product.id})" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27280%27 height=%27300%27%3E%3Crect fill=%27%23f4e4c1%27 width=%27280%27 height=%27300%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 dy=%27.3em%27 fill=%27%238b4513%27 font-family=%27Arial%27%3EImage Loading...%3C/text%3E%3C/svg%3E'">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = '#28a745';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1000);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    // Update cart count
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutButton.disabled = true;
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27%3E%3Crect fill=%27%23f4e4c1%27 width=%2780%27 height=%2780%27/%3E%3C/svg%3E'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
            `;
            cartItems.appendChild(cartItem);
        });
        checkoutButton.disabled = false;
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout Functions
function openCheckout() {
    if (cart.length === 0) return;
    closeCartSidebar();
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0)
    };
    
    // In a real application, you would send this data to a server
    console.log('Order submitted:', formData);
    
    // Show success message
    alert(`Thank you for your order, ${formData.name}!\n\nYour order total is $${formData.total.toFixed(2)}.\n\nWe will contact you at ${formData.email} to confirm your order and arrange shipping.`);
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    // Reset form
    checkoutForm.reset();
    closeCheckoutModal();
}

// Image Lightbox Functions
function openImageLightbox(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        lightboxImage.src = product.image;
        lightboxImage.alt = product.name;
        lightboxTitle.textContent = product.name;
        lightboxPrice.textContent = `$${product.price.toFixed(2)}`;
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageLightbox() {
    imageLightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
