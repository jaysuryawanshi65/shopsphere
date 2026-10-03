# ShopSphere

ShopSphere is a modern e-commerce frontend built with React, Vite, and Tailwind CSS. It delivers a polished storefront experience with product browsing, filtering, wishlist management, cart updates, and a secure checkout flow. The app uses live product data from the DummyJSON API to simulate a real-world shopping experience.

## Overview

This project is designed as a frontend portfolio/demo e-commerce application. It focuses on practical e-commerce UX patterns such as:

- Responsive storefront layout
- Product catalog browsing and filtering
- Search and sorting
- Detailed product pages
- Wishlist and cart persistence using localStorage
- Theme switching between light and dark mode
- Form validation in checkout
- Clean navigation and reusable UI components

## Live Features

- Home page with featured products and promotional hero section
- Product listing page with category filters and price slider
- Search support via query parameters
- Sorting by featured, rating, name, and price
- Product detail page with product galleries, pricing, stock status, and actions
- Add to cart / update quantity / remove items
- Wishlist toggle for saving favorite products
- Persistent cart and wishlist across sessions
- Checkout form with validation for contact, address, and payment fields
- Success state after placing a demo order
- 404 fallback page for invalid routes
- Theme toggle with dark mode styling

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React
- DummyJSON API

## Project Structure

```text
shopsphere/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LoadingGrid.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── StoreContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Products.jsx
│   │   ├── Success.jsx
│   │   └── Wishlist.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── package-lock.json
├── README.md
└── ...
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/jaysuryawanshi65/shopsphere.git
cd shopsphere
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## API Integration

This frontend uses the DummyJSON public API for product data.

- Base URL: `https://dummyjson.com`
- Product list endpoint: `/products?limit=100`
- Product detail endpoint: `/products/{id}`

API logic is centralized in:

```text
src/services/api.js
```

## Key User Journeys

### Product discovery
Users can browse products, filter by category, set a maximum price, and sort by various criteria.

### Product detail viewing
Each product page provides details such as title, description, rating, price, stock, and product image gallery.

### Shopping cart and wishlist
Users can add products to the cart or wishlist. The app persists state in localStorage so the selections remain available after refresh.

### Checkout
The app includes a checkout form with validation for required fields, email format, ZIP code, and card number. It simulates a secure order flow without processing real payments.

## Styling and UI

The project uses Tailwind CSS to create a modern, clean, and responsive storefront design. The app includes a dark mode toggle and reusable card-based UI patterns across pages.

## Notes

- This is a frontend-only e-commerce app.
- The payment flow is a demo and does not connect to a real backend/payment provider.
- Product data is loaded from a public mock API, so it behaves like a real online store demo.

## Why This Project Stands Out

ShopSphere is not just a storefront; it is a practical frontend project designed to demonstrate how a modern e-commerce app is structured in real development scenarios.

It includes:

- Reusable component architecture
- Context-based global state management
- Persistent shopping cart and wishlist experience
- Responsive design across devices
- Clean route-based navigation
- Real API data integration
- Checkout validation and smooth demo purchase flow

This makes it a strong portfolio project for showcasing React fundamentals, UI/UX thinking, and real-world ecommerce patterns.

## Further Improvements

The project already has a complete frontend flow, but there are several strong next-step improvements that can make it more production-ready:

- Backend integration with Node.js, Express, or Firebase
- User authentication and profile management
- Secure payment gateway integration such as Stripe or Razorpay
- Real product reviews and rating system
- Search suggestions with debouncing and smarter filtering
- Admin dashboard for product, order, and inventory management
- Order history and user dashboard
- Product recommendations based on category and user behavior
- Improved performance optimization with lazy loading and code splitting
- Testing setup using Vitest or React Testing Library
- Deployment to Vercel, Netlify, or Firebase Hosting
- PWA support for installable mobile-like shopping experience

These enhancements would move the application from a polished frontend demo to a more complete real-world commerce platform.

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a new feature branch
3. Make your changes
4. Commit and push your branch
5. Open a pull request

## Contact

For questions or collaboration, feel free to reach out through the project repository or open an issue in the GitHub project.

## Summary

ShopSphere is a complete frontend shopping experience built to showcase modern React development, reusable UI architecture, and practical e-commerce workflows in a clean, production-style design.
