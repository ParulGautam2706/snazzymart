# 🛒 SnazzyMart — E-Commerce Website

A full-featured e-commerce web application built with the MERN stack, offering a seamless shopping experience with product browsing, cart management, secure checkout, payment integration, and a powerful admin dashboard.

---

## 🚀 Live Demo

> [Add your deployed link here — e.g. https://snazzymart.onrender.com]

---

## 📸 Screenshots

> Add screenshots of your project here

---

## ✨ Features

### 🛍️ Customer Side
- Browse and search products by category
- Product detail pages with images and descriptions
- Add to cart, update quantity, remove items
- User authentication — register, login, logout (JWT)
- Secure checkout flow
- Payment gateway integration
- Order confirmation and history

### 🔧 Admin Side
- Admin dashboard with sales overview
- Add, edit, and delete products
- Manage inventory and stock levels
- View and update order statuses
- User management

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| Payment | Payment Gateway Integration |
| Deployment | Render / Netlify |

---

## 📁 Project Structure

```
snazzymart/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   ├── context/        # Auth & Cart context
│   │   └── App.jsx
├── server/                 # Node.js + Express backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── middleware/         # Auth middleware
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/ParulGautam2706/snazzymart.git
cd snazzymart
```

**2. Install server dependencies**
```bash
cd server
npm install
```

**3. Install client dependencies**
```bash
cd ../client
npm install
```

**4. Set up environment variables**

Create a `.env` file inside the `server/` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYMENT_API_KEY=your_payment_gateway_key
```

**5. Run the app**

In one terminal (backend):
```bash
cd server
npm run dev
```

In another terminal (frontend):
```bash
cd client
npm run dev
```

**6. Open in browser**
```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Add product (admin) |
| PUT | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |

### Orders
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders` | Place new order |
| GET | `/api/orders/:userId` | Get user orders |
| GET | `/api/orders` | Get all orders (admin) |
| PUT | `/api/orders/:id` | Update order status (admin) |

---

## 🌍 Deployment

### Deploy on Render
1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Set build command: `npm install && npm run build`
5. Set start command: `node server/server.js`
6. Add your environment variables in the Render dashboard
7. Click Deploy

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Santosh Gautam**
- GitHub: []
- LinkedIn: []

**Sahil Kaushik**
- GitHub: []
- LinkedIn: []

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
