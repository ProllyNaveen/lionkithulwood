# 🛠️ Easy Product Management Guide

Everything is now super simple! Edit prices, add new products, manage images with ease.

---

## 💰 **Change a Price (2 minutes)**

### Method 1: Direct Edit (Easiest)
1. Open `data/products.json` in any text editor
2. Find your product
3. Look for: `"price": 3500`
4. Change the number: `"price": 4500`
5. Save (Ctrl+S)
6. Upload file to server
7. Refresh website ✅

### Example
**Before:**
```json
{
  "id": "spoon-set",
  "name": "Kithul Wood Spoon Set",
  "price": 3500,
  "size": "6 spoons + stand",
  "description": "A beautiful set...",
  "material": "Kithul Wood"
}
```

**After:**
```json
{
  "id": "spoon-set",
  "name": "Kithul Wood Spoon Set",
  "price": 4500,
  "size": "6 spoons + stand",
  "description": "A beautiful set...",
  "material": "Kithul Wood"
}
```

---

## 📝 **Edit Product Size, Description, Material**

Same process as price change!

### Change Size
```json
"size": "6 spoons + stand"  ← Change this
```

### Change Description
```json
"description": "A beautiful set of..."  ← Change this
```

### Change Material
```json
"material": "Kithul Wood"  ← Change this
```

### Change Features
```json
"features": [
  "Handcrafted premium kithul wood",  ← Change or add
  "6 spoons and wooden stand",        ← Change or add
  "Food-safe finish",                 ← Change or add
  "Each piece one-of-a-kind"          ← Change or add
]
```

---

## ✨ **Full Product Structure (Easy to Edit)**

This is what EACH product looks like in the JSON file:

```json
{
  "id": "spoon-set",              ← Unique identifier (no spaces)
  "name": "Kithul Wood Spoon Set", ← Display name
  "category": "kitchen",          ← kitchen, trays, or home
  "image": "spoon-set.jpg",       ← Main image filename
  "price": 3500,                  ← Price in Rs (just number!)
  "priceLabel": null,             ← null, "From", or "Starting at"
  "size": "6 spoons + stand",     ← Dimensions or size info
  "description": "A beautiful...", ← Full description shown on detail page
  "material": "Kithul Wood",      ← Wood type or material
  "features": [                   ← List of features
    "Handcrafted premium kithul wood",
    "6 spoons and wooden stand",
    "Food-safe finish",
    "Each piece one-of-a-kind"
  ]
}
```

### Field Explanations

| Field | What It Does | Example |
|-------|---|---|
| `id` | Internal identifier | `"spoon-set"` (no spaces!) |
| `name` | Product name shown to customers | `"Kithul Wood Spoon Set"` |
| `category` | Filters products on homepage | `"kitchen"`, `"trays"`, `"home"` |
| `image` | Main product image | `"spoon-set.jpg"` |
| `price` | Price in Rs | `3500` (just the number) |
| `priceLabel` | Prefix before price | `"From"` or `null` |
| `size` | Dimensions or size | `"6 spoons + stand"` or `"Standard"` |
| `description` | Full description on detail page | Shown when user clicks product |
| `material` | Wood type | `"Kithul Wood"` |
| `features` | List of benefits | Array of text strings |

---

## ➕ **Add a New Product (3 Methods)**

### Method 1: Use the Admin Panel (Easiest! 🎯)

**Step 1:** Open `admin-add-product.html` in your browser

**Step 2:** Fill out the form:
- Product ID (e.g., `wooden-plate`)
- Name (e.g., `Wooden Plate`)
- Category (kitchen, trays, home)
- Image filename (e.g., `wooden-plate.jpg`)
- Price (e.g., `2500`)
- Price Label (optional - "From" or leave blank)
- Size (e.g., `10 inch`)
- Material (e.g., `Kithul Wood`)
- Description (full description)
- Features (add as many as you want)

**Step 3:** Click "Add Product to JSON"

**Step 4:** Copy the JSON that appears

**Step 5:** Edit `data/products.json`:
- Find the line with `]` at the very end
- Add a comma after the last product (if needed)
- Paste your JSON
- Save

**Step 6:** Create image folder and upload images

**Step 7:** Refresh website ✅

---

### Method 2: Manual Copy-Paste

1. Open `data/products.json`
2. Copy an existing product (pick a similar one)
3. Paste it before the closing `]`
4. Edit all the fields for your new product
5. Save and upload

---

### Method 3: Type from Scratch

Copy this template and fill it in:

```json
{
  "id": "new-product-id",
  "name": "Product Name",
  "category": "kitchen",
  "image": "new-product.jpg",
  "price": 1500,
  "priceLabel": null,
  "size": "Standard",
  "description": "Product description here",
  "material": "Kithul Wood",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

---

## 🖼️ **Image Management (Super Easy!)**

### Folder Structure

For EACH product:

```
/images/products/
├── product-id.jpg          ← Main image (required)
└── product-id/             ← Additional images folder
    ├── pic1.jpg            ← Extra image 1
    ├── pic2.jpg            ← Extra image 2
    ├── pic3.jpg            ← Extra image 3
    └── pic10.jpg           ← Can have up to 10 extra images!
