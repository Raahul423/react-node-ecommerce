🛒 ClassyShop – Full Stack E‑Commerce Application

ClassyShop is a full‑stack e‑commerce web application built with a strong focus on security, scalability, and real‑world architecture. This project covers the complete flow from user authentication to admin management and order handling.

As a fresher project, the goal was to move beyond tutorials and build a production‑ready MERN‑style application with clean APIs, role‑based access, and modern UI practices.


---

## 🔗🚀 Live Demo

Frontend: https://e-commerce-node-react.vercel.app
Backend API: https://e-commerce-backend-m7ml.onrender.com
Backend Architecture : https://app.eraser.io/workspace/xslMXRMKjq8l2iemp2Hz?origin=share


---

### 🔗 ✨ Features
---
👤 User Features

- User registration, login, and logout

- JWT‑based authentication (Access & Refresh tokens)

- Secure session handling using HttpOnly cookies

- Product listing with categories & sub‑categories

- Cart management

- Order placement & order history

- Responsive UI (mobile‑first)


🧑‍💼 Admin Features

- Role‑based access control (Admin / User)

- Admin dashboard

- Add / update categories & sub‑categories

- Add / manage products

- View registered users

- Manage orders


🔐 Security Features

- Password hashing using bcrypt

- JWT authentication with refresh token rotation

- Protected routes & middleware authorization

- Secure cookies to prevent XSS attacks


💳 Payments

- Payment integration under deployment and actively being finalized



---

🗂️ ER Diagram (Database Architecture)

-The following ER diagram represents the core data models and their relationships used in ClassyShop:

> 📌 ER Diagram image can be added here (./docs/er-diagram.png) for better visualization.




---

### 🔗 🛠️ Tech Stack
---

🔗 Frontend

- React (Vite)

- Tailwind CSS

- Material UI

- Custom CSS

- Context API (state management)


🔗 Backend

- Node.js

- Express.js

- RESTful APIs

- JWT Authentication (Access & Refresh Tokens)


🔗 Database

- MongoDB

- Mongoose ODM


🔗 Media Storage

- Cloudinary (image upload & optimization)


🔗 Testing & Tools

- Postman (API testing)

- Git & GitHub (version control)


🔗 Deployment

- Frontend: Vercel

- Backend: Render



---

📂 Project Structure (High Level)

classyshop/
├── client/        # React frontend
├── server/        # Node + Express backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── utils
├── .env
└── README.md


---

## ⚙️ Environment Variables

Create a .env file in the backend root and add:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


---

### 🔗 ⚙️ Installation & Setup

## 🔗Clone the repository
```bash
git clone https://github.com/Raahul423/react-node-ecommerce.git
cd react-node-ecommerce
```

## 🔗Backend
```bash 
npm install
node server.js
```

## 🔗Frontend
```bash
npm install
npm run dev
```

### 🔗install the dependencies 

## 🔗 Frontend
```bash
npm install axios motion react react-collapse react-dom react-icons react-inner-image-zoom react-range-slider-input react-router-dom react-swipeable react-toastify recharts swiper tailwindcss
```
## 🔗 Backend
```bash
npm install bcryptjs cloudinary cookie-parser cors crypto-js express helmet jsonwebtoken mongoose morgan multer slugify @getbrevo/brevo
```

## 🔗 Environment Variables
```bash 
MONGO_URI = Your_Mongodb_connection_string
CLOUDINARY_CLOUD_NAME = Your_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY = Your_CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY = Your_cloudinary_SECRET_KEY
BREVO_API_KEY = Your BREVO_API_KEY
FROM_EMAIL = Your_E-mail
APP_URL = YOUR Frontend_live_url
ACCESS_TOKEN_SECRET = Your_ACCESS_TOKEN_SECRET 
ACCESS_TOKEN_EXPIRY = Your_ACCESS_TOKEN_EXPIRY
REFRESH_TOKEN_SECRET = Your_REFRESH_TOKEN_SECRET
REFRESH_TOKEN_EXPIRY = Your_REFRESH_TOKEN_EXPIRY
```




---

🧠 What I Learned

Designing secure authentication flows with JWT & cookies

Building scalable REST APIs

Role‑based authorization (Admin vs User)

Handling real‑world e‑commerce logic

Integrating third‑party services like Cloudinary

Deploying full‑stack applications



---

📌 Future Improvements

Complete payment gateway integration

Product reviews & ratings

Wishlist feature

Advanced admin analytics



---

📄 License

This project is licensed under the MIT License.

You are free to:

Use the project for personal or commercial purposes

Modify and distribute the code

Include it in your own projects


See the LICENSE file for more details.


---

🤝 Feedback

Feedback and suggestions are always welcome!
This project represents my learning journey as a Full‑Stack Developer (Fresher) 🚀


---

⭐ If you like this project, consider giving it a star!