const categoryData = [
    {
        id: 'italian',
        name: 'Italian',
        description: 'Authentic Italian cuisine',
        image: 'images/pasta.jpg',
        icon: 'bi-pie-chart-fill'
    },
    {
        id: 'indian',
        name: 'Indian',
        description: 'Flavorful Indian dishes',
        image: 'images/paneer_tikka.jpg',
        icon: 'bi-fire'
    },
    {
        id: 'breakfast',
        name: 'Breakfast',
        description: 'Start your day right',
        image: 'images/breakfast.jpg',
        icon: 'bi-egg-fried'
    },
    {
        id: 'salads',
        name: 'Salads',
        description: 'Fresh and healthy options',
        image: 'images/salad.jpg',
        icon: 'bi-flower1'
    },
    {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet delights',
        image: 'images/brownie.jpg',
        icon: 'bi-cake2'
    },
    {
        id: 'beverages',
        name: 'Beverages',
        description: 'Refreshing drinks',
        image: 'images/hotChocolate.jpeg',
        icon: 'bi-cup-straw'
    }
];

const menuData = {
    italian: [
        {
            id: 'italian-1',
            name: 'Pasta Alfredo',
            price: 299,
            description: 'Pasta with parmesan cheese sauce',
            image: 'images/Alfredo.jpg',
            category: 'Italian'
        },
        {
            id: 'italian-2',
            name: 'Classic Pasta',
            price: 249,
            description: 'Traditional pasta with white sauce',
            image: 'images/pasta.jpg',
            category: 'Italian'
        }
    ],
    indian: [
        {
            id: 'indian-1',
            name: 'Paneer Tikka',
            price: 249,
            description: 'Grilled paneer with tradtional spices',
            image: 'images/paneer_tikka.jpg',
            category: 'Indian'
        },
        {
            id: 'indian-2',
            name: 'Tandoori Platter',
            price: 399,
            description: 'Assorted tandoor-grilled delicacies',
            image: 'images/tandoori.jpg',
            category: 'Indian'
        },
        {
            id: 'indian-3',
            name: 'Egg Bhurji',
            price: 149,
            description: 'Spiced scrambled eggs, Indian style',
            image: 'images/Bhurji.jpg',
            category: 'Indian'
        },
        {
            id: 'indian-4',
            name: 'Maggi Noodles',
            price: 89,
            description: 'Classic instant maggi with vegetables',
            image: 'images/maggi.jpg',
            category: 'Indian'
        },
        {
            id: 'indian-5',
            name: 'Veg Momos',
            price: 129,
            description: 'Steamed momos with spicy sauce',
            image: 'images/momos.jpg',
            category: 'Indian'
        },
        {
            id: 'indian-6',
            name: 'Butter Chicken',
            price: 229,
            description: 'Chicken in delicious butter gravy.',
            image: 'images/ButterChicken.jpg',
            category: 'Indian'
        }
    ],
    breakfast: [
        {
            id: 'breakfast-1',
            name: 'Classic Breakfast',
            price: 199,
            description: 'Eggs, toast, and sides',
            image: 'images/breakfast.jpg',
            category: 'Breakfast'
        },
        {
            id: 'breakfast-2',
            name: 'French Toast',
            price: 159,
            description: 'Classic french toast with maple syrup',
            image: 'images/frenchtoast.jpg',
            category: 'Breakfast'
        },
        {
            id: 'breakfast-3',
            name: 'Cinnamon Pancakes',
            price: 179,
            description: 'Fluffy pancakes with cinnamon sugar',
            image: 'images/CinnamonPancakes.jpg',
            category: 'Breakfast'
        },
        {
            id: 'breakfast-4',
            name: 'Classic Pancakes',
            price: 149,
            description: 'Soft pancakes with butter and syrup',
            image: 'images/Pancakes.jpg',
            category: 'Breakfast'
        }
    ],
    salads: [
        {
            id: 'salad-1',
            name: 'Garden Fresh Salad',
            price: 179,
            description: 'Mixed greens with fresh vegetables',
            image: 'images/salad.jpg',
            category: 'Salads'
        },
        {
            id: 'sides-1',
            name: 'French Fries',
            price: 99,
            description: 'Crispy golden fries with seasoning',
            image: 'images/Fries.jpg',
            category: 'Sides'
        }
    ],
    desserts: [
        {
            id: 'dessert-1',
            name: 'Chocolate Brownie',
            price: 129,
            description: 'Rich chocolate brownie with nuts',
            image: 'images/brownie.jpg',
            category: 'Desserts'
        },
        {
            id: 'dessert-2',
            name: 'Cherry Cheesecake',
            price: 179,
            description: 'Creamy cheesecake with cherry topping',
            image: 'images/CherryCheesecake.jpg',
            category: 'Desserts'
        },
        {
            id: 'dessert-3',
            name: 'Fruit Parfait',
            price: 149,
            description: 'Layered yogurt with fresh fruits',
            image: 'images/parfait.jpg',
            category: 'Desserts'
        }
    ],
    beverages: [
        {
            id: 'beverage-1',
            name: 'Hot Chocolate',
            price: 129,
            description: 'Rich and creamy hot chocolate',
            image: 'images/hotChocolate.jpeg',
            category: 'Beverages'
        },
        {
            id: 'beverage-2',
            name: 'Jigarthanda',
            price: 89,
            description: 'Traditional South Indian cold drink',
            image: 'images/jigarthanda.jpeg',
            category: 'Beverages'
        }
    ]
};
// Menu Generation
function generateMenu() {
    const menuContainer = document.querySelector('.food-items-grid');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';
    
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category');
    
    // Filter items based on category
    const items = Object.values(menuData).flat().filter(item => {
        if (!selectedCategory) return true; // Show all items if no category selected
        return item.category.toLowerCase() === selectedCategory;
    });
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<p class="no-results">No items found in this category</p>';
        return;
    }

    items.forEach(item => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-item';
        foodCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p class="description">${item.description}</p>
            <p>₹${item.price}</p>
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
        `;
        menuContainer.appendChild(foodCard);
    });
}

// Cart Management
const cart = {
    items: {},
    total: 0,

    addItem(id, name, price) {
        if (this.items[id]) {
            this.items[id].quantity++;
        } else {
            this.items[id] = {
                name,
                price,
                quantity: 1
            };
        }
        this.updateTotal();
        this.saveCart();
        this.updateCartUI();
    },

    removeItem(id) {
        if (this.items[id]) {
            delete this.items[id];
            this.updateTotal();
            this.saveCart();
            this.updateCartUI();
        }
    },

    updateQuantity(id, delta) {
        if (this.items[id]) {
            this.items[id].quantity += delta;
            if (this.items[id].quantity <= 0) {
                this.removeItem(id);
            } else {
                this.updateTotal();
                this.saveCart();
                this.updateCartUI();
            }
        }
    },

    updateTotal() {
        this.total = Object.values(this.items).reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    },

    saveCart() {
        localStorage.setItem('foodKartCart', JSON.stringify({
            items: this.items,
            total: this.total
        }));
    },

    loadCart() {
        const savedCart = localStorage.getItem('foodKartCart');
        if (savedCart) {
            const { items, total } = JSON.parse(savedCart);
            this.items = items;
            this.total = total;
            this.updateCartUI();
        }
    },

    updateCartUI() {
        // Update cart count in navigation
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = Object.values(this.items).reduce(
                (sum, item) => sum + item.quantity,
                0
            );
            cartCount.textContent = totalItems;
        }

        const cartContainer = document.querySelector('.cart-items');
        if (!cartContainer) return;

        cartContainer.innerHTML = '';
        Object.entries(this.items).forEach(([id, item]) => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="item-actions">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity('${id}', 1)">+</button>
                    <button class="remove-btn" onclick="cart.removeItem('${id}')">Remove</button>
                </div>
            `;
            cartContainer.appendChild(li);
        });

        const totalElement = document.querySelector('.cart-total');
        if (totalElement) {
            totalElement.textContent = `Total: ₹${this.total}`;
        }
    }
};

