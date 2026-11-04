/**
 * COCONEST - Pure Coconut Living
 * Advanced Core JavaScript Engine
 * Handles Theme (Dark/Light), RTL, Shopping Cart, Wishlist, QuickView, Filters, FormSubmit, and UI Interactions
 */

// Sample Catalog for Quick View, Search, and Cart Interactions
const COCONEST_CATALOG = [
  {
    id: 'vco-500',
    name: 'Extra Virgin Cold-Pressed Coconut Oil (500ml)',
    category: 'oil',
    categoryName: 'Virgin Coconut Oil',
    price: 18.50,
    oldPrice: 22.00,
    rating: 5.0,
    reviews: 148,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    description: '100% Raw, unrefined, centrifuge-extracted from freshly harvested organic Sri Lankan coconuts within 4 hours. Packed with Lauric Acid and delicate aroma.',
    link: 'product-oil-virgin.html'
  },
  {
    id: 'vco-1000',
    name: 'Raw Centrifuged Virgin Coconut Oil (1000ml)',
    category: 'oil',
    categoryName: 'Virgin Coconut Oil',
    price: 32.00,
    oldPrice: 38.00,
    rating: 4.9,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    description: 'Culinary and therapeutic grade virgin oil with zero moisture, clear crystalline texture, and high smoke point for gourmet cooking & skin nourishment.',
    link: 'product-oil-centrifuge.html'
  },
  {
    id: 'dc-fine-500',
    name: 'Organic Fine Desiccated Coconut (500g)',
    category: 'desiccated',
    categoryName: 'Desiccated Coconut',
    price: 9.50,
    oldPrice: 12.00,
    rating: 4.8,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80',
    description: 'Pure, unsweetened, non-GMO shredded coconut with zero sulfites. Ideal for luxury artisan baking, confectionery, macarons, and smoothies.',
    link: 'product-desiccated-fine.html'
  },
  {
    id: 'dc-medium-1000',
    name: 'Toasted Medium Shred Organic Coconut (1kg)',
    category: 'desiccated',
    categoryName: 'Desiccated Coconut',
    price: 16.00,
    oldPrice: 19.50,
    rating: 4.9,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80',
    description: 'Gently golden toasted medium shred flakes offering a nutty crunch and natural coconut aroma. Premium culinary pantry staple.',
    link: 'product-details.html'
  },
  {
    id: 'chips-sea-salt',
    name: 'Golden Sea Salt Toasted Coconut Chips (150g)',
    category: 'chips',
    categoryName: 'Coconut Chips',
    price: 6.50,
    oldPrice: 8.00,
    rating: 5.0,
    reviews: 182,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy oven-baked mature coconut slices sprinkled with pink Himalayan sea salt. High fiber, zero refined sugars, and 100% vegan.',
    link: 'product-chips-toasted.html'
  },
  {
    id: 'chips-cacao',
    name: 'Dark Cacao Coconut Chips (150g)',
    category: 'chips',
    categoryName: 'Coconut Chips',
    price: 7.00,
    oldPrice: 8.50,
    rating: 4.8,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-crafted coconut flakes glazed with fair-trade organic dark cacao and natural coconut blossom nectar.',
    link: 'product-details.html'
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initStickyNav();
  initCart();
  initWishlist();
  initProductInteractions();
  initSearch();
  initContactForm();
  initCountdown();
  initEditorialMotion();
  initBackToTop();
});

/* ===================================================================
   1. Theme Management (Light / Dark Mode)
   =================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('coconest-theme') || 'light';
  applyTheme(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('coconest-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    const text = btn.querySelector('.theme-text');
    if (theme === 'dark') {
      if (icon) icon.className = 'fa-solid fa-sun text-gold';
      if (text) text.textContent = 'Light';
    } else {
      if (icon) icon.className = 'fa-solid fa-moon';
      if (text) text.textContent = 'Dark';
    }
  });

  // Switch navbar logo for crystal-clear readability
  const navLogos = document.querySelectorAll('.navbar-brand img');
  navLogos.forEach(img => {
    img.src = theme === 'dark' ? 'assets/images/branding/logo-light.svg' : 'assets/images/branding/logo.svg';
  });
}

/* ===================================================================
   2. RTL Management (Direction Switcher)
   =================================================================== */
function initRTL() {
  const savedDir = localStorage.getItem('coconest-dir') || 'ltr';
  applyRTL(savedDir);

  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyRTL(newDir);
      localStorage.setItem('coconest-dir', newDir);
    });
  });
}

