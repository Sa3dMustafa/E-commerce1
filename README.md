# 🛒 CRUD Products Management System

A simple and efficient product management system built with React and JSON Server. This project demonstrates full CRUD operations with a clean UI and scalable structure.

---

## 🚀 Features

* ➕ Add new products
* 📝 Edit existing products
* ❌ Delete products
* 🔍 View product details
* 🔄 Dynamic routing باستخدام React Router
* 💾 Local database باستخدام `db.json`

---

## 🧱 Tech Stack

* React.js
* CSS
* JSON Server

---

## 📂 Project Structure

```
src/
 ├── Components/
 │   ├── Navbar.jsx
 │   ├── Sidebar.jsx
 │   └── Product.jsx
 │
 ├── Page/
 │   ├── HomePage.jsx
 │   ├── AddProducts.jsx
 │   ├── EditProduct.jsx
 │   ├── ProductDetails.jsx
 │   └── ProductPage.jsx
 │
 ├── assets/
 │   └── login.css
 │
 └── App.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run JSON Server

```bash
npx json-server --watch db.json --port 3001
```

### 4. Run React app

```bash
npm run dev
```

---

## 🌐 API Example

```
GET    /products
POST   /products
PUT    /products/:id
DELETE /products/:id
```

---

## 🎯 Purpose

This project was built to practice:

* CRUD operations
* React component structure
* Routing and state handling
* Working with mock APIs

---

## 📌 Future Improvements

* Add authentication system
* Connect to real backend (Node.js / Firebase)
* Improve UI/UX design
* Add search and filtering

---

## 👨‍💻 Author

Developed by **Saad**