// Form Validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('.form-input');
    let isValid = true;

    inputs.forEach(input => {
        input.classList.remove('error');
        const value = input.value.trim();

        switch (input.type) {
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
            case 'tel':
                if (!/^\d{10}$/.test(value)) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
            case 'password':
                if (value.length < 6) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
            default:
                if (!value) {
                    input.classList.add('error');
                    isValid = false;
                }
        }
    });

    return isValid;
}

// Checkout & Order Processing
function handleCheckout(event) {
    event.preventDefault();
    const form = event.target;

    if (!validateForm(form)) {
        return false;
    }

    // Get form data
    const orderData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        address: form.querySelector('#address').value,
        paymentMethod: form.querySelector('#payment').value,
        orderId: generateOrderId(),
        items: cart.items,
        total: cart.total
    };

    // Save order data to localStorage
    localStorage.setItem('lastOrder', JSON.stringify(orderData));

    // Clear cart
    cart.items = {};
    cart.total = 0;
    cart.saveCart();

    // Redirect to order confirmation
    window.location.href = 'order.html';
    return false;
}

function generateOrderId() {
    return 'FK-' + Date.now().toString().slice(-6);
}

function displayOrderConfirmation() {
    const orderData = JSON.parse(localStorage.getItem('lastOrder'));
    if (!orderData) return;

    // Update order details
    document.getElementById('order-id').textContent = orderData.orderId;
    document.getElementById('delivery-address').textContent = orderData.address;
    document.getElementById('payment-method').textContent = orderData.paymentMethod;

    // Display ordered items
    const orderItems = document.querySelector('.order-items');
    if (orderItems) {
        orderItems.innerHTML = '';
        Object.entries(orderData.items).forEach(([id, item]) => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} × ${item.quantity}</p>
                </div>
            `;
            orderItems.appendChild(li);
        });
    }

    // Update total
    const orderTotal = document.querySelector('.order-total');
    if (orderTotal) {
        orderTotal.textContent = `Total: ₹${orderData.total}`;
    }

    // Clear the order data from localStorage after displaying
    localStorage.removeItem('lastOrder');
}

// Carousel Management
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function initializeCarousel() {
    const categoriesSection = document.querySelector('.categories-section');
    if (!categoriesSection) return;

    // Create carousel container
    categoriesSection.innerHTML = `
        <h2>Popular Categories</h2>
        <div class="carousel-container">
            <button class="carousel-nav prev" aria-label="Previous">
                <i class="bi bi-chevron-left"></i>
            </button>
            <div class="carousel-wrapper">
                <div class="carousel-track"></div>
            </div>
            <button class="carousel-nav next" aria-label="Next">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    `;

    const carouselTrack = categoriesSection.querySelector('.carousel-track');

    // Generate category cards
    categoryData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => window.location.href = `menu.html?category=${category.id}`;
        card.innerHTML = `
            <div class="category-image" style="background-image: url('${category.image}')"></div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        carouselTrack.appendChild(card);
    });

    // Add event listeners for navigation
    const prevButton = categoriesSection.querySelector('.prev');
    const nextButton = categoriesSection.querySelector('.next');

    prevButton.addEventListener('click', () => navigateCarousel('prev'));
    nextButton.addEventListener('click', () => navigateCarousel('next'));

    // Add touch support
    const carousel = categoriesSection.querySelector('.carousel-wrapper');
    carousel.addEventListener('touchstart', handleTouchStart, false);
    carousel.addEventListener('touchmove', handleTouchMove, false);
    carousel.addEventListener('touchend', handleTouchEnd, false);

    // Initial position update
    updateCarouselPosition();
    updateNavigationVisibility();

    // Add resize listener for responsive behavior
    window.addEventListener('resize', () => {
        updateCarouselPosition();
        updateNavigationVisibility();
    });
}

function navigateCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const cards = track.children;
    const cardWidth = cards[0].offsetWidth;
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const visibleWidth = carouselWrapper.offsetWidth;
    const maxSlides = Math.max(0, cards.length - Math.floor(visibleWidth / cardWidth));

    if (direction === 'prev' && currentSlide > 0) {
        currentSlide--;
    } else if (direction === 'next' && currentSlide < maxSlides) {
        currentSlide++;
    }

    updateCarouselPosition();
    updateNavigationVisibility();
}

function updateCarouselPosition() {
    const track = document.querySelector('.carousel-track');
    const cards = track.children;
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

function updateNavigationVisibility() {
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    const track = document.querySelector('.carousel-track');
    const cards = track.children;
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const visibleWidth = carouselWrapper.offsetWidth;
    const maxSlides = Math.max(0, cards.length - Math.floor(visibleWidth / cards[0].offsetWidth));

    prevButton.style.display = currentSlide === 0 ? 'none' : 'flex';
    nextButton.style.display = currentSlide >= maxSlides ? 'none' : 'flex';
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    event.preventDefault(); // Prevent scrolling while swiping
}

function handleTouchEnd() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateCarousel('prev');
        } else {
            navigateCarousel('next');
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    initializeCarousel();

    // Initialize cart
    cart.loadCart();

    // Generate menu
    generateMenu();

    // Add to cart buttons - using event delegation for dynamically created buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = e.target.dataset.id;
            const item = Object.values(menuData)
                .flat()
                .find(item => item.id === id);
            if (item) {
                cart.addItem(id, item.name, item.price);
            }
        }
    });

    // Form submission - for login and signup forms
    const forms = document.querySelectorAll('form:not(.checkout-form)');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form)) {
                // Here you would typically send the form data to a server
                console.log('Form submitted successfully');
            }
        });
    });

    // Update cart summary on checkout page
    const checkoutSummary = document.querySelector('.checkout-container .cart-items');
    if (checkoutSummary) {
        cart.updateCartUI();
    }

    // Display order confirmation
    if (window.location.pathname.endsWith('order.html')) {
        displayOrderConfirmation();
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-bar .bi-search');

    if (searchInput) {
        // Handle search submission
        function handleSearch() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                const loadingElement = document.getElementById('loading');
                if (loadingElement) {
                    loadingElement.style.display = 'flex';
                    document.querySelector('.food-items-grid').style.display = 'none';
                }
                
                // Store the search term in sessionStorage
                sessionStorage.setItem('lastSearch', searchTerm);
                
                // Redirect with a slight delay to show loading state
                setTimeout(() => {
                    window.location.href = `menu.html?search=${encodeURIComponent(searchTerm)}`;
                }, 300);
            }
        }

        // Search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // Search on icon click
        if (searchIcon) {
            searchIcon.style.cursor = 'pointer';
            searchIcon.addEventListener('click', handleSearch);
        }

        // Update placeholder text
        searchInput.placeholder = 'Search for your latest favourite...';

        // Handle search results on menu page
        if (window.location.pathname.endsWith('menu.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const searchQuery = urlParams.get('search');

            if (searchQuery) {
                searchInput.value = searchQuery;
                const menuContainer = document.querySelector('.food-items-grid');
                if (!menuContainer) return;

                // Clear existing content
                menuContainer.innerHTML = '';

                // Add search results header
                const searchHeader = document.createElement('div');
                searchHeader.className = 'search-results-header';
                searchHeader.innerHTML = `
                    <h2>Search Results for "${searchQuery}"</h2>
                    <button class="clear-search" onclick="window.location.href='menu.html'">Clear Search</button>
                `;
                menuContainer.appendChild(searchHeader);

                // Filter items based on search query
                const searchTerms = searchQuery.toLowerCase().split(' ');
                const filteredItems = Object.values(menuData)
                    .flat()
                    .filter(item => {
                        const itemText = `${item.name} ${item.description} ${item.category}`.toLowerCase();
                        return searchTerms.every(term => itemText.includes(term));
                    });

                // Display results count
                const resultsCount = document.createElement('p');
                resultsCount.className = 'results-count';
                resultsCount.textContent = `Found ${filteredItems.length} item${filteredItems.length !== 1 ? 's' : ''}`;
                menuContainer.appendChild(resultsCount);

                // Display filtered items or no results message
                if (filteredItems.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.innerHTML = `
                        <p>No items found matching "${searchQuery}"</p>
                        <p>Try different keywords or browse our menu categories</p>
                    `;
                    menuContainer.appendChild(noResults);
                } else {
                    const resultsGrid = document.createElement('div');
                    resultsGrid.className = 'search-results-grid';
                    menuContainer.appendChild(resultsGrid);

                    filteredItems.forEach(item => {
                        const foodCard = document.createElement('div');
                        foodCard.className = 'food-item';
                        // Highlight matching text
                        const highlightText = (text) => {
                            return searchTerms.reduce((acc, term) => {
                                const regex = new RegExp(`(${term})`, 'gi');
                                return acc.replace(regex, '<mark>$1</mark>');
                            }, text);
                        };

                        foodCard.innerHTML = `
                            <img src="${item.image}" alt="${item.name}">
                            <h4>${highlightText(item.name)}</h4>
                            <p class="description">${highlightText(item.description)}</p>
                            <p class="category">${highlightText(item.category)}</p>
                            <p>₹${item.price}</p>
                            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                        `;
                        resultsGrid.appendChild(foodCard);
                    });
                }
            }
        }
    }
});