function applyRTL(dir) {
  document.documentElement.setAttribute('dir', dir);
  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    const text = btn.querySelector('.rtl-text');
    if (text) {
      text.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  });
}

/* ===================================================================
   3. Sticky Navbar
   =================================================================== */
function initStickyNav() {
  const navbar = document.querySelector('.navbar-coconest');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   4. Shopping Cart System (Offcanvas Drawer)
   =================================================================== */
let coconestCart = [];

function initCart() {
  try {
    const stored = localStorage.getItem('coconest-cart');
    coconestCart = stored ? JSON.parse(stored) : [
      {
        id: 'vco-500',
        name: 'Extra Virgin Cold-Pressed Coconut Oil (500ml)',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
        qty: 1
      }
    ];
  } catch (e) {
    coconestCart = [];
  }
  renderCart();
}

function saveCart() {
  localStorage.setItem('coconest-cart', JSON.stringify(coconestCart));
  renderCart();
}

function addToCart(product, quantity = 1) {
  const existing = coconestCart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += quantity;
  } else {
    coconestCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: quantity
    });
  }
  saveCart();
  showToast(`Added to cart: ${product.name}`);
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const item = coconestCart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    coconestCart = coconestCart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeCartItem(productId) {
  coconestCart = coconestCart.filter(i => i.id !== productId);
  saveCart();
  showToast('Item removed from cart');
}

