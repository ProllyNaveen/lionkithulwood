# Implementation Guide 🚀

Complete step-by-step instructions to get your new catalog working with clickable products and easy price management.

---

## What's Changed

✅ Products are now **clickable**  
✅ Each product has a **detail page**  
✅ Prices are in ONE easy-to-edit file  
✅ Multiple images per product (just add folders)  
✅ Full product descriptions  
✅ Size/material information  
✅ Product features list  

---

## Step 1: Extract Files (if you downloaded ZIP)

If you downloaded `lion-industries-website-updated.zip`:

1. Right-click the ZIP file
2. Click "Extract All" or "Unzip"
3. You now have the updated website folder

---

## Step 2: Test Everything Works

1. **Open `index.html` in your browser**
   - Click File → Open → Select `index.html`
   - OR drag `index.html` onto your browser

2. **Verify products load**
   - You should see your product grid
   - Try filter buttons (All, Kitchenware, etc.)

3. **Test clicking a product**
   - Click any product
   - You should see a detailed product page
   - Go back button should work

✅ If everything shows, continue!

---

## Step 3: Update Product Prices

This is the easiest part!

1. **Find the file:** `data/products.json`
2. **Open in a text editor** (Notepad, VSCode, etc.)
3. **Search for the product** (Ctrl+F or Cmd+F)
4. **Find the price line:**
   ```json
   "price": 3500,
   ```
5. **Change the number** to your new price
6. **Save the file**

**Example:**
```json
// Before
"id": "spoon-set",
"name": "Kithul Wood Spoon Set",
"price": 3500,

// After (new price)
"id": "spoon-set",
"name": "Kithul Wood Spoon Set",
"price": 4200,
```

**Refresh your browser** → New price appears automatically! ✨

---

## Step 4: Update Product Information (Optional)

In `data/products.json`, each product has these editable fields:

```json
{
  "id": "spoon-set",                              // Keep this the same
  "name": "Kithul Wood Spoon Set",                // Edit product name
  "category": "kitchen",                          // Don't change (kitchen/trays/home)
  "image": "spoon-set.jpg",                       // Keep this the same
  "price": 3500,                                  // ✏️ Edit price here
  "priceLabel": null,                             // Can be "From" or null
  "sizes": "6 spoons + stand",                    // ✏️ Edit sizes here
  "description": "A beautiful set of...",         // ✏️ Edit description here
  "material": "Kithul Wood",                      // ✏️ Edit material here
  "details": [
    "Handcrafted from premium...",                // ✏️ Edit features here
    "Set includes 6 spoons...",
    "Food-safe finish"
  ]
}
```

---

## Step 5: Add Product Images (The Cool Part!)

### Current Setup (You Already Have This)
```
/images/products/
├── spoon-set.jpg              ← Main product image
├── mortar-pestle.jpg
├── tea-cup-set.jpg
└── ... (all other products)
```

### New Setup (Add This)
Create folders for each product where you want multiple images:

```
/images/products/
├── spoon-set.jpg              (main image - keep this!)
├── spoon-set/                 (NEW FOLDER)
│   ├── detail-1.jpg
│   ├── detail-2.jpg
│   └── lifestyle.jpg
├── mortar-pestle.jpg          (main image - keep this!)
├── mortar-pestle/             (NEW FOLDER)
│   ├── detail-close.jpg
│   └── in-use.jpg
└── ... (continue for others)
```

### How to Add Images

**Option 1: Using File Manager (Easiest)**
1. Open file manager
2. Navigate to `/images/products/`
3. Right-click → New Folder
4. Name it: `spoon-set` (exactly match the product ID)
5. Drag your images into that folder
6. Repeat for other products

**Option 2: Using Command Line**
```bash
mkdir /images/products/spoon-set/
mkdir /images/products/mortar-pestle/
mkdir /images/products/tea-cup-set/
# ... etc for each product
```

Then copy your images:
```bash
cp your-images/*.jpg /images/products/spoon-set/
```

### Important Rules

✅ **DO:**
- Keep the main image: `spoon-set.jpg`
- Create folder with same name: `spoon-set/`
- Add images inside: `spoon-set/image-1.jpg`
- Use clear names: `detail.jpg`, `lifestyle.jpg`, `angle.jpg`

❌ **DON'T:**
- Delete or move the main images
- Use different folder names
- Use spaces in file names (use hyphens instead)
- Use UPPERCASE extensions (.JPG vs .jpg)

### What Happens

When you add images:
1. Main image still shows on homepage
2. User clicks product
3. Detail page shows main image
4. Thumbnails of your new images appear below
5. User clicks thumbnail to see different views
6. Gallery shows all angles/details!

---

## Step 6: Customize Product Details

