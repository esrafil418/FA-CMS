# FA-CMS - Content Management System

A full-stack Content Management System built with React and Express.js for managing products, comments, users, orders, and discount codes. Features a modern admin dashboard with real-time data management capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Development](#development)

---

## 📂 Repository Structure

- **Frontend Repository:** [FA-CMS](https://github.com/esrafil418/FA-CMS) *(this repository)*
- **Backend Repository:** [FA-CMS_backend](https://github.com/esrafil418/FA-CMS_backend)

---

## ✨ Features

### Admin Dashboard
- 📦 **Products Management** - Add, edit, delete, and view product details
- 💬 **Comments Management** - Moderate comments, approve/reject user feedback
- 👥 **Users Management** - Manage user accounts and information
- 📦 **Orders Management** - View and manage customer orders
- 🏷️ **Discounts Management** - Create and manage discount codes
- 📊 **Real-time Updates** - Instant data synchronization
- 🔐 **RTL Support** - Full Persian (Farsi) language support

### Product Features
- Create products with detailed information (title, price, stock, image, popularity, sales, colors)
- View product popularity and sales metrics
- Edit product information
- Delete products with confirmation modal
- Quick product details view

### Comment Management
- View all user comments with user and product information
- Read full comment text in modal
- Edit comments
- Delete comments
- Accept/reject comments for moderation
- Track comment submission date and time

### User Management
- View all registered users
- Edit user profiles (name, email, phone, address, etc.)
- Delete user accounts
- Track user purchase history and scores

### Order Management
- View all orders with customer and product details
- Toggle order status (active/inactive)
- Delete orders
- Track order date, time, and pricing

### Discount Management
- View all active discount codes
- Toggle discount status
- Delete discount codes
- Track discount percentage and associated products

---

## 🛠 Tech Stack

### Frontend
- **React** 19.2.6 - UI library
- **Vite** 8.0.12 - Fast build tool and dev server
- **React Router DOM** 7.17.0 - Client-side routing
- **Bootstrap** 5.3.8 - CSS framework
- **React Icons** 5.6.0 - Icon library
- **ESLint** - Code quality
- **Biome** - Code formatter

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 4.18.1 - Web framework
- **MySQL** 2.18.1 - Database

### Database
- **MySQL** - Relational database
  - Tables: Products, Comments, Users, Orders, Offs, Admins

---

## 🚀 Installation

### Prerequisites
- **Node.js** 14+ and **npm** 6+
- **MySQL** server running locally or remotely
- **Git** (optional, for cloning)

### Backend Setup

- **Start backend server**
   ```bash
   node server.js
   ```
   
   You should see: `Server Run On 3000 Port`
   

### Frontend Setup

- **Start development server**
   ```bash
   npm run dev
   ```
   
   You should see: `VITE v... ready in ... ms`
   
   Frontend is now available at: `http://localhost:5173`

---

## 🎯 Getting Started

1. **Start the backend server** (Terminal 1)
   ```bash
   cd FA-CMS_backend
   npm install
   node server.js
   ```

2. **Start the frontend dev server** (Terminal 2)
   ```bash
   cd FA-CMS
   npm install
   npm run dev
   ```

3. **Open in browser**
   - Navigate to `http://localhost:5173`
   - You should see the admin dashboard

4. **Start managing content**
   - Use the sidebar to navigate between sections
   - Products: Add, edit, delete products
   - Comments: Moderate user comments
   - Users: Manage user accounts
   - Orders: Track customer orders
   - Discounts: Create discount codes

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints Overview

#### Products
```
GET    /api/products           - Get all products
GET    /api/products/:id       - Get single product
POST   /api/products           - Create new product
PUT    /api/products/:id       - Update product
DELETE /api/products/:id       - Delete product
```

#### Comments
```
GET    /api/comments           - Get all comments
GET    /api/comments/:id       - Get single comment
POST   /api/comments           - Create comment
PUT    /api/comments/:id       - Update comment
DELETE /api/comments/:id       - Delete comment
POST   /api/comments/accept/:id     - Accept comment
POST   /api/comments/reject/:id     - Reject comment
```

#### Users
```
GET    /api/users              - Get all users
GET    /api/users/:id          - Get single user
POST   /api/users              - Create user
PUT    /api/users/:id          - Update user
DELETE /api/users/:id          - Delete user
```

#### Orders
```
GET    /api/orders             - Get all orders
GET    /api/orders/:id         - Get single order
DELETE /api/orders/:id         - Delete order
PUT    /api/orders/active-order/:id/:status - Update order status
```

#### Discounts (Offs)
```
GET    /api/offs               - Get all discounts
GET    /api/offs/:id           - Get single discount
DELETE /api/offs/:id           - Delete discount
PUT    /api/offs/active-off/:id/:status - Update discount status
```

#### Admins
```
GET    /api/admins             - Get all admins
GET    /api/admins/:id         - Get single admin
```

### Request/Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Validation error 1", "Validation error 2"]
}
```

### Product Schema
```javascript
{
  id: number,
  title: string,
  price: number,
  count: number,
  img: string (URL),
  popularity: number (0-100),
  sale: number,
  colors: number
}
```

### Comment Schema
```javascript
{
  id: number,
  body: string,
  date: string (YYYY-MM-DD),
  hour: string (HH:MM),
  userID: number,
  productID: number,
  isAccept: number (0 or 1)
}
```

### User Schema
```javascript
{
  id: number,
  firsname: string,
  lastname: string,
  username: string,
  password: string,
  phone: string,
  email: string,
  city: string,
  address: string,
  score: number,
  buy: number
}
```

### Order Schema
```javascript
{
  id: number,
  productID: number,
  userID: number,
  date: string,
  hour: string,
  price: number,
  off: number,
  sale: number,
  popularity: number,
  count: number,
  sale_count: number,
  isActive: number (0 or 1)
}
```

### Discount Schema
```javascript
{
  id: number,
  code: string,
  percent: number,
  adminID: number,
  productID: number,
  date: string,
  isActive: number (0 or 1)
}
```

For detailed API documentation, see `FA-CMS_backend/api_doc.txt`

---

## 🔐 Security Notes

⚠️ **Important for Production:**

1. **Change default credentials** in database configuration
2. **Enable MySQL authentication** - Set strong passwords
3. **Use HTTPS** - Encrypt data in transit
4. **Validate all inputs** - Already implemented in API
5. **Use environment variables** - Keep secrets secure
6. **Enable SQL logging** - Monitor for suspicious queries
7. **Regular backups** - Backup database regularly
8. **Update dependencies** - Keep packages up to date

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [MySQL Documentation](https://dev.mysql.com/doc)
- [Vite Documentation](https://vitejs.dev)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

---

## Version History

**v1.0.0** - Initial Release
- Products management
- Comments moderation
- Users management
- Orders tracking
- Discounts management
- Admin dashboard