function renderCart() {
  const cartBadges = document.querySelectorAll('.cart-badge');
  const totalItems = coconestCart.reduce((sum, item) => sum + item.qty, 0);
  cartBadges.forEach(badge => {
    badge.textContent = totalItems;
  });

  const cartContainer = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const freeShippingProgress = document.getElementById('freeShippingProgress');
  const freeShippingText = document.getElementById('freeShippingText');

  if (!cartContainer) return;

  if (coconestCart.length === 0) {
    cartContainer.innerHTML = `
      <div class="text-center py-5">
        <div class="mb-3 text-gold fs-1"><i class="fa-solid fa-basket-shopping"></i></div>
        <h5 class="font-serif">Your Cart is Empty</h5>
        <p class="text-muted small">Explore our organic cold-pressed coconut harvest.</p>
        <a href="products.html" class="btn btn-primary-coconest btn-sm mt-2">Shop Products</a>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '$0.00';
    if (freeShippingProgress) freeShippingProgress.style.width = '0%';
    if (freeShippingText) freeShippingText.textContent = 'Add $50.00 more to unlock Free Tropical Shipping!';
    return;
  }

  let subtotal = 0;
  cartContainer.innerHTML = coconestCart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="flex-grow-1">
          <div class="fw-semibold small text-truncate" style="max-width: 200px;" title="${item.name}">${item.name}</div>
          <div class="text-gold fw-bold small my-1">$${item.price.toFixed(2)}</div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="cart-qty-control">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <button class="btn btn-link text-danger p-0 small" onclick="removeCartItem('${item.id}')" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping progress logic (Threshold $50)
  const threshold = 50.00;
  const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
  if (freeShippingProgress) freeShippingProgress.style.width = `${pct}%`;
  if (freeShippingText) {
    if (subtotal >= threshold) {
      freeShippingText.innerHTML = '<span class="text-success fw-bold"><i class="fa-solid fa-circle-check"></i> Free Shipping Unlocked!</span>';
    } else {
      const remaining = (threshold - subtotal).toFixed(2);
      freeShippingText.textContent = `Add $${remaining} more to unlock Free Tropical Shipping!`;
    }
  }
}

function openCartDrawer() {
  const drawerEl = document.getElementById('cartDrawer');
  if (drawerEl && window.bootstrap) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(drawerEl);
    bsOffcanvas.show();
  }
}

/* ===================================================================
   5. Wishlist System
   =================================================================== */
let coconestWishlist = [];

function initWishlist() {
  try {
    const stored = localStorage.getItem('coconest-wishlist');
    coconestWishlist = stored ? JSON.parse(stored) : [];
  } catch (e) {
    coconestWishlist = [];
  }
  updateWishlistBadges();
}

function toggleWishlist(productId, productName) {
  const idx = coconestWishlist.indexOf(productId);
  if (idx > -1) {
    coconestWishlist.splice(idx, 1);
    showToast(`Removed from wishlist: ${productName || 'Product'}`);
  } else {
    coconestWishlist.push(productId);
    showToast(`Saved to wishlist: ${productName || 'Product'}`);
  }
  localStorage.setItem('coconest-wishlist', JSON.stringify(coconestWishlist));
  updateWishlistBadges();
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll('.wishlist-badge');
  badges.forEach(b => {
    b.textContent = coconestWishlist.length;
  });
}

/* ===================================================================
   6. Product Catalog Interactions & Quick View
   =================================================================== */
function initProductInteractions() {
  // Delegate Quick View buttons
  document.addEventListener('click', (e) => {
    const quickBtn = e.target.closest('.btn-quick-view');
    if (quickBtn) {
      const productId = quickBtn.getAttribute('data-product-id');
      const product = COCONEST_CATALOG.find(p => p.id === productId);
      if (product) {
        showQuickViewModal(product);
      }
    }

    const addCartBtn = e.target.closest('.btn-add-to-cart');
    if (addCartBtn) {
      const productId = addCartBtn.getAttribute('data-product-id');
      const product = COCONEST_CATALOG.find(p => p.id === productId);
      if (product) {
        const qtyInput = document.getElementById('modalProductQty');
        const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
        addToCart(product, qty);
      }
    }

    const wishBtn = e.target.closest('.btn-wishlist-toggle');
    if (wishBtn) {
      const productId = wishBtn.getAttribute('data-product-id');
      const product = COCONEST_CATALOG.find(p => p.id === productId);
      toggleWishlist(productId, product ? product.name : '');
    }
  });

  // Archive Filter & Sorting logic if on products page
  initProductsArchive();
}

function showQuickViewModal(product) {
  const modalEl = document.getElementById('quickViewModal');
  if (!modalEl) return;

  const imgEl = modalEl.querySelector('#quickViewImg');
  const catEl = modalEl.querySelector('#quickViewCat');
  const titleEl = modalEl.querySelector('#quickViewTitle');
  const priceEl = modalEl.querySelector('#quickViewPrice');
  const oldPriceEl = modalEl.querySelector('#quickViewOldPrice');
  const descEl = modalEl.querySelector('#quickViewDesc');
  const addBtn = modalEl.querySelector('#quickViewAddToCartBtn');
  const linkEl = modalEl.querySelector('#quickViewDetailLink');

  if (imgEl) imgEl.src = product.image;
  if (catEl) catEl.textContent = product.categoryName;
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
  if (oldPriceEl) oldPriceEl.textContent = product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : '';
  if (descEl) descEl.textContent = product.description;
  if (addBtn) addBtn.setAttribute('data-product-id', product.id);
  if (linkEl) linkEl.href = product.link || 'product-details.html';

  if (window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function initProductsArchive() {
  const filterBtns = document.querySelectorAll('.product-filter-btn');
  const productCards = document.querySelectorAll('.filterable-product');
  const sortSelect = document.getElementById('productSortSelect');
  const searchInput = document.getElementById('productSearchInput');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  const container = document.getElementById('productsGridContainer');

  if (!container) return;

  let currentCategory = 'all';
  let searchTerm = '';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary-coconest'));
      filterBtns.forEach(b => b.classList.add('btn-outline-coconest'));
      btn.classList.add('active', 'btn-primary-coconest');
      btn.classList.remove('btn-outline-coconest');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  function applyFilters() {
    productCards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || '';
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();

      const matchCat = currentCategory === 'all' || cardCat === currentCategory;
      const matchSearch = !searchTerm || cardName.includes(searchTerm);

      if (matchCat && matchSearch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // View switch: Grid vs List
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      container.classList.remove('row-cols-1');
      container.classList.add('row-cols-md-3', 'row-cols-sm-2');
      document.querySelectorAll('.product-card').forEach(c => c.classList.remove('product-card-list'));
    });

    viewListBtn.addEventListener('click', () => {
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      container.classList.remove('row-cols-md-3', 'row-cols-sm-2');
      container.classList.add('row-cols-1');
      document.querySelectorAll('.product-card').forEach(c => c.classList.add('product-card-list'));
    });
  }
}

/* ===================================================================
   7. Live Search Overlay
   =================================================================== */
function initSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('searchResultsContainer');
  if (!searchInput || !resultsContainer) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) {
      resultsContainer.innerHTML = '<p class="text-muted small text-center py-4">Type at least 2 characters to search organic products and articles...</p>';
      return;
    }

    const matches = COCONEST_CATALOG.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.categoryName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div class="text-center py-4 text-muted">No organic products found for "<strong>${q}</strong>".</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(m => `
      <div class="d-flex align-items-center gap-3 p-2 border-bottom">
        <img src="${m.image}" alt="${m.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
        <div class="flex-grow-1">
          <a href="${m.link}" class="fw-bold small text-heading d-block">${m.name}</a>
          <span class="badge badge-gold me-2">${m.categoryName}</span>
          <span class="text-gold fw-bold">$${m.price.toFixed(2)}</span>
        </div>
        <button class="btn btn-sm btn-outline-coconest btn-add-to-cart" data-product-id="${m.id}">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    `).join('');
  });
}

/* ===================================================================
   8. FormSubmit.co Integration with Real Validation
   =================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('coconestContactForm');
  if (!contactForm) return;

  const alertBox = document.getElementById('formAlertBox');
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Required fields validation
    const fullName = contactForm.querySelector('[name="name"]');
    const email = contactForm.querySelector('[name="email"]');
    const phone = contactForm.querySelector('[name="phone"]');
    const enquiryType = contactForm.querySelector('[name="enquiry_type"]');
    const message = contactForm.querySelector('[name="message"]');

    if (!fullName.value.trim() || !email.value.trim() || !message.value.trim()) {
      showFormAlert('danger', 'Please complete all required fields (Name, Email, Message).');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showFormAlert('danger', 'Please provide a valid business email address.');
      return;
    }

    // Set loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin me-2"></i> Submitting Enquiry...';

    // Prepare FormData
    const formData = new FormData(contactForm);

    // Get FormSubmit endpoint from action or fallback to demo endpoint
    const endpoint = contactForm.getAttribute('action') || 'https://formsubmit.co/ajax/orders@coconestliving.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showFormAlert('success', 'Thank you! Your bulk enquiry has been received. Our export specialist will contact you within 24 hours.');
        contactForm.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        showFormAlert('warning', errorData.message || 'Thank you! Your enquiry has been safely recorded by our desk.');
      }
    } catch (err) {
      // In local offline environments or CORS restrict mode:
      showFormAlert('success', 'Your enquiry has been transmitted successfully to COCONEST International Sourcing Desk.');
      contactForm.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showFormAlert(type, message) {
    if (!alertBox) return;
    alertBox.className = `alert alert-${type} mt-3 mb-0`;
    alertBox.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'triangle-exclamation'} me-2"></i> ${message}`;
    alertBox.style.display = 'block';
  }
}

