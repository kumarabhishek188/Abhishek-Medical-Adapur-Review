# 🏥 Abhishek Medical Hall, Adapur - Smart QR Google Review Booster

A lightweight, mobile-first Google Review web application with a printable QR counter standee for **Abhishek Medical Hall, Adapur, Bihar**.

---

## 🚀 Key Features

1. **Smart 4 & 5 Star Funnel**:
   - 1, 2, and 3-star buttons are disabled to protect shop reputation.
   - 4 and 5-star buttons are highlighted with micro-animations.
2. **Instant Pre-Written Review Suggestions**:
   - Categorized high-quality reviews (Genuine Medicines, Fast Service, Stock Availability, Best Price).
   - English and Hindi / Hinglish suggestions ready with 1-tap selection.
3. **Editable Review Box**:
   - Customers can pick a suggestion, customize it, or write their own.
4. **1-Click Auto Clipboard Copy**:
   - Automatically copies the chosen review into the user's mobile clipboard when clicking "Continue to Google Review".
5. **Direct Google Maps / Search Redirection**:
   - Redirects directly to the Google business listing of **Abhishek Medical Hall, Adapur**.
6. **Printable Table Tent / Counter QR Standee Generator**:
   - Open `qr-standee.html` to generate, download high-res QR codes, and print official Google Review counter standees.

---

## 📂 Project Structure

```
AMH review/
├── index.html         # Main customer review page (mobile-first)
├── qr-standee.html    # Printable shop counter QR standee generator
├── css/
│   └── style.css      # Responsive medical theme styling
├── js/
│   ├── config.js      # Easy configuration (Shop Name, Google Link, Suggestions)
│   ├── app.js         # App logic (Ratings, Suggestions, Clipboard, Redirects)
│   └── qrcode.min.js  # Offline high-resolution QR generator
└── README.md          # Documentation & deployment guide
```

---

## 🌐 How to Host for Free

### Option 1: GitHub Pages (Recommended - 100% Free)
1. Create a free GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings > Pages > Branch: `main` > Save**.
4. You get a live link like `https://username.github.io/amh-review/`.

### Option 2: Vercel / Netlify / Cloudflare Pages
- Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant free hosting with custom HTTPS domain.

---

## 🛠️ How to Customize

All settings (Shop name, location, Google Review URL, custom suggestions) can be changed in **`js/config.js`**:

```javascript
const CONFIG = {
  shopName: "Abhishek Medical Hall",
  shopLocation: "Main Road, Adapur, East Champaran, Bihar - 845301",
  googleReviewUrl: "YOUR_GOOGLE_REVIEW_LINK_HERE",
  ...
};
```
