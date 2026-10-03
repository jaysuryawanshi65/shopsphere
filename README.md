# 🛍️ ShopSphere — Modern E-Commerce Frontend

ShopSphere is a modern, responsive e-commerce frontend application built with **React.js, JavaScript, Tailwind CSS, React Router and REST API integration**.

The project is designed as a **real-world frontend portfolio project** rather than a simple static website. It demonstrates reusable components, client-side state management, API consumption, responsive UI, form validation, persistent browser storage, and common e-commerce user flows.

---

## 📸 Project Overview

ShopSphere provides a complete shopping experience:

- Browse products
- Search products
- Filter by category
- Filter by maximum price
- Sort products
- View detailed product information
- Add products to cart
- Update cart quantities
- Save products to wishlist
- Persist cart and wishlist using localStorage
- Complete a validated checkout flow
- Switch between light and dark themes
- Handle loading and empty states
- Use responsive layouts for desktop, tablet and mobile

---

## 🚀 Tech Stack

### Frontend

- React.js
- JavaScript ES6+
- HTML5
- CSS3
- Tailwind CSS
- React Router
- Axios
- Lucide React

### API

- DummyJSON REST API

### Development Tools

- Vite
- npm
- Git
- GitHub

---

## 📂 Project Structure

```text
shopsphere/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LoadingGrid.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── context/
│   │   └── StoreContext.jsx
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Products.jsx
│   │   ├── Success.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/shopsphere.git
```

Replace `YOUR_USERNAME` with your GitHub username.

Then:

```bash
cd shopsphere
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start development server

```bash
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173
```

Open that URL in your browser.

---

## 4. Create production build

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build:

```bash
npm run preview
```

---

# 🌐 API Integration

ShopSphere uses the **DummyJSON API** to retrieve product information.

Base API:

```text
https://dummyjson.com
```

The project retrieves products from:

```text
/products?limit=100
```

Individual product details are retrieved using:

```text
/products/{id}
```

API calls are centralized inside:

```text
src/services/api.js
```

Example:

```javascript
export const getProducts = async () =>
  (await api.get("/products?limit=100")).data.products;
```

This keeps API-related logic separate from UI components.

---

# 🧩 Main Features

## 1. Home Page

The homepage contains:

- Hero section
- Featured products
- Product cards
- Store benefits
- Responsive layout
- Navigation to the product catalog

---

## 2. Product Catalog

Users can:

- Search products
- Filter by category
- Filter by maximum price
- Sort by:
  - Featured
  - Rating
  - Price low → high
  - Price high → low
  - Name A → Z

Example URL:

```text
/products?search=phone
```

---

## 3. Product Details

Each product has a dedicated page:

```text
/product/:id
```

The page displays:

- Product image
- Product name
- Category
- Rating
- Price
- Description
- Stock information
- Quantity selector
- Add to cart
- Wishlist button
- Delivery information

---

## 4. Shopping Cart

Users can:

- Add products
- Increase quantity
- Decrease quantity
- Remove products
- View subtotal
- View shipping
- View tax
- View total

Cart data is persisted using:

```javascript
localStorage
```

So refreshing the browser does not immediately remove the cart.

---

## 5. Wishlist

Users can save products using the heart button.

Wishlist data is also stored in:

```text
localStorage
```

The wishlist can be accessed from:

```text
/wishlist
```

---

## 6. Checkout

The checkout page includes:

### Contact information

- First name
- Last name
- Email

### Shipping information

- Address
- City
- ZIP code

### Payment information

- Card number

The form performs client-side validation before allowing the order to be submitted.

> Payment is simulated for portfolio/demo purposes. No real payment is processed.

---

## 7. Dark Mode

ShopSphere supports:

- Light mode
- Dark mode

The selected theme is stored in:

```text
localStorage
```

The application restores the selected theme when the user returns.

---

## 8. Responsive Design

The UI is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

Tailwind CSS responsive utilities are used throughout the application.

---

# 🧠 State Management

ShopSphere uses **React Context API** for global shopping state.

Main state includes:

```text
cart
wishlist
theme
```

The context also provides functions such as:

```text
addToCart()
updateQty()
removeFromCart()
clearCart()
toggleWishlist()
isWishlisted()
```

This avoids passing cart and wishlist state through many levels of components.

---

# 💾 Local Storage

The following data is persisted in the browser:

```text
ss_cart
ss_wishlist
ss_theme
```

This provides a more realistic shopping experience without requiring a backend database.

---

# 🛡️ User Experience States

The application includes common production-style UI states:

### Loading

Skeleton loaders are displayed while product data is being retrieved.

### Empty

Examples:

- Empty cart
- Empty wishlist
- No products found

### Validation

Checkout fields display validation errors when required information is missing or invalid.

### 404

Unknown routes are redirected to a custom 404 page.

---

# 📱 Application Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/products` | Product catalog |
| `/product/:id` | Product details |
| `/wishlist` | Saved products |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |
| `/success` | Order confirmation |
| `/404` | Not found |

---

# 🎨 UI Architecture

The application uses reusable components.

For example:

```text
ProductCard
Navbar
Footer
LoadingGrid
```