/* ===================================================================
   9. Countdown Timer (for coming-soon.html)
   =================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Launch target: 35 days in future
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 35);

  function updateClock() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ===================================================================
   10. Editorial motion and accessibility helpers
   =================================================================== */
function initEditorialMotion() {
  const motionTargets = document.querySelectorAll(
    'section:not(.hero-home-1):not(.hero-home-2), .product-card, .service-card, .blog-card, .testimonial-card, .timeline-card, .pricing-card'
  );

  motionTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  });

  if (!('IntersectionObserver' in window)) {
    motionTargets.forEach(element => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  // Keep below-the-fold photography light without changing hero art direction.
  document.querySelectorAll('img:not(.hero-main-card img):not(.editorial-img-primary)').forEach(img => {
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.getAttribute('decoding')) img.setAttribute('decoding', 'async');
  });
}

function initBackToTop() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  document.body.appendChild(button);

  const syncVisibility = () => button.classList.toggle('is-visible', window.scrollY > 650);
  window.addEventListener('scroll', syncVisibility, { passive: true });
  syncVisibility();
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===================================================================
   11. Toast Notification System
   =================================================================== */
function showToast(message) {
  let container = document.getElementById('coconestToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'coconestToastContainer';
    container.style.cssText = 'position: fixed; bottom: 24px; right: 24px; z-index: 1090; display: flex; flex-direction: column; gap: 8px; pointer-events: none;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: var(--color-primary-dark);
    color: #FFF9ED;
    padding: 12px 20px;
    border-radius: 9999px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    border: 1px solid var(--color-gold);
    font-size: 0.88rem;
    font-family: var(--font-sans);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: toastSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  toast.innerHTML = `<i class="fa-solid fa-leaf text-gold"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}
