# 🛒 E-Commerce Web Application

A full-stack, production-ready e-commerce application built to demonstrate real-world software engineering skills including scalable architecture, clean code practices, testing, and performance optimization.

# 🚀 Live Demo

🔗 Production URL: (Coming Soon)
🔗 Staging URL: (Coming Soon)

# 🧩 Features
# 🛍️ User Features
- User authentication (Register / Login / Logout / Forgot Password)
- Secure JWT-based session handling

- Product listing with categories and filters

- Product search with debouncing

- Product detail pages with dynamic image gallery

- Shopping cart (add, update, remove items)

- Wishlist management

- Checkout flow with address management

- Order tracking and history

# 🧑‍💻 Admin Features

- Admin dashboard

- Product management (CRUD)

- Category and brand management

- User management

- Order management & status updates

- Inventory tracking
# 🛠️ Tech Stack
## Frontend
- React 18

- TypeScript

- Redux Toolkit

- React Router v6

- Tailwind CSS

- React Hook Form + Yup

- Axios

## Backend

- Node.js

- NestJS

- JWT Authentication

- REST API

## Database

- MongoDB + Mongoose

## DevOps & Tools

- Docker

- GitHub Actions (CI/CD)

- Jest & React Testing Library

- MSW (Mock Service Worker)

- ESLint + Prettier

# 🏗️ Project Architecture
## 📂 Project Structure

```txt
e-commerce/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   └── tests/
│
│── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── guards/
│   │   └── tests/
│
│── docker-compose.yml
│── README.md

```
# Testing Strategy

This project follows real-world testing practices:

✅ Unit tests (Jest)

✅ Component tests (React Testing Library)

✅ API Mocking (MSW)

✅ Integration tests

✅ E2E tests (Planned: Cypress/Playwright)

Test Coverage Target: 90%+

# 🔐 Environment Variables
Create a .env file in both frontend and backend

# ⚙️ Installation & Setup
## 1. Clone the repository

```txt
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

## 2. Setup Frontend
```txt
cd frontend
npm install
npm run dev
```

## 3. Setup Backend
```txt
cd backend
npm install
npm run start:dev
```
# 📊 Performance Optimizations

- Code splitting with React.lazy

- Memoization with useMemo and useCallback

- Image lazy loading

- API caching with Redux Toolkit Query

# 📈 Future Improvements

- Payment integration (Stripe)

- Real-time order updates (WebSockets)

- GraphQL version of the API

- Microservices architecture

- React Native mobile app version

# ⭐ If you like this project

Please give it a ⭐ to support my work!







