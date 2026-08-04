# Quick Reference Card 🎯

## The One File You Need to Edit for PRICES

📁 **`data/products.json`**

Find the product and change the number:
```json
{
  "id": "spoon-set",
  "name": "Kithul Wood Spoon Set",
  "price": 3500,    ← CHANGE THIS
}
```

---

## Change Product Info

In `data/products.json`, edit:

- **`price`** — Product price in Rs.
- **`sizes`** — Available sizes or dimensions
- **`description`** — Full product description
- **`material`** — Type of wood/material
- **`details`** — List of product features

---

## Add Product Images

### Main Image (Required)
```
/images/products/spoon-set.jpg
```

### Extra Images (Optional)
Create a folder and add images:
```
/images/products/spoon-set/
├── detail-1.jpg
├── detail-2.jpg
└── lifestyle.jpg
```

---

## Key File Locations

| File | Purpose |
|------|---------|
| `index.html` | Homepage with product list |
| `product-details.html` | Individual product page |
| `data/products.json` | 📍 **All prices & product info** |
| `styles.css` | Website styling |
| `script.js` | Loads products from JSON |

---

## Testing Locally

1. Open `index.html` in your browser
2. Products should load and be clickable
3. Click any product → see detail page
4. Detail page shows all images in a gallery

---

## Common Tasks

### ✏️ Change One Price
1. Open `data/products.json`
2. Find the product
3. Change `"price": 3500` to your new price
4. Save

### ✏️ Add Product Images
1. Create folder: `/images/products/spoon-set/`
2. Add images: `detail-1.jpg`, `detail-2.jpg`, etc.
3. Refresh your browser

### ✏️ Update Product Description
1. Open `data/products.json`
2. Find the product
3. Edit `"description"` field
4. Save

### ✏️ Add Product Feature
1. Open `data/products.json`
2. Find the product's `"details"` array
3. Add new item: `"New feature here"`
4. Save

---

## File Structure You Need to Create

```
/images/products/
├── spoon-set.jpg                (main - already there)
├── spoon-set/                   (NEW - create this)
│   ├── detail-1.jpg
│   └── detail-2.jpg
├── mortar-pestle.jpg            (main - already there)
├── mortar-pestle/               (NEW - create this)
│   └── detail-1.jpg
└── ... (etc for all products)
```

---

## Price Quick Edit Cheat

In `data/products.json`, use Ctrl+F (or Cmd+F) to find and replace:

Find: `"price": 3500`
Replace with: `"price": 4000`

This edits all prices matching that amount at once!

---

## Supported Image Formats

- JPG / JPEG ✓
- PNG ✓
- WebP ✓

Best size: 1200px × 1200px or larger

---

## Mobile Responsive

- Homepage ✓ Works on all devices
- Product list ✓ Responsive grid
- Detail pages ✓ Mobile-friendly
- Image gallery ✓ Touch-friendly

---

## What's New vs Old

| What | Before | Now |
|-----|--------|-----|
| Edit prices | 5 different places | 1 file: `products.json` |
| See product details | No detail page | Full detail page |
| Product images | Single image | Gallery of images |
| Add product info | Code only | Easy JSON editing |

---

## That's It!

Your catalog is ready to manage. Just:
1. Edit `data/products.json` for prices
2. Add folders for product images
3. Update descriptions anytime

No need to touch code!

---

**Questions about a task?**
- See `README.md` for full documentation
- See `FOLDER_STRUCTURE.txt` for image folder setup
- See `data/products.json` for exact field names

Good luck! 🌳
