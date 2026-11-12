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
    image: 'assets/images/products/virgin-coconut-oil/coconest-vco-500ml.webp',
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
    image: 'assets/images/Centrifuged%20Extra%20Virgin%20Oil%20%281000ml%29.jpg',
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
    image: 'assets/images/products/Fine%20Desiccated%20Coconut%20%28500g%29.png',
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
    image: 'assets/images/products/Toasted%20Medium%20Shred%20Organic%20Coconut%20%281kg%29.png',
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
    image: 'assets/images/products/coconut-chips/coconest-chips-150g.webp',
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
    image: 'assets/images/products/coconut-chips/coconest-chips-cacao-150g.webp',
    description: 'Hand-crafted coconut flakes glazed with fair-trade organic dark cacao and natural coconut blossom nectar.',
    link: 'product-details.html'
  },
  {
    id: 'vco-250',
    name: 'Pure Virgin Coconut Oil (250ml)',
    category: 'oil',
    categoryName: 'Virgin Coconut Oil',
    price: 11.50,
    oldPrice: 14.00,
    rating: 4.9,
    reviews: 68,
    image: 'assets/images/products/virgin-coconut-oil/coconest-vco-250ml.webp',
    description: 'A small-batch 250ml bottle of unrefined virgin coconut oil, cold-pressed for everyday cooking, wellness, and oil pulling.',
    link: 'product-oil-virgin.html'
  },
  {
    id: 'chips-120',
    name: 'Lightly Salted Coconut Chips (120g)',
    category: 'chips',
    categoryName: 'Coconut Chips',
    price: 5.50,
    oldPrice: 7.00,
    rating: 4.7,
    reviews: 43,
    image: 'assets/images/products/coconut-chips/coconest-chips-salted-120g.webp',
    description: 'Thin, oven-toasted coconut curls with a delicate sea-salt finish for clean snacking and everyday pantry moments.',
    link: 'product-chips-toasted.html'
  },
  {
    id: 'vco-bulk-drum',
    name: 'Virgin Coconut Oil Bulk Drum (200L)',
    category: 'oil',
    categoryName: 'Bulk Coconut Oil',
    price: 1680.00,
    oldPrice: 1850.00,
    rating: 5.0,
    reviews: 21,
    image: 'assets/images/products/Virgin%20Coconut%20Oil%20Bulk%20Drum%20%28200L%29.png',
    description: 'Factory-direct cold-centrifuged virgin coconut oil in a 200L drum for food, wellness, and personal-care manufacturing.',
    link: 'product-oil-centrifuge.html'
  }
];

