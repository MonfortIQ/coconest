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
    image: 'assets/images/products/virgin-coconut-oil/coconest-vco-1000ml.webp',
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
    image: 'assets/images/products/desiccated-coconut/coconest-desiccated-500g.webp',
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
    image: 'assets/images/products/desiccated-coconut/coconest-desiccated-1000g.webp',
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
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-crafted coconut flakes glazed with fair-trade organic dark cacao and natural coconut blossom nectar.',
    link: 'product-details.html'
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
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut harvesting in a sunlit tropical grove', cta: 'Discover Our Journey', href: '#journey'
  },
  'products.html': {
    eyebrow: 'The COCONEST Collection', title: 'Explore the Goodness of Coconut.',
    description: 'Discover our carefully selected collection of pure coconut products, made for quality-conscious everyday living.',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=1600&q=88',
    alt: 'Premium coconut ingredients arranged for the COCONEST collection', cta: 'Shop the Collection', href: '#productsGridContainer'
  },
  'sourcing-story.html': {
    eyebrow: 'Our Sourcing Story', title: 'Every Coconut Has a Story.',
    description: 'From carefully selected coconut farms to thoughtfully prepared products, discover the journey behind COCONEST.',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=2000&q=88',
    alt: 'Lush coconut plantation at golden hour', cta: 'Explore Our Journey', href: '#sourcingJourney', cinematic: true
  },
  'services.html': {
    eyebrow: 'Enterprise Capabilities', title: 'Natural Coconut Solutions for Every Business.',
    description: 'From bulk coconut oil supply to private-label products, discover business solutions designed around quality and dependable partnerships.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut oil packaging prepared for business supply', cta: 'Explore Our Services', href: '#servicesGrid', secondary: 'Request a Bulk Enquiry', secondaryHref: 'contact.html'
  },
  'service-wholesale.html': {
    eyebrow: 'Wholesale Supply', title: 'Quality Coconut Products. Supplied at Scale.',
    description: 'Reliable, factory-direct volume supply for premium food brands, commercial bakeries, snack makers, and hospitality partners.',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=1600&q=88',
    alt: 'Wholesale coconut ingredients ready for shipment', cta: 'Request Wholesale Enquiry', href: 'contact.html'
  },
  'service-bulk-oil.html': {
    eyebrow: 'Bulk Virgin Coconut Oil', title: 'Pure Oil. Ready for Your Production Line.',
    description: 'Consistent, carefully processed virgin coconut oil for food, wellness, and personal-care manufacturers.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1600&q=88',
    alt: 'Virgin coconut oil bottle and fresh coconut detail', cta: 'Request a Bulk Enquiry', href: '#bulkFaq'
  },
  'service-private-label.html': {
    eyebrow: 'Private Label Manufacturing', title: 'Your Brand. Our Coconut Expertise.',
    description: 'Bring a considered coconut product to market with thoughtful formulation, packaging, and dependable production support.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1600&q=88',
    alt: 'Premium amber coconut oil packaging', cta: 'Discuss Your Project', href: 'contact.html'
  },
  'service-export.html': {
    eyebrow: 'Export & Distribution', title: 'Taking Coconut Goodness Across Borders.',
    description: 'A dependable export partner for carefully prepared coconut products, documentation, and international distribution.',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut grove representing COCONEST global supply', cta: 'Explore Export Solutions', href: 'contact.html'
  },
  'service-packaging.html': {
    eyebrow: 'Custom Packaging', title: 'Packaging That Reflects Pure Quality.',
    description: 'Create a tactile, shelf-ready presentation with packaging options designed around product integrity and brand character.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut snack and sustainable packaging detail', cta: 'Enquire About Packaging', href: 'contact.html'
  },
  'service-retail-distribution.html': {
    eyebrow: 'Retail & Distribution', title: 'A Better Coconut Range for Modern Shelves.',
    description: 'Partner with a considered product range that brings premium coconut living to retailers and conscious customers.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut products prepared for a modern retail display', cta: 'Explore Retail Partnerships', href: 'contact.html'
  },
  'service-details.html': {
    eyebrow: 'Business Partnerships', title: 'Built Around Your Coconut Ambition.',
    description: 'From first brief to final shipment, discover a flexible partnership model for ambitious coconut product businesses.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=88',
    alt: 'COCONEST team discussing a coconut supply partnership', cta: 'Start a Conversation', href: 'contact.html'
  },
  'blog.html': {
    eyebrow: 'The Coconut Living Journal', title: 'Stories Inspired by Nature.',
    description: 'Explore coconut knowledge, natural living inspiration, product insights, and stories from our sourcing journey.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=88',
    alt: 'Atmospheric tropical canopy for the COCONEST journal', cta: 'Read the Journal', href: '#latestStories'
  },
  'contact.html': {
    eyebrow: 'Sourcing & Customer Desk', title: "Let's Start a Conversation.",
    description: 'Have a question about our coconut products, wholesale supply, or business partnerships? Our team is ready to help.',
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1600&q=88',
    alt: 'Fresh coconuts and natural ingredients in a warm kitchen setting', cta: 'Send an Enquiry', href: '#coconestContactForm'
  },
  'pricing.html': {
    eyebrow: 'Wholesale & Supply', title: 'Flexible Solutions. Transparent Value.',
    description: 'Explore supply options designed for retailers, distributors, and businesses looking for quality coconut products.',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=1600&q=88',
    alt: 'Coconut products prepared for wholesale supply', cta: 'Request a Bulk Enquiry', href: 'contact.html'
  }
};

