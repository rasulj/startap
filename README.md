# 🚀 Startap - Online Education Platform

**Startap** is a modern, full-featured online learning platform that enables users to access courses, books, and educational resources. It features responsive design, multi-language support, secure payments, user authentication, and an admin panel with analytics.

---

## 🔗 Live Demo

👉 [Click here to view the live demo](https://startap-xe4v.vercel.app)

---

## 🧑‍💻 Technologies Used

### Frontend:
- **Next.js + TypeScript** – Fast, SEO-friendly React framework
- **Tailwind CSS + Chakra UI** – Flexible and modern UI design
- **Redux Toolkit** – Global state management
- **i18next** – Internationalization (i18n)
- **Stripe** – Secure payment integration
- **Formik + Yup** – Form handling and validation
- **Chart.js** – Interactive charts and statistics
- **NextAuth** – Authentication and session management

### Backend:
The backend is located in a separate repository:  
🔗 **[Startap-server (NestJS backend)](https://github.com/rasulj/Startap-server.git)**

- **NestJS + TypeScript** – Scalable backend architecture
- **JWT authentication**
- **Stripe integration**
- **MongoDB or PostgreSQL** – Flexible database setup
- **REST API** – Fully connected with frontend

---

## 📁 Project Structure



```
root/
├── startap-main/         # Frontend (Next.js)
├── Startap-server/       # Backend (NestJS): hosted externally
```

---

## 🚀 Getting Started

### Run the Frontend

```bash
git clone https://github.com/rasulj/startap-main.git
cd startap-main
yarn install          # or npm install
yarn dev              # or npm run dev
```

Frontend will run on: [http://localhost:3000](http://localhost:3000)

---

### Run the Backend

```bash
git clone https://github.com/rasulj/Startap-server.git
cd Startap-server
yarn install          # or npm install
yarn start:dev        # or npm run start:dev
```

Backend API will be available at: `http://localhost:8000` (configurable via `.env`)

---

## 🌍 Multi-language Support

The platform supports multiple languages using **i18next**. All translations are stored in `public/locales/`.

---

## 💳 Payments with Stripe

Users can securely pay for courses using Stripe. Payments are fully integrated with both frontend and backend.

---

## 📊 Admin Dashboard

Admins can monitor statistics, manage users, and view platform activity via interactive charts powered by `Chart.js`.

---

## ✅ Key Features

- 🔐 Authentication (NextAuth + JWT)
- 🌐 Multi-language support
- 💳 Stripe payment integration
- 📚 Course and book management
- ⭐ Reviews and ratings
- 📈 Admin dashboard and analytics

---

## 🤝 Author

This project was developed for portfolio and practical experience purposes. It features clean, modular code and follows modern web development standards.

📧 Email: `rasulkamilov93@gmail.com`  
🌐 Portfolio:

---
