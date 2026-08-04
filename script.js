// ===================================================================
// Lion Industries — product data & interactions (loads from JSON)
// Optimized for mobile & free servers
// ===================================================================

let PRODUCTS = [];

const CATEGORY_LABEL = {
  kitchen: "Kitchenware",
  trays: "Trays & Boxes",
  home: "Home & Bath",
};

function formatRs(n){
  return "Rs. " + n.toLocaleString("en-LK");
}

function renderProducts(filter){
  const grid = document.getElementById("productGrid");
  if (!PRODUCTS || PRODUCTS.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--umber);">Loading products...</p>';
    return;
  }
  
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(p => {
    return `
    <a href="product-details.html?id=${p.id}" style="text-decoration: none; color: inherit;">
      <article class="product-card" data-cat="${p.category}">
        <div class="product-media">
          <img src="images/products/${p.image}" alt="${p.name}" loading="lazy" decoding="async">
        </div>
        <div class="product-info">
          <span class="cat-chip">${CATEGORY_LABEL[p.category]}</span>
          <h3>${p.name}${p.size && p.size !== 'Standard' ? ` <span style="font-weight:400;color:var(--umber-light);font-size:0.85em;">— ${p.size}</span>` : ""}</h3>
        </div>
      </article>
    </a>
  `;
  }).join("");
}

async function loadProducts() {
  try {
    const paths = [
      './data/products.json',
      '/data/products.json',
      'data/products.json'
    ];
    
    let data = null;
    let error = null;
    
    for (let path of paths) {
      try {
        const response = await fetch(path, { cache: 'no-store' });
        if (response.ok) {
          data = await response.json();
          console.log('Products loaded from:', path);
          break;
        }
      } catch (e) {
        error = e;
        continue;
      }
    }
    
    if (!data) {
      throw new Error('Could not load products.json from any path');
    }
    
    PRODUCTS = data.products || [];
    if (PRODUCTS.length > 0) {
      renderProducts("all");
      attachFilterListeners();
    } else {
      document.getElementById("productGrid").innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--umber);">No products found in data file.</p>';
    }
  } catch (error) {
    console.error('Error loading products:', error);
    const grid = document.getElementById("productGrid");
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--umber);">
        <p><strong>⚠️ Unable to load products</strong></p>
        <p style="font-size: 0.9rem; margin: 10px 0 0;">Make sure:</p>
        <p style="font-size: 0.9rem;">1. The <code>data/products.json</code> file exists</p>
        <p style="font-size: 0.9rem;">2. All files are uploaded to your server</p>
        <p style="font-size: 0.9rem; margin-top: 15px;"><a href="javascript:location.reload()" style="color: var(--dark); text-decoration: underline;">Try again</a></p>
      </div>
    `;
  }
}

function attachFilterListeners() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
      // Smooth scroll to products on mobile
      if (window.innerWidth < 768) {
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  // Header scroll state
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
      a.addEventListener("click", () => header.classList.remove("nav-open"));
    });
  }
  
  // Prevent double-tap zoom on buttons (mobile optimization)
  document.addEventListener("touchstart", function(){}, false);
});