Instead of creating separate markup for every product, the same `ProductCard` component receives product data as props.

Example:

```jsx
<ProductCard product={product} />
```

This improves:

- Reusability
- Maintainability
- Consistency
- Development speed

---

# 📦 Deployment

## Vercel

ShopSphere can be deployed to Vercel.

### Steps

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the project.
5. Use:

```text
Build Command:
npm run build

Output Directory:
dist
```

6. Deploy.

Because the application uses the DummyJSON API, no backend environment variable is required.

---

# 🐙 GitHub Setup

## Initialize Git

Inside the project folder:

```bash
git init
```

Add files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial commit - ShopSphere e-commerce frontend"
```

Create a GitHub repository named:

```text
shopsphere
```

Then connect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/shopsphere.git
```

Push:

```bash
git branch -M main
git push -u origin main
```

---

# 📝 Resume Project Description

Use this version on your resume:

### ShopSphere — E-Commerce Web Application

**Tech:** React.js, JavaScript, Tailwind CSS, React Router, Axios, REST API

> Developed a responsive e-commerce frontend using React.js and Tailwind CSS with REST API integration for dynamic product data. Implemented product search, category and price filtering, sorting, product details, cart and wishlist state management, localStorage persistence, checkout form validation, loading states, and light/dark theme support.

### Resume Bullet Points

- Developed a responsive e-commerce frontend using **React.js, JavaScript and Tailwind CSS** with reusable component architecture.
- Integrated **REST APIs using Axios** to dynamically fetch and display product data.
- Implemented **search, category filtering, price filtering, sorting, cart and wishlist functionality**.
- Added **localStorage-based persistence** for shopping cart, wishlist and theme preferences.
- Built a validated **checkout workflow** with loading, empty, error and success states.

---

# 🎤 Interview Questions You Can Expect

## React

### Q1. Why did you use React?

React allows the UI to be divided into reusable components and makes it easier to manage dynamic application state.

### Q2. Why did you create ProductCard as a reusable component?

Because multiple products use the same UI structure. The component receives different product data through props.

### Q3. How is the cart managed?

The cart is managed through React Context API and persisted using localStorage.

### Q4. Why use Context API?

Cart and wishlist data are required by multiple components. Context avoids unnecessary prop drilling.

### Q5. How does search work?

The application reads the search query and filters the locally retrieved product list based on product title, brand and category.

### Q6. How does checkout validation work?

The form reads submitted values, validates required fields and formats such as email, ZIP code and card number, and displays field-level errors.

### Q7. How would you connect this project to a real backend?

I would replace the DummyJSON endpoints with backend REST endpoints, add authentication, connect products/orders to a database, and use secure server-side payment processing.

---

# 🛣️ Development Roadmap & Future Improvements

The current version is a **frontend-focused MVP**. You can progressively turn ShopSphere into a production-style application using the roadmap below.

## ✅ Phase 1 — Frontend Polish

- [ ] Product image gallery with thumbnails
- [ ] Image zoom on product details
- [ ] Related/recommended products
- [ ] Recently viewed products
- [ ] `New`, `Best Seller`, and `Limited Stock` badges
- [ ] Better mobile filter drawer
- [ ] Toast notifications for cart/wishlist actions
- [ ] Confirmation modal before removing cart items
- [ ] Improved loading, empty and API-error states
- [ ] Accessibility improvements and keyboard navigation
- [ ] Smooth route/page transitions
- [ ] Scroll-to-top on route changes

## 🔐 Phase 2 — Authentication & User Features

- [ ] Registration and login
- [ ] Logout and password reset
- [ ] Protected routes
- [ ] User profile
- [ ] Saved addresses
- [ ] Order history and tracking
- [ ] Account settings

Suggested routes:

```text
/account
/account/profile
/account/orders
/account/wishlist
/account/addresses
```

## 🗄️ Phase 3 — Real Backend

Replace DummyJSON with a real backend.

Recommended architecture:

```text
React.js
   ↓
ASP.NET Core Web API
   ↓
Entity Framework Core
   ↓
PostgreSQL / MySQL
```

Backend modules:

```text
Authentication
Users
Products
Categories
Cart
Wishlist
Orders
Payments
Reviews
Addresses
```

Example endpoints:

```text
POST   /api/auth/register
POST   /api/auth/login
GET    /api/products
GET    /api/products/{id}
GET    /api/categories
GET    /api/cart
POST   /api/cart/items
PUT    /api/cart/items/{id}
DELETE /api/cart/items/{id}
GET    /api/orders
POST   /api/orders
GET    /api/orders/{id}
GET    /api/reviews
POST   /api/reviews
```

## 💳 Phase 4 — Real Checkout & Payments

The current checkout is a demo only.

Future version:

- [ ] Payment gateway integration
- [ ] Server-side payment order creation
- [ ] Payment verification
- [ ] Successful/failed/cancelled payment states
- [ ] Order confirmation email
- [ ] Secure server-side handling of payment secrets

For an India-focused project, Razorpay can be considered.

> Never expose secret payment keys in the React frontend.

## 📦 Phase 5 — Order Management