```

### Example

```
/images/products/
├── spoon-set.jpg           ← Main image on homepage
└── spoon-set/              ← Folder with extra images
    ├── pic1.jpg            ← Detail view 1
    ├── pic2.jpg            ← Detail view 2
    ├── pic3.jpg            ← Lifestyle photo
    └── pic4.jpg            ← Another angle
```

### How to Add Images

**Step 1:** Create folder
- Right-click in `/images/products/`
- New Folder
- Name it exactly like product ID: `spoon-set`

**Step 2:** Add images
- Add images named: `pic1.jpg`, `pic2.jpg`, `pic3.jpg`, etc.
- You can add 1 image or 10 images - it works!

**Step 3:** Upload to server
- Upload the folder with all images
- Website automatically finds and displays them!

### No Image Folder?
- That's fine! Main image still shows
- Just won't have extra gallery images
- Add images anytime later!

---

## 📱 **Where Prices Update**

When you change a price in `data/products.json`:

✅ **Homepage** - Price updates on product grid
✅ **Product Detail Page** - Price shows on detail page
✅ **Both everywhere** - Because both read from same JSON file!

No need to update twice - change ONCE, updates EVERYWHERE! 🎉

---

## 🎯 **Quick Checklist: Add New Product**

- [ ] Decide on product ID (e.g., `my-wooden-bowl`)
- [ ] Prepare main image (e.g., `my-wooden-bowl.jpg`)
- [ ] Open `admin-add-product.html` in browser
- [ ] Fill out the form
- [ ] Click "Add Product to JSON"
- [ ] Copy the generated JSON
- [ ] Edit `data/products.json` and paste before `]`
- [ ] Save and upload `data/products.json`
- [ ] Create folder `/images/products/my-wooden-bowl/`
- [ ] Add main image to `/images/products/`
- [ ] Add extra images to the folder (pic1.jpg, pic2.jpg, etc.)
- [ ] Upload all images to server
- [ ] Refresh website
- [ ] New product appears! ✅

---

## 🔍 **Find & Replace to Change Multiple Prices**

If you want to change all prices by 10%:

**Using text editor Find & Replace:**

1. Open `data/products.json` in text editor
2. Press Ctrl+H (or Cmd+H) for Find & Replace
3. Find: `"price": 3500` 
4. Replace with: `"price": 3850` (10% increase)
5. Repeat for other prices

Or just edit them one by one - it's fast!

---

## 📋 **Common Edits & Examples**

### Change Price
```json
"price": 3500  →  "price": 4000
```

### Change Size
```json
"size": "6 spoons + stand"  →  "size": "8 spoons + stand"
```

### Change Description
```json
"description": "Old description"  →  "description": "New description"
```

### Add Feature
```json
"features": [
  "Feature 1",
  "Feature 2",
  "NEW FEATURE HERE"  ← Add this line
]
```

### Change Category
```json
"category": "kitchen"  →  "category": "trays"
```

### Change Price Label
```json
"priceLabel": null  →  "priceLabel": "From"
```

---

## ⚠️ **Important Rules**

### DO ✅
- Keep commas between items
- Use double quotes for text
- Use numbers for prices (no Rs. symbol)
- Keep IDs simple (no spaces or special chars)
- File names with lowercase (pic1.jpg not Pic1.JPG)

### DON'T ❌
- Remove commas between products
- Use single quotes for text
- Put text in price field
- Use spaces in product IDs
- Mix file naming (pic1.JPG and pic2.jpg won't work - be consistent)

---

## 🆘 **Troubleshooting**

### "Product doesn't appear"
- [ ] Check `id` field is correct
- [ ] Check comma after previous product
- [ ] Make sure JSON is valid (no syntax errors)
- [ ] Refresh browser (Ctrl+Shift+R)

### "Images not showing"
- [ ] Main image: Check `/images/products/spoon-set.jpg` exists
- [ ] Extra images: Check folder `/images/products/spoon-set/` has pic1.jpg, pic2.jpg
- [ ] File names match exactly (case-sensitive!)
- [ ] Refresh browser

### "JSON error"
- [ ] Check for missing commas
- [ ] Check for unclosed brackets
- [ ] Use an online JSON validator: jsonlint.com

### "Prices not updating"
- [ ] Save the file (Ctrl+S)
- [ ] Re-upload to server
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Hard refresh (Ctrl+Shift+R)

---

## 📞 **Quick Reference**

| Task | Time | Steps |
|------|------|-------|
| Change price | 1 min | Edit JSON, save, upload |
| Change size/description | 1 min | Edit JSON, save, upload |
| Add new product | 5 min | Use admin panel, edit JSON, upload |
| Add images | 5 min | Create folder, add pic1.jpg, etc., upload |
| Update 5 prices | 5 min | Find & replace in JSON |

---

## 🎉 **You're Ready!**

Everything is now:
- ✅ Simple to edit
- ✅ Easy to understand
- ✅ Quick to update
- ✅ Automatic (prices update everywhere)
- ✅ Flexible (add images anytime)

**Start editing your products!** 🌳🎁