Each product can have:
- ✏️ Full description
- ✏️ Size/dimensions  
- ✏️ Material type
- ✏️ Feature list

Example in `data/products.json`:
```json
{
  "id": "cutting-boards",
  "name": "Kithul Wood Cutting Boards",
  "description": "Hand-crafted kithul wood cutting boards. Durable, beautiful, and food-safe.",
  "sizes": "10x13\" to 12x15\"",
  "material": "Kithul Wood",
  "details": [
    "Available from 10x13\" to 12x15\"",
    "Hand-crafted kithul wood",
    "Natural antimicrobial properties",
    "Perfect for a chef's kitchen"
  ]
}
```

Update these to match your products!

---

## Step 7: Test the Complete System

1. **Homepage:**
   - Open `index.html`
   - See product grid
   - Prices should be your updated prices

2. **Filter Products:**
   - Click filter buttons
   - Products should filter correctly

3. **Product Pages:**
   - Click any product
   - See detail page
   - Verify images load
   - See product info
   - See WhatsApp button

4. **Image Gallery:**
   - If you added multiple images
   - Thumbnails should appear
   - Click to switch images
   - Works smoothly

✅ Everything working? You're done!

---

## File Structure When Complete

```
lion-industries-website/
├── index.html                    (homepage)
├── product-details.html          (detail page)
├── styles.css                    (styling)
├── script.js                     (updated)
├── data/
│   └── products.json            ⭐ YOUR PRICES & INFO HERE
├── images/
│   ├── logo.png
│   ├── cover.jpg
│   └── products/
│       ├── spoon-set.jpg        (main)
│       ├── spoon-set/           (extra images)
│       │   ├── detail-1.jpg
│       │   ├── detail-2.jpg
│       │   └── lifestyle.jpg
│       ├── mortar-pestle.jpg    (main)
│       ├── mortar-pestle/       (extra images)
│       │   └── detail.jpg
│       ├── cutting-boards.jpg   (main)
│       ├── cutting-boards/      (extra images)
│       │   ├── size-1.jpg
│       │   └── size-2.jpg
│       └── ... (all other products)
├── README.md                     (full documentation)
├── QUICK_REFERENCE.md           (quick guide)
├── FOLDER_STRUCTURE.txt         (folder setup)
└── IMPLEMENTATION_GUIDE.md      (this file)
```

---

## Common Issues & Solutions

### "Images not showing on detail page"
**Solution:** Make sure the main image file name matches:
- Product ID: `spoon-set`
- Image file: `spoon-set.jpg` (not `spoon_set.jpg` or `Spoon-Set.jpg`)

### "Product doesn't appear on homepage"
**Solution:** Check `data/products.json`:
- Is the product in the array?
- Do all required fields exist?
- Is JSON syntax correct (commas, brackets)?

### "Prices won't update"
**Solution:**
1. Make sure you edited `data/products.json` (not `script.js`)
2. Save the file completely
3. Do a hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)

### "Clicking product doesn't work"
**Solution:**
1. Make sure `product-details.html` exists
2. Both HTML files should be in the same folder
3. Clear browser cache and refresh

### "Extra images showing, but thumbnails don't click"
**Solution:** Make sure images are in correct folder:
- Folder: `/images/products/{productId}/`
- Example: `/images/products/spoon-set/`

---

## Publishing to the Web

When you're ready to put this online:

1. **Web Server/Hosting:**
   - Upload entire `lion-industries-website` folder
   - Make sure all files upload (especially `/data/products.json`)

2. **Important:**
   - Keep folder structure exactly the same
   - Don't rename files
   - Keep `data/` folder at root level
   - Ensure images upload correctly

3. **Test Online:**
   - Visit your website
   - Click products
   - Check prices loaded correctly
   - Verify images show

---

## Ongoing Maintenance

### Weekly
- Check WhatsApp messages from new inquiries
- Update product availability if needed

### As Needed
- Change prices in `data/products.json`
- Add new product images
- Update descriptions
- Add new products

### Seasonal
- Update featured product descriptions
- Add seasonal items
- Adjust pricing

---

## Need Help?

1. **Pricing questions:** See `QUICK_REFERENCE.md`
2. **Image setup questions:** See `FOLDER_STRUCTURE.txt`
3. **Full documentation:** See `README.md`
4. **JSON editing help:** Text editor's find/replace feature!

---

## Done! 🎉

Your website now has:
- ✅ Clickable products
- ✅ Beautiful detail pages
- ✅ Easy price management
- ✅ Professional appearance
- ✅ No shopping cart (as requested)
- ✅ Focus on catalog & WhatsApp inquiries

Your business catalog is ready to showcase!

Good luck! 🌳🎁