Implement:

```text
Order Placed
     ↓
Payment Confirmed
     ↓
Processing
     ↓
Packed
     ↓
Shipped
     ↓
Out for Delivery
     ↓
Delivered
```

Users should see order number, date, products, quantity, price, address, payment status, order status and tracking information.

## ⭐ Phase 6 — Reviews & Ratings

- [ ] Star ratings
- [ ] Written reviews
- [ ] Review submission/edit/delete
- [ ] Review sorting
- [ ] Verified purchase badge
- [ ] Average rating calculation

## 🧑‍💼 Phase 7 — Admin Dashboard

Create:

```text
Dashboard
Products
Categories
Orders
Customers
Reviews
Coupons
Analytics
Settings
```

Dashboard metrics:

```text
Total Revenue
Total Orders
Total Customers
Total Products
Pending Orders
Low Stock Products
```

Admins should be able to add/edit/delete products, update inventory, manage categories, update order status and process cancellations/refunds.

## 📊 Phase 8 — Analytics

Add:

- [ ] Revenue by month
- [ ] Orders by month
- [ ] Top-selling products
- [ ] Revenue by category
- [ ] Average order value
- [ ] New vs returning customers
- [ ] Conversion metrics

Use a charting library such as **Recharts**.

## ⚡ Phase 9 — Performance

- [ ] Lazy-load routes
- [ ] Lazy-load images
- [ ] Optimize images
- [ ] Reduce unnecessary React re-renders
- [ ] Memoize expensive calculations
- [ ] Pagination/infinite scrolling
- [ ] API response caching
- [ ] Bundle-size optimization

Consider **TanStack Query** for API caching, mutations and request state management.

## 🧪 Phase 10 — Testing

### Unit tests

Test cart calculations, filters, sorting, validation and wishlist operations.

### Component tests

Test:

```text
ProductCard
Navbar
Cart
Checkout
ProductDetails
```

### End-to-end tests

```text
Open website
   ↓
Search product
   ↓
Open product
   ↓
Add to cart
   ↓
Checkout
   ↓
Place order
   ↓
Order success
```

Possible tools:

```text
Vitest
React Testing Library
Playwright
```

## 🔒 Phase 11 — Security

For a real production application:

- [ ] Server-side validation
- [ ] Secure authentication
- [ ] Password hashing
- [ ] JWT/access-token handling
- [ ] Refresh-token strategy
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] CORS configuration
- [ ] Authorization checks
- [ ] Secure HTTP headers
- [ ] Never expose secret keys in frontend code

Remember:

```text
Frontend validation ≠ security
```

Important validation and authorization must also happen on the backend.

## 🚀 Phase 12 — DevOps & Production

Possible architecture:

```text
                  GitHub
                    │
                   CI/CD
              ┌─────┴─────┐
              ↓           ↓
        React Frontend   ASP.NET API
              ↓           ↓
           Vercel     Cloud Server
                          ↓
                    PostgreSQL/MySQL
```

Future DevOps work:

- [ ] GitHub Actions
- [ ] Automated builds
- [ ] Automated tests
- [ ] Environment variables
- [ ] Docker
- [ ] Production database
- [ ] Logging
- [ ] Monitoring
- [ ] Error tracking
- [ ] HTTPS
- [ ] Custom domain

# 🎯 Recommended Upgrade Order

Don't build everything at once.

```text
CURRENT FRONTEND
       ↓
Frontend polish
       ↓
Authentication
       ↓
Real backend
       ↓
Database
       ↓
Real cart & orders
       ↓
Payment integration
       ↓
Reviews
       ↓
Admin dashboard
       ↓
Analytics
       ↓
Testing
       ↓
Performance optimization
       ↓
Docker + CI/CD
       ↓
Production deployment
```

# 💼 Why These Improvements Matter

| Improvement | Skill demonstrated |
|---|---|
| Search & filters | State management |
| Product details | Routing |
| Cart | Global state |
| Wishlist | State persistence |
| REST API | API integration |
| Authentication | Protected routes |
| Checkout | Forms & validation |
| Admin dashboard | Complex UI |
| Analytics | Data visualization |
| Lazy loading | Performance |
| Testing | Code quality |
| Accessibility | Professional frontend practices |
| CI/CD | Deployment awareness |

# 🏆 Final Portfolio Target

```text
Frontend
React.js
Tailwind CSS
React Router
Redux Toolkit / Context
TanStack Query

Backend
ASP.NET Core Web API

Database
PostgreSQL / MySQL

Authentication
JWT

Payments
Payment Gateway

Testing
Vitest
React Testing Library
Playwright

DevOps
Docker
GitHub Actions
Cloud Deployment
```

At that stage, ShopSphere demonstrates frontend architecture, API integration, state management, authentication, e-commerce workflows, testing, performance and deployment.

# 👨‍💻 Author

**Jay Suryavanshi**

Frontend Developer | React.js | JavaScript

This project was developed as a portfolio project to demonstrate practical frontend development skills and real-world e-commerce workflows.

---

## ⭐ If you found this project useful

Feel free to fork the repository and build your own version.