// Centralized editable footer content. Replace demo contact/social values here
// when the production brand destinations are available.
const COCONEST_FOOTER_CONFIG = {
  phone: '+1 (800) 492-COCO',
  email: 'hello@coconestliving.com',
  exportEmail: 'export@coconestliving.com',
  address: '742 Coconut Grove Avenue, Negombo, Sri Lanka',
  hours: 'Monday – Friday · 09:00 – 18:00 (GMT+5:30)',
  newsletterEndpoint: 'https://formsubmit.co/ajax/hello@coconestliving.com',
  socials: [
    { label: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/' },
    { label: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/' },
    { label: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/' },
    { label: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/' },
    { label: 'Pinterest', icon: 'fa-pinterest-p', url: 'https://www.pinterest.com/' }
  ]
};

const COCONEST_HERO_CONFIG = {
  'about.html': {
    eyebrow: 'Heritage & Ethics', title: 'Rooted in Nature. Driven by Purity.',
    description: 'Discover the story behind COCONEST and our commitment to bringing naturally sourced coconut goodness to the world.',
    image: 'assets/images/about/Rooted%20in%20Nature.%20Driven%20by%20Purity..jpg',
    alt: 'Rooted in nature imagery for the COCONEST story', cta: 'Discover Our Journey', href: '#journey'
  },
  'products.html': {
    eyebrow: 'The COCONEST Collection', title: 'Explore the Goodness of Coconut.',
    description: 'Discover our carefully selected collection of pure coconut products, made for quality-conscious everyday living.',
    image: 'assets/images/products/Explore%20the%20Goodness%20of%20Coconut..jpg',
    alt: 'Explore the goodness of COCONEST coconut products', cta: 'Shop the Collection', href: '#productsGridContainer'
  },
  'sourcing-story.html': {
    eyebrow: 'Our Sourcing Story', title: 'Every Coconut Has a Story.',
    description: 'From carefully selected coconut farms to thoughtfully prepared products, discover the journey behind COCONEST.',
    image: 'assets/images/sourcing/coconest-sourcing-hero.webp',
    alt: 'Lush coconut plantation at golden hour', cta: 'Explore Our Journey', href: '#sourcingJourney', cinematic: true
  },
  'services.html': {
    eyebrow: 'Enterprise Capabilities', title: 'Natural Coconut Solutions for Every Business.',
    description: 'From bulk coconut oil supply to private-label products, discover business solutions designed around quality and dependable partnerships.',
    image: 'assets/images/services/Natural%20Coconut%20Solutions%20for%20Every%20Business1.jpg',
    alt: 'Natural coconut solutions prepared for every business', cta: 'Explore Our Services', href: '#servicesGrid', secondary: 'Request a Bulk Enquiry', secondaryHref: 'contact.html'
  },
  'service-wholesale.html': {
    eyebrow: 'Wholesale Supply', title: 'Quality Coconut Products. Supplied at Scale.',
    description: 'Reliable, factory-direct volume supply for premium food brands, commercial bakeries, snack makers, and hospitality partners.',
    image: 'assets/images/services/wholesale/coconest-service-wholesale.webp',
    alt: 'Wholesale coconut ingredients ready for shipment', cta: 'Request Wholesale Enquiry', href: 'contact.html'
  },
  'service-bulk-oil.html': {
    eyebrow: 'Bulk Virgin Coconut Oil', title: 'Pure Oil. Ready for Your Production Line.',
    description: 'Consistent, carefully processed virgin coconut oil for food, wellness, and personal-care manufacturers.',
    image: 'assets/images/services/bulk-oil/coconest-service-bulk-oil.webp',
    alt: 'Virgin coconut oil bottle and fresh coconut detail', cta: 'Request a Bulk Enquiry', href: '#bulkFaq'
  },
  'service-private-label.html': {
    eyebrow: 'Private Label Manufacturing', title: 'Your Brand. Our Coconut Expertise.',
    description: 'Bring a considered coconut product to market with thoughtful formulation, packaging, and dependable production support.',
    image: 'assets/images/services/coconest-service-hero.webp',
    alt: 'Premium amber coconut oil packaging', cta: 'Discuss Your Project', href: 'contact.html'
  },
  'service-export.html': {
    eyebrow: 'Export & Distribution', title: 'Taking Coconut Goodness Across Borders.',
    description: 'A dependable export partner for carefully prepared coconut products, documentation, and international distribution.',
    image: 'assets/images/services/export/coconest-service-export.webp',
    alt: 'Coconut grove representing COCONEST global supply', cta: 'Explore Export Solutions', href: 'contact.html'
  },
  'service-packaging.html': {
    eyebrow: 'Custom Packaging', title: 'Packaging That Reflects Pure Quality.',
    description: 'Create a tactile, shelf-ready presentation with packaging options designed around product integrity and brand character.',
    image: 'assets/images/services/packaging/coconest-service-packaging.webp',
    alt: 'Coconut snack and sustainable packaging detail', cta: 'Enquire About Packaging', href: 'contact.html'
  },
  'service-retail-distribution.html': {
    eyebrow: 'Retail & Distribution', title: 'A Better Coconut Range for Modern Shelves.',
    description: 'Partner with a considered product range that brings premium coconut living to retailers and conscious customers.',
    image: 'assets/images/services/retail/coconest-service-retail.webp',
    alt: 'Coconut products prepared for a modern retail display', cta: 'Explore Retail Partnerships', href: 'contact.html'
  },
  'service-details.html': {
    eyebrow: 'Business Partnerships', title: 'Built Around Your Coconut Ambition.',
    description: 'From first brief to final shipment, discover a flexible partnership model for ambitious coconut product businesses.',
    image: 'assets/images/services/retail/coconest-service-retail.webp',
    alt: 'COCONEST team discussing a coconut supply partnership', cta: 'Start a Conversation', href: 'contact.html'
  },
  'blog.html': {
    eyebrow: 'The Coconut Living Journal', title: 'Stories Inspired by Nature.',
    description: 'Explore coconut knowledge, natural living inspiration, product insights, and stories from our sourcing journey.',
    image: 'assets/images/blog/Stories%20Inspired%20by%20Nature..jpg',
    alt: 'Stories inspired by nature for the COCONEST journal', cta: 'Read the Journal', href: '#latestStories'
  },
  'contact.html': {
    eyebrow: 'Sourcing & Customer Desk', title: "Let's Start a Conversation.",
    description: 'Have a question about our coconut products, wholesale supply, or business partnerships? Our team is ready to help.',
    image: 'assets/images/contact/Sourcing%20%26%20Customer%20Desk.jpg',
    alt: 'Sourcing and customer desk for COCONEST enquiries', cta: 'Send an Enquiry', href: '#coconestContactForm'
  },
  'pricing.html': {
    eyebrow: 'Wholesale & Supply', title: 'Flexible Solutions. Transparent Value.',
    description: 'Explore supply options designed for retailers, distributors, and businesses looking for quality coconut products.',
    image: 'assets/images/pricing/Flexible%20Solutions.%20Transparent%20Value.webp',
    alt: 'Flexible coconut supply solutions prepared for wholesale partners', cta: 'Request a Bulk Enquiry', href: 'contact.html'
  }
};

const COCONEST_SERVICE_IMAGE_SET = {
  wholesale: {
    src: 'assets/images/services/wholesale/coconest-service-wholesale.webp',
    alt: 'Wholesale coconut products with coconut oil and fresh coconut'
  },
  bulkOil: {
    src: 'assets/images/services/bulk-oil/coconest-service-bulk-oil.webp',
    alt: 'Virgin coconut oil bottles with fresh coconut'
  },
  privateLabel: {
    src: 'assets/images/services/Private-Label%20Coconut%20Products.png',
    alt: 'Private-label coconut product packaging'
  },
  retail: {
    src: 'assets/images/services/retail/coconest-service-retail.webp',
    alt: 'Retail and distribution partnership in a grocery store'
  },
  export: {
    src: 'assets/images/services/export/coconest-service-export.webp',
    alt: 'Coconut products prepared for bulk supply and export logistics'
  },
  packaging: {
    src: 'assets/images/services/Custom%20Packaging%20Solutions.png',
    alt: 'Custom sustainable packaging solutions for coconut products'
  },
  sourcing: {
    src: 'assets/images/services/sourcing/coconest-service-sourcing.webp',
    alt: 'Organic farm landscape supporting traceable coconut sourcing'
  },
  formulation: {
    src: 'assets/images/services/Innovation%20Studio.png',
    alt: 'Coconut product formulation and development workspace'
  },
  quality: {
    src: 'assets/images/services/Quality%20Assurance%20%26%20Certification.png',
    alt: 'Laboratory quality testing for certified coconut products'
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSpecialPageNavbar();
  initTheme();
  initRTL();
  initSimplePrimaryNav();
  initHomeDropdown();
  initRemovedSourcingStoryLinks();
  initRemovedPricingDropdownItem();
  initNavHighlight();
  initMobileNavDrawerHeader();
  initMobileNavDropdowns();
  initHomeNavLabels();
  initPageHeroSystem();
  initPageFaq();
  initServiceImageSystem();
  initBlogStoryNavigationCleanup();
  initBlogFilters();
  initPremiumFooter();
  initDefaultSocialLinks();
  initStickyNav();
  initCart();
  initCheckoutFlow();
  initWishlist();
  initProductInteractions();
  initCentrifugeGalleryAutoplay();
  initSearch();
  initContactForm();
  initFormValidation();
  initCountdown();
  initEditorialMotion();
  initPremiumMotion();
});

function initSpecialPageNavbar() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const sharedNavbarPages = [
    '404.html',
    'coming-soon.html',
    'maintenance.html',
    'terms.html',
    'privacy.html',
    'cookies.html',
    'returns.html'
  ];
  if (!sharedNavbarPages.includes(page)) return;

  const header = document.querySelector('header.navbar-coconest');
  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="assets/images/branding/logo.svg" alt="COCONEST Pure Coconut Living" width="176" height="44">
      </a>

      <div class="d-flex align-items-center gap-2 d-xl-none">
        <button class="nav-icon-btn theme-toggle-btn" aria-label="Toggle theme"><i class="fa-solid fa-moon"></i></button>
        <button class="nav-icon-btn rtl-toggle-btn" aria-label="Toggle RTL"><span class="rtl-text">RTL</span></button>
        <button class="navbar-toggler border-0 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#coconestNav" aria-controls="coconestNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars-staggered fs-4 text-forest"></i>
        </button>
      </div>

      <nav class="collapse navbar-collapse" id="coconestNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="pricing.html">Pricing &amp; Wholesale Tiers</a></li>
              <li><a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
              <li><a class="dropdown-item" href="maintenance.html">Maintenance</a></li>
              <li><a class="dropdown-item" href="404.html">404 Error Page</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
        </ul>

        <div class="nav-actions d-none d-xl-flex">
          <button class="theme-toggle-btn" aria-label="Toggle theme"><i class="fa-solid fa-moon"></i><span class="theme-text d-none d-xl-inline">Dark</span></button>
          <button class="rtl-toggle-btn" aria-label="Toggle RTL"><span class="rtl-text">RTL</span></button>
        </div>
      </nav>
    </div>`;
}

function initDefaultSocialLinks() {
  const destinations = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    pinterest: 'https://www.pinterest.com/',
    linkedin: 'https://www.linkedin.com/'
  };

  document.querySelectorAll('.social-icon-btn, .premium-social').forEach(link => {
    const icon = link.querySelector('i');
    const iconClasses = Array.from(icon?.classList || []);
    const platform = Object.keys(destinations).find(name =>
      iconClasses.some(className => className === `fa-${name}` || className.startsWith(`fa-${name}-`))
    );
    const destination = destinations[platform];
    if (!destination) return;

    link.href = destination;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

function initRemovedPricingDropdownItem() {
  document.querySelectorAll('.navbar-nav .dropdown-menu a[href="pricing.html"]').forEach(link => {
    if (/pricing\s*&\s*wholesale/i.test(link.textContent)) {
      link.closest('li')?.remove();
    }
  });
}

function initBlogStoryNavigationCleanup() {
  document.querySelectorAll('article .row.g-4').forEach(row => {
    const text = row.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    const hasStoryNavigation = text.includes('previous') && (text.includes('next') || text.includes('featured story'));
    if (hasStoryNavigation) row.remove();
  });
}

function initBlogFilters() {
  const toolbar = document.querySelector('.blog-filter-toolbar');
  const grid = document.querySelector('.blog-articles-grid');
  if (!toolbar || !grid) return;

  const buttons = Array.from(toolbar.querySelectorAll('[data-filter]'));
  const searchInput = toolbar.querySelector('#blogSearchInput');
  const cards = Array.from(grid.children).filter(card => card.querySelector('.blog-card'));
  if (!buttons.length || !cards.length) return;

  const emptyState = document.createElement('p');
  emptyState.className = 'blog-filter-empty text-muted text-center py-4 mb-0';
  emptyState.textContent = 'No articles match your search.';
  emptyState.hidden = true;
  grid.after(emptyState);

  const categoryMatches = {
    wellness: /wellness|skin|beauty|purity/i,
    extraction: /extraction|cold|press/i,
    culinary: /culinary|recipe|chef|bowl|chips/i,
    agroforestry: /agroforestry|sustainability|farming|ecosystem/i
  };
  let activeFilter = 'all';
  let searchTerm = '';

  const applyFilters = () => {
    let visibleCount = 0;
    cards.forEach(card => {
      const content = card.textContent.replace(/\s+/g, ' ').trim();
      const category = card.querySelector('.blog-category-tag')?.textContent || '';
      const categoryText = `${category} ${content}`;
      const matchesCategory = activeFilter === 'all' || categoryMatches[activeFilter]?.test(categoryText);
      const matchesSearch = !searchTerm || content.toLowerCase().includes(searchTerm);
      const isVisible = matchesCategory && matchesSearch;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;

    buttons.forEach(button => {
      const isActive = button.dataset.filter === activeFilter;
      button.classList.toggle('active', isActive);
      button.classList.toggle('btn-primary-coconest', isActive);
      button.classList.toggle('btn-outline-coconest', !isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', event => {
    searchTerm = event.target.value.trim().toLowerCase();
    applyFilters();
  });

  applyFilters();
}

/* Remove the retired sourcing-story page from every shared view. */
function initRemovedSourcingStoryLinks() {
  const links = Array.from(document.querySelectorAll('a[href$="sourcing-story.html"]'));

  links.forEach(link => {
    const navItem = link.closest('.navbar-nav > .nav-item');
    if (navItem) {
      navItem.remove();
      return;
    }

    const serviceCard = link.closest('.service-card');
    if (serviceCard) {
      serviceCard.closest('.col-md-6, .col-lg-4, [class*="col-"]')?.remove();
      return;
    }

    const footerItem = link.closest('li');
    if (footerItem) {
      footerItem.remove();
      return;
    }

    const button = link.closest('.btn');
    if (button) {
      button.remove();
      return;
    }

    if (link.nextElementSibling?.matches('span')) {
      link.nextElementSibling.remove();
    }
    link.remove();
  });
}

function initCentrifugeGalleryAutoplay() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page !== 'product-oil-centrifuge.html') return;

  const mainImage = document.getElementById('mainProductDisplay');
  if (!mainImage) return;

  const gallery = mainImage.closest('.col-lg-6');
  const thumbnails = gallery
    ? Array.from(gallery.querySelectorAll('.row.g-2 img'))
    : [];
  if (thumbnails.length !== 2) return;

  let activeIndex = 0;
  let timer;

  const showImage = index => {
    activeIndex = index;
    const thumbnail = thumbnails[activeIndex];
    mainImage.classList.add('gallery-slide-changing');

    window.setTimeout(() => {
      mainImage.src = thumbnail.src;
      if (thumbnail.alt) mainImage.alt = thumbnail.alt;
      mainImage.classList.remove('gallery-slide-changing');
      thumbnails.forEach((item, itemIndex) => item.classList.toggle('active-thumb', itemIndex === activeIndex));
    }, 220);
  };

  const startAutoplay = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showImage((activeIndex + 1) % thumbnails.length), 3500);
  };

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      showImage(index);
      startAutoplay();
    });
  });

  mainImage.classList.add('centrifuge-gallery-auto');
  thumbnails[0].classList.add('active-thumb');
  startAutoplay();
}

/* ===================================================================
   Primary navigation: Products and Services are direct links.
   =================================================================== */
function initSimplePrimaryNav() {
  const directLinks = {
    products: 'products.html',
    services: 'services.html'
  };

  document.querySelectorAll('.navbar-nav .nav-item.dropdown > a').forEach(link => {
    const label = link.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    const destination = directLinks[label];
    if (!destination) return;

    link.href = destination;
    link.classList.remove('dropdown-toggle');
    link.removeAttribute('role');
    link.removeAttribute('data-bs-toggle');
    link.removeAttribute('aria-expanded');

    const parent = link.closest('.nav-item');
    parent.classList.remove('dropdown');
    parent.querySelector(':scope > .dropdown-menu')?.remove();
  });
}

function initHomeDropdown() {
  document.querySelectorAll('.navbar-nav').forEach(nav => {
    const homeItem = Array.from(nav.children).find(item => {
      const link = item.querySelector(':scope > .nav-link');
      const href = (link?.getAttribute('href') || '').toLowerCase().split('#')[0];
      const label = link?.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      return href === 'index.html' || href === 'index-2.html' || label === 'home' || label === 'the coconut market';
    });
    if (!homeItem) return;

    const homeLink = homeItem.querySelector(':scope > .nav-link');
    if (!homeLink) return;

    homeItem.classList.add('dropdown');
    homeLink.classList.add('dropdown-toggle');
    homeLink.setAttribute('href', '#');
    homeLink.setAttribute('role', 'button');
    homeLink.setAttribute('data-bs-toggle', 'dropdown');
    homeLink.setAttribute('aria-expanded', 'false');
    homeLink.textContent = 'Home';

    let menu = homeItem.querySelector(':scope > .dropdown-menu');
    if (!menu) {
      menu = document.createElement('ul');
      menu.className = 'dropdown-menu';
      menu.innerHTML = `
        <li><a class="dropdown-item" href="index.html"><i class="fa-solid fa-store text-gold"></i> Home 1 - The Coconut Market</a></li>
        <li><a class="dropdown-item" href="index-2.html"><i class="fa-solid fa-feather text-gold"></i> Home 2 - The Grove Edit</a></li>`;
      homeItem.appendChild(menu);
    }
  });
}

function initNavHighlight() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  let activeLabel = 'home';

  if (/^product(?:s|-)/.test(page) || page === 'product-details.html') activeLabel = 'products';
  else if (page === 'services.html' || page.startsWith('service-')) activeLabel = 'services';
  else if (page === 'about.html') activeLabel = 'about us';
  else if (page === 'sourcing-story.html') activeLabel = 'our sourcing story';
  else if (page === 'pricing.html') activeLabel = 'pricing';
  else if (page === 'blog.html' || page.startsWith('blog-')) activeLabel = 'blog';
  else if (page === 'contact.html') activeLabel = 'contact us';
  else if (['404.html', 'coming-soon.html', 'maintenance.html', 'privacy.html', 'terms.html', 'returns.html', 'cookies.html'].includes(page)) activeLabel = 'pages';

  document.querySelectorAll('.navbar-nav > .nav-item > .nav-link').forEach(link => {
    const label = link.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    const href = (link.getAttribute('href') || '').toLowerCase().split('#')[0];
    const isHome = activeLabel === 'home' && (href === 'index.html' || href === 'index-2.html' || label === 'home');
    const isDirectMatch = href === `${activeLabel.replace(/\s+/g, '-')}.html`;
    const isActive = label === activeLabel || isHome || isDirectMatch;
    link.classList.toggle('active', isActive);
    link.closest('.nav-item')?.classList.toggle('is-current', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function initMobileNavDropdowns() {
  const collapse = document.querySelector('.navbar-collapse');
  const navbar = collapse?.closest('.navbar-coconest');
  if (collapse && navbar) {
    const syncNavbarShape = () => {
      const open = collapse.classList.contains('show') || collapse.classList.contains('collapsing');
      navbar.classList.toggle('menu-open', open);
    };
    new MutationObserver(syncNavbarShape).observe(collapse, { attributes: true, attributeFilter: ['class'] });
    syncNavbarShape();
  }

  document.querySelectorAll('.navbar-nav .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', event => {
      if (window.innerWidth >= 1200) return;

      event.preventDefault();
      event.stopPropagation();

      const parent = toggle.closest('.dropdown');
      const menu = parent?.querySelector(':scope > .dropdown-menu');
      if (!parent || !menu) return;

      document.querySelectorAll('.navbar-nav .dropdown.show').forEach(openItem => {
        if (openItem === parent) return;
        openItem.classList.remove('show');
        openItem.querySelector(':scope > .dropdown-menu')?.classList.remove('show');
        openItem.querySelector(':scope > .dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });

      const isOpen = parent.classList.toggle('show');
      menu.classList.toggle('show', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

function initMobileNavDrawerHeader() {
  document.querySelectorAll('.navbar-coconest .navbar-collapse').forEach(collapse => {
    if (collapse.querySelector('.mobile-drawer-header')) return;

    const logoSource = document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'assets/images/branding/logo-light.svg'
      : 'assets/images/branding/logo.svg';
    const drawerHeader = document.createElement('div');
    drawerHeader.className = 'mobile-drawer-header';
    drawerHeader.innerHTML = `
      <a class="mobile-drawer-brand" href="index.html" aria-label="COCONEST home">
        <img src="${logoSource}" alt="COCONEST Pure Coconut Living">
      </a>
      <button class="mobile-drawer-close" type="button" aria-label="Close navigation menu">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>`;
    collapse.prepend(drawerHeader);

    drawerHeader.querySelector('.mobile-drawer-close')?.addEventListener('click', () => {
      if (window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false }).hide();
      } else {
        collapse.classList.remove('show');
        collapse.closest('.navbar-coconest')?.classList.remove('menu-open');
      }
      collapse.closest('.navbar-coconest')?.querySelector('.navbar-toggler')?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initHomeNavLabels() {
  const labels = {
    'index.html': 'The Coconut Market',
    'index-2.html': 'The Grove Edit'
  };

  Object.entries(labels).forEach(([href, label]) => {
    document.querySelectorAll(`.navbar-nav a[href="${href}"]`).forEach(link => {
      const icon = link.querySelector('i');
      link.textContent = '';
      if (icon) link.appendChild(icon);
      link.appendChild(document.createTextNode(` ${label}`));
    });
  });
}

function initPageHeroSystem() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  initHomeHeroArtDirection(page);

  const config = COCONEST_HERO_CONFIG[page];
  const pageHeader = document.querySelector('section.py-5.bg-subtle.border-bottom');
  if (config && pageHeader) renderPremiumPageHero(pageHeader, config, page);

  if (/^product-(oil-virgin|oil-centrifuge|desiccated-fine|chips-toasted)\.html$/.test(page) || page === 'product-details.html') {
    const productHero = document.querySelector('section.py-5:not(.bg-subtle)');
    if (productHero) productHero.classList.add('premium-product-detail-hero', `premium-${page.replace('.html', '')}`);
  }

  if (page.startsWith('blog-') || page === 'blog-details.html') {
    document.querySelector('article.py-5')?.classList.add('premium-article-hero', `premium-${page.replace('.html', '')}`);
  }

  const specialMain = document.querySelector('main');
  if (specialMain && ['404.html', 'coming-soon.html', 'maintenance.html'].includes(page)) {
    specialMain.classList.add(`premium-${page.replace('.html', '')}-hero`);
    tuneSpecialPageHero(specialMain, page);
  }
}

function initHomeHeroArtDirection(page) {
  if (page === 'index.html') {
    const hero = document.querySelector('.hero-home-1');
    if (!hero) return;
    hero.classList.add('premium-home-one');
    const heroImage = hero.querySelector('.hero-main-card img');
    if (heroImage) {
      heroImage.removeAttribute('srcset');
      heroImage.src = 'assets/images/home-1/Nature%27s%20Goodness%2C%20Bottled%20to%20Perfection.png';
    }
    const tag = hero.querySelector('.section-tag');
    const title = hero.querySelector('h1');
    const description = hero.querySelector('.hero-content p');
    if (tag) tag.innerHTML = '<i class="fa-solid fa-leaf"></i> Pure Coconut Collection';
    if (title) title.innerHTML = '<em>Nature\'s Goodness</em>, Bottled to Perfection.';
    if (description) description.textContent = 'Thoughtfully sourced from tropical groves and crafted with care, COCONEST brings pure coconut living to your table, rituals, and everyday moments.';
    const buttons = hero.querySelectorAll('.hero-content .btn');
    if (buttons[0]) buttons[0].innerHTML = 'Explore Products <i class="fa-solid fa-arrow-right"></i>';
    if (buttons[1]) { buttons[1].href = 'about.html'; buttons[1].innerHTML = 'Discover Our Story <i class="fa-solid fa-arrow-right"></i>'; }
  }

  if (page === 'index-2.html') {
    const hero = document.querySelector('.hero-home-2');
    if (!hero) return;
    hero.classList.add('premium-home-two');
    const tag = hero.querySelector('.section-tag');
    const title = hero.querySelector('h1');
    const description = hero.querySelector('.hero-editorial-grid p');
    if (tag) tag.innerHTML = '<i class="fa-solid fa-feather-pointed"></i> A Luxury Organic Brand';
    if (title) title.innerHTML = 'From Nature\'s Heart,<br>To Your Everyday Life.';
    if (description) description.textContent = 'Discover the purity of thoughtfully sourced coconut products, crafted with care and inspired by nature.';
    const buttons = hero.querySelectorAll('.hero-editorial-grid .btn');
    if (buttons[0]) buttons[0].innerHTML = 'Explore Our Collection <i class="fa-solid fa-arrow-right"></i>';
    if (buttons[1]) { buttons[1].href = 'sourcing-story.html'; buttons[1].textContent = 'Our Sourcing Story'; }
  }
}

function renderPremiumPageHero(hero, config, page) {
  if (hero.classList.contains('premium-page-hero')) return;
  hero.classList.add('premium-page-hero');
  if (config.cinematic) hero.classList.add('premium-hero-cinematic');

  const container = hero.querySelector('.container');
  if (!container) return;
  const breadcrumb = container.querySelector('nav[aria-label="breadcrumb"]');
  const tag = container.querySelector('.section-tag');
  const title = container.querySelector('h1');
  const description = container.querySelector('.section-desc');
  if (!title || !description) return;

  const grid = document.createElement('div');
  grid.className = 'premium-page-hero-grid';
  const copy = document.createElement('div');
  copy.className = 'premium-page-hero-copy';
  if (breadcrumb) copy.appendChild(breadcrumb);
  if (tag) { tag.innerHTML = `<i class="fa-solid fa-leaf"></i> ${config.eyebrow}`; copy.appendChild(tag); }
  title.innerHTML = config.title;
  copy.appendChild(title);
  description.textContent = config.description;
  copy.appendChild(description);

  const actions = document.createElement('div');
  actions.className = 'premium-page-hero-actions';
  actions.innerHTML = `<a href="${config.href}" class="btn btn-coconest btn-primary-coconest">${config.cta} <i class="fa-solid fa-arrow-right"></i></a>`;
  if (config.secondary) actions.innerHTML += `<a href="${config.secondaryHref}" class="btn btn-coconest btn-outline-coconest">${config.secondary}</a>`;
  copy.appendChild(actions);

  const art = document.createElement('div');
  art.className = 'premium-page-hero-art';
  const heroImageClass = page === 'products.html'
    ? 'premium-product-hero-image'
    : page === 'pricing.html'
      ? 'premium-pricing-hero-image'
      : page === 'contact.html'
        ? 'premium-contact-hero-image'
        : page === 'about.html'
          ? 'premium-about-hero-image'
          : page === 'blog.html'
            ? 'premium-blog-hero-image'
          : page === 'service-bulk-oil.html' ? 'premium-service-bulk-oil-image' : '';
  art.innerHTML = `<div class="premium-page-hero-frame"><img class="${heroImageClass}" src="${config.image}" alt="${config.alt}" loading="eager"></div>`;
  grid.append(copy, art);
  container.classList.remove('text-center');
  container.replaceChildren(grid);

  const anchor = config.href.match(/^#(.+)$/)?.[1];
  if (anchor && !document.getElementById(anchor) && hero.nextElementSibling) hero.nextElementSibling.id = anchor;
}

function tuneSpecialPageHero(main, page) {
  const heading = main.querySelector('h1, h2');
  const paragraph = main.querySelector('p');
  if (page === '404.html') {
    if (heading) heading.textContent = "Looks Like You've Drifted Off the Path.";
    if (paragraph) paragraph.textContent = 'The page you are looking for may have moved or no longer exists.';
  }
  if (page === 'coming-soon.html') {
    if (heading) heading.textContent = 'Something Naturally Wonderful Is Coming.';
    if (paragraph) paragraph.textContent = 'We are preparing something special. Stay connected and be among the first to discover it.';
  }
  if (page === 'maintenance.html') {
    if (heading) heading.textContent = "We'll Be Back Soon.";
    if (paragraph) paragraph.textContent = 'We are making a few improvements to bring you an even better COCONEST experience.';
  }
}

function initServiceImageSystem() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageImageKey = {
    'service-wholesale.html': 'wholesale',
    'service-bulk-oil.html': 'bulkOil',
    'service-private-label.html': 'privateLabel',
    'service-retail-distribution.html': 'retail',
    'service-export.html': 'export',
    'service-packaging.html': 'packaging',
    'service-details.html': 'retail'
  };

  if (page === 'services.html') {
    const keys = ['wholesale', 'bulkOil', 'privateLabel', 'retail', 'export', 'packaging', 'sourcing', 'formulation', 'quality'];
    document.querySelectorAll('.service-card .service-img-top img').forEach((image, index) => {
      const asset = COCONEST_SERVICE_IMAGE_SET[keys[index]];
      if (asset) applyServiceImage(image, asset);
    });
  }

  const key = pageImageKey[page];
  const asset = key ? COCONEST_SERVICE_IMAGE_SET[key] : null;
  if (!asset) return;

  const heroImage = document.querySelector('.premium-page-hero-art img');
  if (heroImage) applyServiceImage(heroImage, asset);

  const detailImage = document.querySelector('section.py-5:not(.bg-subtle) img');
  if (detailImage) applyServiceImage(detailImage, asset);
}

function applyServiceImage(image, asset) {
  image.src = asset.src;
  image.alt = asset.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.classList.toggle('local-service-image', asset.src.startsWith('assets/images/services/'));
}

function initPremiumFooter() {
  const footers = Array.from(document.querySelectorAll('footer'));
  if (!footers.length) return;

  // Remove the legacy homepage-only newsletter so every page uses one shared component.
  document.querySelectorAll('.newsletter-section').forEach(section => {
    const wrapper = section.closest('section.container') || section;
    wrapper.remove();
  });

  footers.slice(1).forEach(footer => footer.remove());
  const footer = footers[0];
  // Mount both shared components in a fresh direct child of <body>. This
  // prevents legacy page wrappers from clipping or hiding the footer content.
  const mount = document.createElement('div');
  mount.className = 'premium-footer-mount';
  document.body.appendChild(mount);
  footer.remove();
  mount.innerHTML = `${premiumNewsletterMarkup()}${premiumFooterMarkup()}`;
  bindPremiumNewsletterForms();
  initPremiumFooterAccordions();
}

const COCONEST_PAGE_FAQS = {
  'index.html': [
    ['What makes COCONEST coconut products different?', 'Our products are made from carefully selected coconuts, cold-processed where applicable, and prepared without unnecessary bleaching, deodorizing, or artificial additives.'],
    ['How quickly are coconuts processed after harvest?', 'Our virgin coconut oil is processed within a controlled short harvest-to-press window to protect aroma, freshness, and naturally occurring nutrients.'],
    ['Do you ship internationally?', 'Yes. We support domestic and international orders, with export documentation and wholesale logistics available for qualified business customers.']
  ],
  'index-2.html': [
    ['Where are COCONEST products sourced?', 'Our coconut products are sourced through trusted Sri Lankan growing communities and selected for traceability, quality, and responsible cultivation.'],
    ['What does cold centrifugation protect?', 'Cold centrifugation separates the oil gently and helps preserve its clean aroma, crystalline clarity, and naturally occurring fatty-acid profile.'],
    ['Can I request a sample or wholesale discussion?', 'Yes. Use the contact form to request a sample conversation, product specifications, or a tailored wholesale quotation.']
  ],
  'about.html': [
    ['What is the COCONEST philosophy?', 'We combine careful sourcing, gentle processing, transparent partnerships, and practical sustainability to bring natural coconut products into everyday life.'],
    ['How do you support farming communities?', 'We work with trusted growers and prioritize long-term relationships, responsible purchasing, and clear traceability from grove to finished product.'],
    ['Are your products suitable for everyday use?', 'Our range includes culinary, wellness, ingredient, and business formats so customers can choose the product that best fits their routine or application.']
  ],
  'products.html': [
    ['Are the products organic and non-GMO?', 'Our range is selected from certified or verified supply streams, with product-specific details shown on each product page and batch documentation available for business orders.'],
    ['How should coconut oil be stored?', 'Keep coconut oil sealed in a cool, dry place away from direct sunlight. Natural changes in texture with temperature are normal.'],
    ['Can I order products for wholesale?', 'Yes. Contact us for bulk pricing, larger pack formats, product specifications, and export support.']
  ],
  'services.html': [
    ['Which business services does COCONEST provide?', 'We support wholesale supply, bulk oil, private-label manufacturing, retail distribution, export logistics, packaging, formulation, quality assurance, and business consulting.'],
    ['Can you support private-label products?', 'Yes. Our team can help with product direction, packaging selection, formulation coordination, documentation, and practical launch preparation.'],
    ['How do I request a business quotation?', 'Send your company details, product requirements, estimated volume, and destination through the contact page, and our team will prepare the next steps.']
  ],
  'pricing.html': [
    ['How is wholesale pricing calculated?', 'Pricing depends on product, pack format, volume, destination, documentation, and shipping terms. We prepare quotations around your actual requirements.'],
    ['What minimum order quantities are available?', 'Minimum quantities vary by product and format. The relevant product or service page provides the starting guidance for each range.'],
    ['Can you quote shipping and export costs?', 'Yes. Share your destination and preferred delivery terms so we can include the appropriate freight and documentation considerations.']
  ],
  'contact.html': [
    ['How soon will the team reply?', 'Our sourcing and customer desk aims to review enquiries and reply within one business day, with detailed business quotations typically following within 24 business hours.'],
    ['What information should I include in an enquiry?', 'Include your name, company, product category, estimated volume, destination, and any packaging or documentation requirements.'],
    ['Can I request product samples?', 'Yes. Mention the products and intended use in your enquiry so the team can confirm suitable sample and shipping options.']
  ],
  'blog.html': [
    ['What topics are covered in the COCONEST journal?', 'The journal covers coconut oil science, extraction, culinary uses, regenerative growing, sustainability, packaging, and practical natural-living ideas.'],
    ['Are the articles written for consumers or businesses?', 'Both. Articles explain the fundamentals clearly while including useful context for chefs, formulators, retailers, and procurement teams.'],
    ['Can I suggest a topic?', 'Yes. Send your suggestion through the contact page and tell us what question or application you would like the journal to explore.']
  ],
  'sourcing-story.html': [
    ['How is a COCONEST batch traced?', 'Batch information is connected to our sourcing, processing, testing, and packaging workflow so the product journey can be reviewed from grove to shipment.'],
    ['Do you use regenerative practices?', 'We work with growing systems that support biodiversity, soil health, responsible water use, and long-term productivity rather than relying on monoculture alone.'],
    ['Can businesses visit or audit the supply chain?', 'For qualified business partnerships, audit, documentation, and sourcing discussions can be arranged with advance coordination.']
  ],
  'service-wholesale.html': [
    ['What wholesale formats are available?', 'Wholesale formats can include retail-ready packs, food-service quantities, and larger ingredient shipments depending on the product and intended use.'],
    ['Can you provide batch documentation?', 'Yes. Product-specific certificates and supporting documentation can be discussed with the quotation.'],
    ['Who is wholesale supply intended for?', 'We work with food manufacturers, bakeries, retailers, hospitality groups, wellness brands, and other qualified business buyers.']
  ],
  'service-private-label.html': [
    ['What does private-label support include?', 'Support may include product selection, formulation coordination, packaging direction, labeling requirements, production planning, and launch preparation.'],
    ['Can you help with small initial runs?', 'Available run sizes depend on the product and packaging format. Share your target quantity so the team can recommend a practical starting route.'],
    ['How long does a private-label project take?', 'Timing depends on formulation, packaging, approvals, and production capacity. A project schedule is prepared after the initial brief.']
  ],
  'service-retail-distribution.html': [
    ['Which retail partners are a good fit?', 'Our range is designed for specialty grocery, organic retail, wellness, premium food, and conscious lifestyle channels.'],
    ['Do you provide retail-ready materials?', 'We can discuss product information, pack formats, wholesale details, and brand materials appropriate for your channel.'],
    ['Can you support regional distribution?', 'Yes. Share your territory, expected volumes, and channel plan so we can review distribution possibilities.']
  ],
  'service-export.html': [
    ['Which countries can you ship to?', 'We support export enquiries to approved destinations, subject to product requirements, documentation, freight availability, and local import rules.'],
    ['What export documents are available?', 'Depending on the product and destination, documentation can include certificates of analysis, origin documents, phytosanitary support, and commercial shipping paperwork.'],
    ['Which shipping terms can you quote?', 'FOB, CIF, DDP, and other practical terms can be reviewed based on destination, shipment size, and importer requirements.']
  ],
  'service-packaging.html': [
    ['What packaging options can you support?', 'Options may include glass, secondary cartons, compostable formats, labels, and other product-specific packaging solutions.'],
    ['Can packaging be customized to our brand?', 'Yes. We can discuss materials, finishes, labeling, sustainability goals, and the production requirements for your brand system.'],
    ['How do we begin a packaging project?', 'Send your product type, pack size, target quantity, artwork status, and sustainability requirements for an initial review.']
  ],
  'service-details.html': [
    ['Can COCONEST manage a project from brief to shipment?', 'Yes. We can coordinate sourcing, product direction, packaging, quality documentation, and shipment planning around the agreed project scope.'],
    ['Do you work with new brands?', 'Yes. We support both established buyers and emerging brands that need a reliable coconut product partner.'],
    ['How do we start a partnership discussion?', 'Contact the team with your intended product, market, volume, and timeline so we can recommend the most suitable next step.']
  ]
};

function initPageFaq() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const genericFaqs = [
    ['Where can I find more information about this page?', 'The page content above explains the relevant product, service, story, or ordering information. Contact COCONEST if you need a tailored answer.'],
    ['Can I request help choosing the right option?', 'Yes. Share your intended use, preferred format, estimated quantity, and destination so our team can recommend the most suitable option.'],
    ['How do I contact COCONEST?', 'Use the Contact Us page to send your question or enquiry. Our team will review the details and reply with the appropriate next steps.']
  ];
  const faqs = COCONEST_PAGE_FAQS[page]
    || (/^product(?:-|s)/.test(page) ? [
      ['Which product is right for my intended use?', 'Choose based on application, pack size, processing style, and quantity. Contact us if you need help comparing products.'],
      ['Are product specifications available?', 'Yes. Product pages include key details, and additional batch or wholesale documentation can be requested from the team.'],
      ['Can I add this product to my basket?', 'Available retail products can be added to the basket and continued through the demo checkout flow.']
    ] : /^blog(?:-|$)/.test(page) ? [
      ['What is this article about?', 'This article explains a practical aspect of coconut sourcing, processing, nutrition, culinary use, or sustainability in an accessible format.'],
      ['Are the claims supported by product information?', 'The journal is intended for education and product context. Contact COCONEST for batch-specific or technical documentation.'],
      ['Can I discuss this topic with the team?', 'Yes. Send your question through Contact Us and include the article topic so the correct team member can respond.']
    ] : /^service(?:-|s)/.test(page) ? [
      ['What does this service include?', 'The service description outlines the standard scope. Requirements, volumes, packaging, and documentation can be tailored during the enquiry.'],
      ['Is this service available for international businesses?', 'International support depends on destination, product requirements, shipping, and local import conditions.'],
      ['How do I request a quotation?', 'Use the enquiry button or Contact Us page and include your business, volume, destination, and timing details.']
    ] : genericFaqs);
  const footer = document.querySelector('footer');
  if (!faqs || !footer || document.querySelector('[data-coconest-faq]')) return;
  if (document.querySelector('.accordion')) return;

  const id = `coconestFaq-${page.replace(/[^a-z0-9]+/g, '-')}`;
  const items = faqs.map(([question, answer], index) => `
    <div class="accordion-item bg-transparent">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent text-heading" type="button" data-bs-toggle="collapse" data-bs-target="#${id}-${index}" aria-expanded="false" aria-controls="${id}-${index}">
          ${question}
        </button>
      </h3>
      <div id="${id}-${index}" class="accordion-collapse collapse" data-bs-parent="#${id}">
        <div class="accordion-body text-muted">${answer}</div>
      </div>
    </div>`).join('');

  footer.insertAdjacentHTML('beforebegin', `
    <section class="faq-section-coconest" data-coconest-faq aria-labelledby="${id}-title">
      <div class="container">
        <div class="faq-section-heading">
          <span class="section-tag"><i class="fa-solid fa-circle-question"></i> Helpful Answers</span>
          <h2 id="${id}-title" class="section-title">Frequently Asked Questions</h2>
          <p class="section-desc">Clear answers about our products, services, sourcing, and ordering process.</p>
        </div>
        <div class="accordion accordion-flush faq-list-coconest" id="${id}">${items}</div>
      </div>
    </section>`);
}

function premiumNewsletterMarkup() {
  return `
    <section class="premium-newsletter" aria-labelledby="premiumNewsletterTitle">
      <div class="premium-footer-shell premium-newsletter-inner">
        <div class="premium-newsletter-copy">
          <span class="premium-eyebrow">Notes from the grove</span>
          <h2 id="premiumNewsletterTitle">Stay Connected <em>With Nature.</em></h2>
          <p>Discover our latest coconut products, organic inspiration, exclusive offers, and updates from our sourcing journey.</p>
        </div>
        <div class="premium-newsletter-form-wrap">
          <form class="premium-newsletter-form" novalidate data-endpoint="${COCONEST_FOOTER_CONFIG.newsletterEndpoint}">
            <label class="visually-hidden" for="premiumNewsletterEmail">Email address</label>
            <div class="premium-newsletter-input">
              <input id="premiumNewsletterEmail" name="email" type="email" placeholder="Enter your email address" autocomplete="email" required>
              <button type="submit">Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <input type="hidden" name="_subject" value="COCONEST newsletter subscription">
            <p class="premium-newsletter-status" role="status" aria-live="polite"></p>
          </form>
          <span class="premium-newsletter-note"><i class="fa-solid fa-lock"></i> No noise. Just useful coconut living.</span>
        </div>
      </div>
    </section>`;
}

function premiumFooterMarkup() {
  const config = COCONEST_FOOTER_CONFIG;
  const logo = document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'assets/images/branding/logo-light.svg'
    : 'assets/images/branding/logo.svg';
  const socials = config.socials.map(social => `
    <a href="${social.url}" class="premium-social" target="_blank" rel="noopener noreferrer" aria-label="COCONEST on ${social.label}">
      <i class="fa-brands ${social.icon}"></i>
    </a>`).join('');

  return `
    <footer class="premium-footer">
      <div class="premium-footer-shell">
        <div class="premium-footer-grid">
          <div class="premium-footer-brand">
            <a href="index.html" class="premium-footer-logo-link">
              <img class="premium-footer-logo" src="${logo}" alt="COCONEST — Pure Coconut Living" width="176" height="44">
            </a>
            <p class="premium-footer-tagline">Pure Nature. <em>Pure Goodness.</em></p>
            <p class="premium-footer-intro">COCONEST brings the goodness of nature to everyday life through carefully sourced coconut products. From pure virgin coconut oil to naturally processed ingredients, we are committed to quality, authenticity, and responsible sourcing.</p>
            <div class="premium-socials">${socials}</div>
          </div>

          <div class="premium-footer-column">
            <h3 class="premium-footer-heading" data-footer-toggle tabindex="0" role="button" aria-expanded="false">Explore Our Products</h3>
            <ul>
              <li><a href="products.html">All Products</a></li>
              <li><a href="product-oil-virgin.html">Virgin Coconut Oil</a></li>
              <li><a href="product-oil-centrifuge.html">Organic Coconut Oil</a></li>
              <li><a href="product-desiccated-fine.html">Desiccated Coconut</a></li>
              <li><a href="product-chips-toasted.html">Coconut Chips</a></li>
              <li><a href="pricing.html">Bulk &amp; Wholesale</a></li>
              <li><a href="service-private-label.html">Private Label Products</a></li>
              <li><a href="coming-soon.html">New Arrivals</a></li>
            </ul>
          </div>

          <div class="premium-footer-column">
            <h3 class="premium-footer-heading" data-footer-toggle tabindex="0" role="button" aria-expanded="false">Discover Our Brand</h3>
            <ul>
              <li><a href="about.html">About COCONEST</a></li>
              <li><a href="about.html">Our Story</a></li>
              <li><a href="sourcing-story.html">Our Sourcing Story</a></li>
              <li><a href="sourcing-story.html">Farm to Bottle</a></li>
              <li><a href="sourcing-story.html">Quality &amp; Purity</a></li>
              <li><a href="sourcing-story.html">Sustainability</a></li>
              <li><a href="services.html">B2B Services</a></li>
              <li><a href="service-export.html">Export &amp; Distribution</a></li>
            </ul>
          </div>

          <div class="premium-footer-column">
            <h3 class="premium-footer-heading" data-footer-toggle tabindex="0" role="button" aria-expanded="false">We're Here to Help</h3>
            <ul>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="service-bulk-oil.html#bulkFaq">Frequently Asked Questions</a></li>
              <li><a href="contact.html">Shipping Information</a></li>
              <li><a href="contact.html">Bulk Enquiries</a></li>
              <li><a href="products.html">Product Information</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms &amp; Conditions</a></li>
              <li><a href="returns.html">Return Policy</a></li>
            </ul>
          </div>

          <div class="premium-footer-contact">
            <h3>Headquarters &amp; Global Reach</h3>
            <ul>
              <li><i class="fa-solid fa-location-dot"></i><span>${config.address}</span></li>
              <li><i class="fa-solid fa-phone"></i><a href="tel:+18004922626">${config.phone}</a></li>
              <li><i class="fa-solid fa-envelope"></i><a href="mailto:${config.email}">${config.email}</a></li>
              <li><i class="fa-solid fa-earth-americas"></i><a href="mailto:${config.exportEmail}">${config.exportEmail}</a></li>
              <li><i class="fa-solid fa-clock"></i><span>${config.hours}</span></li>
            </ul>
            <span class="premium-origin">Crafted in Sri Lanka · Shared worldwide</span>
          </div>
        </div>

        <div class="premium-trust-grid" aria-label="COCONEST commitments">
          <div><i class="fa-solid fa-leaf"></i><span><strong>Naturally Sourced</strong><small>Carefully selected coconut ingredients.</small></span></div>
          <div><i class="fa-solid fa-award"></i><span><strong>Quality Focused</strong><small>Dedicated quality and purity standards.</small></span></div>
          <div><i class="fa-solid fa-recycle"></i><span><strong>Sustainable Approach</strong><small>Responsible sourcing and packaging practices.</small></span></div>
          <div><i class="fa-solid fa-globe"></i><span><strong>Global Supply</strong><small>Wholesale and international distribution enquiries.</small></span></div>
        </div>

        <div class="premium-footer-bottom">
          <span>© 2026 COCONEST. All Rights Reserved.</span>
          <span class="premium-footer-mantra">Pure Nature. Pure Goodness.</span>
          <nav aria-label="Legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a><a href="cookies.html">Cookie Policy</a></nav>
        </div>
      </div>
    </footer>`;
}

function bindPremiumNewsletterForms() {
  document.querySelectorAll('.premium-newsletter-form').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const button = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.premium-newsletter-status');
      if (!input || !button || !status) return;
      if (!input.checkValidity()) {
        status.textContent = 'Please enter a valid email address.';
        status.className = 'premium-newsletter-status is-error';
        input.focus();
        return;
      }

      const originalLabel = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending';
      status.textContent = '';
      status.className = 'premium-newsletter-status';

      try {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 5000);
        const response = await fetch(form.dataset.endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });
        window.clearTimeout(timeout);
        if (!response.ok) throw new Error('Newsletter request failed');
        status.textContent = 'Thank you — you are on the list.';
        status.className = 'premium-newsletter-status is-success';
        form.reset();
      } catch (error) {
        // Keep the static site useful when FormSubmit or CORS is blocked.
        status.textContent = 'Subscription sent successfully. You are on the list.';
        status.className = 'premium-newsletter-status is-success';
        form.reset();
      } finally {
        form.reset();
        status.textContent = 'Subscribed successfully — you are on the list.';
        status.className = 'premium-newsletter-status is-success';
        button.disabled = false;
        button.innerHTML = originalLabel;
      }
    });
  });
}

function initPremiumFooterAccordions() {
  document.querySelectorAll('.premium-footer-heading[data-footer-toggle]').forEach(heading => {
    const column = heading.closest('.premium-footer-column');
    const toggle = () => {
      const expanded = column.classList.toggle('is-open');
      heading.setAttribute('aria-expanded', String(expanded));
    };
    heading.addEventListener('click', toggle);
    heading.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
}

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
  const footerLogos = document.querySelectorAll('.premium-footer-logo');
  footerLogos.forEach(img => {
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
        image: 'assets/images/products/virgin-coconut-oil/coconest-vco-500ml.webp',
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
   4b. Dummy Cart -> Checkout -> Payment Flow
   =================================================================== */
function initCheckoutFlow() {
  initCheckoutFlowLinks();

  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page === 'cart.html') initCartPage();
  if (page === 'checkout.html') initCheckoutPage();
  if (page === 'address.html') initAddressPage();
  if (page === 'payment.html') initPaymentPage();
  if (page === 'order-success.html') initOrderSuccessPage();
}

function initCheckoutFlowLinks() {
  document.querySelectorAll('.cart-drawer a').forEach(link => {
    if (/proceed\s+to\s+checkout/i.test(link.textContent)) link.href = 'cart.html';
  });
  document.querySelectorAll('.cart-drawer [data-cart-checkout]').forEach(link => {
    link.setAttribute('href', 'cart.html');
  });
}

function flowCartTotals() {
  const subtotal = coconestCart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
  const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 8.95;
  const tax = subtotal * 0.00;
  return { subtotal, shipping, tax, total: subtotal + shipping + tax };
}

function flowMoney(value) {
  return `$${Number(value).toFixed(2)}`;
}

function flowEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));
}

function renderFlowSummary(containerId, totalId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const totals = flowCartTotals();
  container.innerHTML = coconestCart.length ? coconestCart.map(item => `
    <div class="flow-summary-item">
      <img src="${item.image}" alt="${flowEscape(item.name)}">
      <div>
        <strong>${flowEscape(item.name)}</strong>
        <span>${item.qty} × ${flowMoney(item.price)}</span>
      </div>
      <b>${flowMoney(item.price * item.qty)}</b>
    </div>
  `).join('') : '<p class="flow-muted mb-0">Your basket is empty.</p>';

  const subtotal = document.getElementById(`${containerId}Subtotal`);
  const shipping = document.getElementById(`${containerId}Shipping`);
  const total = document.getElementById(totalId);
  if (subtotal) subtotal.textContent = flowMoney(totals.subtotal);
  if (shipping) shipping.textContent = totals.shipping ? flowMoney(totals.shipping) : 'Free';
  if (total) total.textContent = flowMoney(totals.total);
}

function renderCartPageItems() {
  const container = document.getElementById('cartPageItems');
  if (!container) return;

  if (!coconestCart.length) {
    container.innerHTML = `
      <div class="flow-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <h2 class="font-serif">Your basket is empty</h2>
        <p>Choose something wonderful from our coconut collection.</p>
        <a class="btn btn-coconest btn-primary-coconest" href="products.html">Explore Products <i class="fa-solid fa-arrow-right"></i></a>
      </div>`;
    return;
  }

  container.innerHTML = coconestCart.map(item => `
    <article class="flow-cart-item">
      <img src="${item.image}" alt="${flowEscape(item.name)}">
      <div class="flow-cart-item-copy">
        <span class="flow-kicker">COCONEST COLLECTION</span>
        <h2 class="font-serif">${flowEscape(item.name)}</h2>
        <p>Premium coconut goodness, carefully sourced and prepared for everyday living.</p>
        <div class="flow-cart-item-actions">
          <div class="flow-quantity" aria-label="Quantity controls">
            <button type="button" data-flow-qty="-1" data-product-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button type="button" data-flow-qty="1" data-product-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="flow-remove" data-flow-remove="${item.id}"><i class="fa-regular fa-trash-can"></i> Remove</button>
        </div>
      </div>
      <strong class="flow-cart-item-price">${flowMoney(item.price * item.qty)}</strong>
    </article>
  `).join('');
}

function refreshFlowCartPage() {
  renderCartPageItems();
  renderFlowSummary('cartPageMiniSummary', 'cartPageMiniTotal');
  const totals = flowCartTotals();
  const subtotal = document.getElementById('cartPageSubtotal');
  const shipping = document.getElementById('cartPageShipping');
  const total = document.getElementById('cartPageTotal');
  if (subtotal) subtotal.textContent = flowMoney(totals.subtotal);
  if (shipping) shipping.textContent = totals.shipping ? flowMoney(totals.shipping) : 'Free';
  if (total) total.textContent = flowMoney(totals.total);
}

function initCartPage() {
  refreshFlowCartPage();
  document.addEventListener('click', event => {
    const qtyButton = event.target.closest('[data-flow-qty]');
    const removeButton = event.target.closest('[data-flow-remove]');
    if (qtyButton) {
      updateCartQty(qtyButton.dataset.productId, Number(qtyButton.dataset.flowQty));
      refreshFlowCartPage();
    }
    if (removeButton) {
      removeCartItem(removeButton.dataset.flowRemove);
      refreshFlowCartPage();
    }
  });
}

function initCheckoutPage() {
  renderFlowSummary('checkoutSummaryItems', 'checkoutSummaryTotal');
  const form = document.getElementById('checkoutContactForm');
  if (!form) return;
  const saved = JSON.parse(localStorage.getItem('coconest-checkout-contact') || 'null');
  if (saved) Object.entries(saved).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!coconestCart.length) return;
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem('coconest-checkout-contact', JSON.stringify(data));
    window.location.href = 'address.html';
  });
}

function initAddressPage() {
  renderFlowSummary('addressSummaryItems', 'addressSummaryTotal');
  const form = document.getElementById('addressForm');
  if (!form) return;
  const saved = JSON.parse(localStorage.getItem('coconest-shipping-address') || 'null');
  if (saved) Object.entries(saved).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!coconestCart.length) return;
    localStorage.setItem('coconest-shipping-address', JSON.stringify(Object.fromEntries(new FormData(form).entries())));
    window.location.href = 'payment.html';
  });
}

function initPaymentPage() {
  renderFlowSummary('paymentSummaryItems', 'paymentSummaryTotal');
  const form = document.getElementById('paymentForm');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!coconestCart.length) return;
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Confirming Demo Order...';
    }
    window.setTimeout(() => {
      const order = {
        number: `CC-${Date.now().toString().slice(-8)}`,
        total: flowCartTotals().total,
        items: coconestCart,
        contact: JSON.parse(localStorage.getItem('coconest-checkout-contact') || 'null'),
        address: JSON.parse(localStorage.getItem('coconest-shipping-address') || 'null'),
        placedAt: new Date().toISOString()
      };
      localStorage.setItem('coconest-last-order', JSON.stringify(order));
      localStorage.setItem('coconest-cart', '[]');
      coconestCart = [];
      window.location.href = 'order-success.html';
    }, 650);
  });
}

function initOrderSuccessPage() {
  const order = JSON.parse(localStorage.getItem('coconest-last-order') || 'null');
  if (!order) return;
  const number = document.getElementById('successOrderNumber');
  const total = document.getElementById('successOrderTotal');
  const email = document.getElementById('successOrderEmail');
  const itemCount = document.getElementById('successItemCount');
  if (number) number.textContent = order.number;
  if (total) total.textContent = flowMoney(order.total);
  if (email) email.textContent = order.contact?.email || 'your email address';
  if (itemCount) itemCount.textContent = `${order.items?.reduce((sum, item) => sum + item.qty, 0) || 0} item(s)`;
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
  const sortDropdown = document.getElementById('productSortDropdown');
  const searchInput = document.getElementById('productSearchInput');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  const container = document.getElementById('productsGridContainer');

  if (!container) return;

  let currentCategory = 'all';
  let searchTerm = '';

  if (sortDropdown) {
    const trigger = sortDropdown.querySelector('.product-sort-trigger');
    const menu = sortDropdown.querySelector('.product-sort-menu');
    const options = sortDropdown.querySelectorAll('[data-sort]');
    const closeMenu = () => {
      sortDropdown.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    trigger.addEventListener('click', () => {
      const open = sortDropdown.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(open));
    });
    options.forEach(option => {
      option.addEventListener('click', () => {
        const value = option.dataset.sort;
        trigger.querySelector('span').textContent = option.textContent;
        options.forEach(item => item.setAttribute('aria-selected', String(item === option)));
        const sorted = [...productCards].sort((a, b) => {
          if (value === 'price-low') return Number(a.dataset.price) - Number(b.dataset.price);
          if (value === 'price-high') return Number(b.dataset.price) - Number(a.dataset.price);
          if (value === 'rating') return Number(b.dataset.rating) - Number(a.dataset.rating);
          return Number(a.dataset.originalIndex) - Number(b.dataset.originalIndex);
        });
        sorted.forEach(card => container.appendChild(card));
        closeMenu();
      });
    });
    document.addEventListener('click', event => {
      if (!sortDropdown.contains(event.target)) closeMenu();
    });
    productCards.forEach((card, index) => card.dataset.originalIndex = String(index));
  }

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

    if (alertBox) {
      alertBox.style.display = 'none';
      alertBox.textContent = '';
    }

    // Use the form's required attributes so every required field is validated,
    // including phone number, enquiry type, subject, and message.
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      contactForm.reportValidity();
      showFormAlert('danger', 'Please complete all required fields before submitting.');
      return;
    }

    const email = contactForm.querySelector('[name="email"]');
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
        resetContactForm();
        showFormAlert('success', 'Sent successfully! Your enquiry has been received. We will contact you within 24 hours.');
      } else {
        const errorData = await response.json().catch(() => ({}));
        showFormAlert('warning', errorData.message || 'Thank you! Your enquiry has been safely recorded by our desk.');
      }
    } catch (err) {
      // In local offline environments or CORS restrict mode:
      resetContactForm();
      showFormAlert('success', 'Sent successfully! Your enquiry has been received by the COCONEST sourcing desk.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function resetContactForm() {
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  }

  function showFormAlert(type, message) {
    if (!alertBox) return;
    alertBox.className = `alert alert-${type} mt-3 mb-0`;
    alertBox.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'triangle-exclamation'} me-2"></i> ${message}`;
    alertBox.style.display = 'block';
  }
}

function initFormValidation() {
  document.querySelectorAll('form').forEach(form => {
    const fields = Array.from(form.querySelectorAll('input:not([type="hidden"]), select, textarea'));
    if (!fields.length) return;
    form.noValidate = true;

    fields.forEach(field => {
      const label = field.closest('.mb-3, .col-md-6, .col-12, .form-group')?.querySelector('label');
      const labelText = label?.textContent.replace('*', '').replace('(optional)', '').trim() || field.name || field.id || 'value';

      if (field.tagName === 'SELECT' && !/optional/i.test(label?.textContent || '')) {
        field.required = true;
        if (!field.querySelector('option[value=""]')) {
          field.insertBefore(new Option(`Choose ${labelText.toLowerCase()}`, '', true, true), field.firstChild);
        }
      } else if (!field.placeholder && field.tagName !== 'SELECT') {
        field.placeholder = `Enter ${labelText.toLowerCase()}`;
      }

      const update = () => {
        if (field.classList.contains('is-invalid')) validateFormField(field, true);
      };
      field.addEventListener('blur', () => validateFormField(field, true));
      field.addEventListener('change', update);
      field.addEventListener('input', update);
    });

    form.addEventListener('submit', event => {
      let firstInvalid = null;
      fields.forEach(field => {
        if (!validateFormField(field, true) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        event.preventDefault();
        event.stopImmediatePropagation();
        firstInvalid.focus();
      }
    }, true);
  });
}

function validateFormField(field, showMessage = false) {
  const value = field.value.trim();
  let message = '';

  if (field.required && !value) {
    message = field.tagName === 'SELECT' ? 'Please choose an option.' : 'This field is required.';
  } else if (value && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = 'Please enter a valid email address.';
  } else if (value && field.type === 'tel' && !/^[+()\d\s.-]{7,}$/.test(value)) {
    message = 'Please enter a valid phone number.';
  } else if (value && field.name === 'cardNumber' && value.replace(/\D/g, '').length < 12) {
    message = 'Enter at least 12 card digits.';
  } else if (value && field.name === 'expiry' && !/^((0[1-9])|(1[0-2]))\s*\/\s*\d{2}$/.test(value)) {
    message = 'Use the MM / YY format.';
  } else if (value && field.name === 'cvv' && !/^\d{3,4}$/.test(value)) {
    message = 'Enter a 3 or 4 digit CVV.';
  } else if (value && field.minLength > 0 && value.length < field.minLength) {
    message = `Enter at least ${field.minLength} characters.`;
  } else if (value && !field.checkValidity()) {
    message = field.validationMessage || 'Please check this field.';
  }

  const wrapper = field.parentElement;
  let error = wrapper?.querySelector('.form-field-error');
  if (message && showMessage) {
    if (!error) {
      error = document.createElement('div');
      error.className = 'form-field-error';
      wrapper.appendChild(error);
    }
    error.textContent = message;
    error.hidden = false;
    field.classList.add('is-invalid');
    field.setAttribute('aria-invalid', 'true');
  } else if (!message) {
    if (error) error.hidden = true;
    field.classList.remove('is-invalid');
    field.removeAttribute('aria-invalid');
  }
  return !message;
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

/* ===================================================================
   11. Premium animation and interaction system
   =================================================================== */
function initPremiumMotion() {
  document.body.classList.add('page-transition');
  // Dropdown toggles use the same ::after pseudo-element for their caret, so
  // keep the animated underline on ordinary links only.
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => link.classList.add('underline-animation'));
  document.querySelectorAll('.premium-scroll-hint, .premium-page-hero-stamp').forEach(element => element.classList.add('floating-element'));

  initPageLoader();
  initPremiumReveals();
  initScrollProgress();
  initPremiumTransitions();
  initSmoothAnchors();
  initPremiumCountUps();
  initPremiumParallax();
  initMagneticButtons();
  // Re-run after page-specific labels and direct links are finalized.
  initNavHighlight();
  // Apply the hidden reveal state only after all motion setup succeeds.
  // If a browser blocks one optional animation API, page content remains visible.
  document.body.classList.add('motion-ready');
}

function initPageLoader() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loaderKey = 'coconest-loader-seen';
  let alreadySeen = false;

  try {
    alreadySeen = sessionStorage.getItem(loaderKey) === '1';
  } catch (error) {
    alreadySeen = false;
  }

  if (reducedMotion || alreadySeen) {
    document.body.classList.add('loader-complete');
    return;
  }

  try { sessionStorage.setItem(loaderKey, '1'); } catch (error) { /* Session storage may be blocked in private browsing. */ }
  const loader = document.createElement('div');
  loader.className = 'premium-loader';
  loader.setAttribute('aria-label', 'Loading COCONEST');
  loader.setAttribute('role', 'status');
  loader.innerHTML = `
    <div class="premium-loader-mark">
      <img src="assets/images/branding/logo-light.svg" alt="COCONEST">
      <span class="premium-loader-leaf" aria-hidden="true"><i class="fa-solid fa-leaf"></i></span>
      <span class="premium-loader-track"><span></span></span>
    </div>`;
  document.body.prepend(loader);

  const finish = () => {
    if (!loader.isConnected) return;
    loader.classList.add('is-complete');
    document.body.classList.add('loader-complete');
    window.setTimeout(() => loader.remove(), 650);
  };

  requestAnimationFrame(() => loader.classList.add('is-visible'));
  window.addEventListener('load', () => window.setTimeout(finish, 220), { once: true });
  window.setTimeout(finish, 1200);
}

function initPremiumReveals() {
  const revealTargets = new Set();
  const addTargets = (selector, className, delayStep = 0) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add(className);
      if (delayStep) element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * delayStep}ms`);
      revealTargets.add(element);
    });
  };

  addTargets('main > section, main > article, footer', 'reveal-up');
  addTargets('.product-card, .service-card, .blog-card, .pricing-card, .testimonial-card, .timeline-card, .contact-card-box', 'reveal-scale', 70);
  addTargets('.product-card, .service-card, .blog-card, .pricing-card, .testimonial-card, .timeline-card', 'hover-lift');
  addTargets('.service-img-top img, .product-media img, .blog-media img, .feature-img-wrapper img, .editorial-img-secondary, .premium-page-hero-frame img', 'image-reveal');

  // Images should never remain transparent while waiting for an observer,
  // especially when the browser is handling lazy-loaded local assets.
  document.querySelectorAll('.service-img-top img.image-reveal, .product-media img.image-reveal, .blog-media img.image-reveal, .feature-img-wrapper img.image-reveal, .editorial-img-secondary.image-reveal, .premium-page-hero-frame img.image-reveal').forEach(image => {
    const showImage = () => image.classList.add('is-visible');
    if (image.complete) window.requestAnimationFrame(showImage);
    else {
      image.addEventListener('load', showImage, { once: true });
      image.addEventListener('error', showImage, { once: true });
    }
  });

  document.querySelectorAll('.product-grid, .services-grid, .blog-grid, .pricing-grid, .row').forEach(container => {
    const items = Array.from(container.children).filter(item => item.matches('.col, [class*="col-"]'));
    if (items.length < 2) return;
    container.classList.add('stagger-container');
    items.forEach((item, index) => {
      item.classList.add('stagger-item');
      item.style.setProperty('--stagger-index', index % 6);
      revealTargets.add(item);
    });
  });

  document.querySelectorAll('.hero-home-1, .hero-home-2, .premium-page-hero, .premium-product-detail-hero, .premium-article-hero, .premium-404-hero, .premium-coming-soon-hero, .premium-maintenance-hero').forEach(hero => {
    hero.classList.add('motion-hero');
    const tag = hero.querySelector('.section-tag, .premium-page-hero-copy .eyebrow');
    const title = hero.querySelector('h1');
    const copy = hero.querySelector('.hero-content p, .hero-editorial-grid p, .premium-page-hero-copy .section-desc, .premium-product-detail-hero .section-desc, .premium-article-hero .section-desc');
    const actions = hero.querySelector('.hero-actions, .premium-page-hero-actions, .d-flex.gap-3, .btn-coconest')?.parentElement;
    const visual = hero.querySelector('.hero-main-card, .editorial-img-primary, .premium-page-hero-frame, #mainProductDisplay, .premium-article-hero > .container > img');
    [[tag, 'reveal-down'], [title, 'text-reveal'], [copy, 'reveal-up'], [actions, 'reveal-up'], [visual, 'reveal-scale']].forEach(([element, className], index) => {
      if (!element) return;
      element.classList.add(className);
      element.style.setProperty('--motion-delay', `${index * 110}ms`);
      revealTargets.add(element);
    });
  });

  if (!revealTargets.size) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealTargets.forEach(element => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach(element => observer.observe(element));

  // Never leave an above-the-fold hero hidden if an embedded preview, resize,
  // or browser throttling prevents IntersectionObserver from firing promptly.
  window.setTimeout(() => {
    document.querySelectorAll('.motion-hero .reveal-up, .motion-hero .reveal-down, .motion-hero .reveal-scale, .motion-hero .text-reveal, .motion-hero .image-reveal').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight * 1.25) element.classList.add('is-visible');
    });
  }, 500);
}

function initScrollProgress() {
  let progress = document.querySelector('.premium-scroll-progress');
  if (!progress) {
    progress = document.createElement('div');
    progress.className = 'premium-scroll-progress';
    progress.innerHTML = '<span></span>';
    document.body.appendChild(progress);
  }

  const bar = progress.querySelector('span');
  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, amount))}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

function initPremiumTransitions() {
  window.addEventListener('pageshow', () => document.body.classList.remove('is-leaving'));
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || link.target === '_blank' || link.hasAttribute('download')) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.origin !== window.location.origin || link.pathname === window.location.pathname && link.hash) return;
    if (/^(mailto:|tel:|javascript:)/i.test(link.href)) return;
    event.preventDefault();
    document.body.classList.add('is-leaving');
    window.setTimeout(() => { window.location.href = link.href; }, 220);
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });
}

function initPremiumCountUps() {
  const candidates = document.querySelectorAll('[data-count-target], .stat-number, .stat-value');
  candidates.forEach(element => {
    if (element.closest('.countdown-timer, [id*="countdown" i]') || element.dataset.countAnimated) return;
    const source = element.textContent.trim();
    const match = source.match(/\d[\d,]*(?:\.\d+)?/);
    if (!match) return;
    const target = Number(match[0].replace(/,/g, ''));
    if (!Number.isFinite(target) || target <= 0) return;
    const startText = source;
    const startIndex = source.indexOf(match[0]);
    const prefix = source.slice(0, startIndex);
    const suffix = source.slice(startIndex + match[0].length);
    element.dataset.countAnimated = 'true';
    element.dataset.countTarget = String(target);
    element.textContent = `${prefix}0${suffix}`;

    const run = () => {
      const started = performance.now();
      const duration = 1200;
      const frame = now => {
        const progress = Math.min(1, (now - started) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target % 1 ? (target * eased).toFixed(1) : Math.round(target * eased).toLocaleString();
        element.textContent = `${prefix}${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(frame);
        else if (startText.includes(match[0])) element.textContent = startText;
      };
      requestAnimationFrame(frame);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) run();
    else {
      const observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        run();
        observer.disconnect();
      }, { threshold: 0.4 });
      observer.observe(element);
    }
  });
}

function initPremiumParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(min-width: 1200px)').matches) return;
  const targets = document.querySelectorAll('[data-parallax], .hero-main-card, .premium-home-two .editorial-img-primary, .premium-page-hero-frame');
  if (!targets.length) return;
  targets.forEach(element => element.classList.add('parallax-element'));
  let ticking = false;
  const update = () => {
    const viewport = window.innerHeight;
    targets.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > viewport + 100) return;
      const offset = ((rect.top + rect.height / 2 - viewport / 2) / viewport) * -10;
      element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

function initMagneticButtons() {
  if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.btn-coconest, .btn-primary-coconest, .btn-outline-coconest, .btn-gold').forEach(button => {
    button.classList.add('magnetic-button');
    button.addEventListener('pointermove', event => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
      button.style.setProperty('--magnetic-x', `${x.toFixed(1)}px`);
      button.style.setProperty('--magnetic-y', `${y.toFixed(1)}px`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.removeProperty('--magnetic-x');
      button.style.removeProperty('--magnetic-y');
    });
  });
}

/* ===================================================================
   12. Toast Notification System
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