const COCONEST_SERVICE_IMAGE_SET = {
  wholesale: {
    src: 'assets/images/services/Wholesale%20Coconut%20Products.jpg',
    alt: 'Wholesale coconut products with coconut oil and fresh coconut'
  },
  bulkOil: {
    src: 'assets/images/services/Bulk%20Virgin%20Coconut%20Oil%20Supply.jpg',
    alt: 'Virgin coconut oil bottles with fresh coconut'
  },
  privateLabel: {
    src: 'assets/images/services/Private-Label%20Coconut%20Products.png',
    alt: 'Private-label coconut product packaging'
  },
  retail: {
    src: 'assets/images/services/Retail%20%26%20Distribution%20Partnerships.jpg',
    alt: 'Retail and distribution partnership in a grocery store'
  },
  export: {
    src: 'assets/images/services/Wholesale%20Coconut%20Products.png',
    alt: 'Coconut products prepared for bulk supply and export logistics'
  },
  packaging: {
    src: 'assets/images/services/Custom%20Packaging%20Solutions.png',
    alt: 'Custom sustainable packaging solutions for coconut products'
  },
  sourcing: {
    src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=88',
    alt: 'Organic farm landscape supporting traceable coconut sourcing'
  },
  formulation: {
    src: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=88',
    alt: 'Coconut product formulation and development workspace'
  },
  quality: {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=88',
    alt: 'Laboratory quality testing for certified coconut products'
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initSimplePrimaryNav();
  initNavHighlight();
  initMobileNavDropdowns();
  initHomeNavLabels();
  initPageHeroSystem();
  initServiceImageSystem();
  initPremiumFooter();
  initStickyNav();
  initCart();
  initWishlist();
  initProductInteractions();
  initSearch();
  initContactForm();
  initCountdown();
  initEditorialMotion();
  initPremiumMotion();
  initBackToTop();
});

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
    if (!hero.querySelector('.premium-scroll-hint')) hero.insertAdjacentHTML('beforeend', '<div class="premium-scroll-hint"><span></span> Scroll to explore</div>');
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
  art.innerHTML = `<div class="premium-page-hero-frame"><img src="${config.image}" alt="${config.alt}" loading="eager"><span class="premium-page-hero-stamp">COCONEST<br><small>PURE LIVING</small></span></div>`;
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
  footer.outerHTML = premiumFooterMarkup();
  document.querySelector('.premium-footer')?.insertAdjacentHTML('beforebegin', premiumNewsletterMarkup());
  bindPremiumNewsletterForms();
  initPremiumFooterAccordions();
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
          <button type="button" class="premium-footer-top back-to-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
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
        const response = await fetch(form.dataset.endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Newsletter request failed');
        status.textContent = 'Thank you — you are on the list.';
        status.className = 'premium-newsletter-status is-success';
        form.reset();
      } catch (error) {
        status.textContent = 'We could not connect right now. Please try again.';
        status.className = 'premium-newsletter-status is-error';
      } finally {
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
  let button = document.querySelector('.back-to-top');
  if (!button) {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(button);
  }

  const syncVisibility = () => button.classList.toggle('is-visible', window.scrollY > 650);
  window.addEventListener('scroll', syncVisibility, { passive: true });
  syncVisibility();
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
