# HelixCure – Online Doctor Appointment App

Book 1‑on‑1 video calls with doctors, manage appointments, and handle payments — all in one place. Built with **MERN** (MongoDB, Express.js, React.js, Node.js) and integrated with **Razorpay** for payments and **ZegoCloud** for real‑time video.

---

## ✨ Features

* **Patient portal**: search/filter doctors, view profiles, book/cancel/reschedule appointments, pay online, join video calls.
* **Doctor portal**: manage availability & slots, approve/reject appointments, join 1‑on‑1 calls, write notes/prescriptions.
* **Admin portal**: verify doctors, manage users & appointments, analytics dashboard.
* **1‑on‑1 video calls**: secure, low‑latency rooms via **ZegoCloud**.
* **Payments**: **Razorpay** checkout, order capture, webhook verification, refunds (optional).
* **Auth & RBAC**: JWT‑based authentication with role‑based access (Patient/Doctor/Admin).
* **Schedules & reminders**: smart slotting, email/SMS/Push reminders (pluggable).
* **Reviews & ratings** for doctors (optional toggle).
* **E‑prescriptions & visit notes** (downloadable PDFs).
* **Responsive UI** with modern React tooling.

---

## 🧱 Tech Stack

* **Frontend**: React, Vite, React Router, Axios, Zustand/Redux (state), Tailwind/Chakra UI.
* **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, Bcrypt, Zod/Joi validation.
* **Integrations**: Razorpay (payments), ZegoCloud (video), Nodemailer/Twilio (notifs – optional).
* **DevOps**: Dotenv, ESLint/Prettier, Docker (optional), Render/railway/Vercel for hosting.

> Replace tools with your exact choices where needed.

---

## 🗂️ Project Structure

```
helix-cure/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── utils/
│   │   └── App.tsx
│   ├── index.html
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── config/        # db, env, razorpay, zegocloud
│   │   ├── middlewares/   # auth, errorHandler, roleGuard
│   │   ├── models/        # User, Doctor, Appointment, Review, Invoice
│   │   ├── routes/        # /auth, /users, /doctors, /appointments, /payments, /calls
│   │   ├── controllers/
│   │   ├── services/      # paymentService, callService, mailService
│   │   ├── utils/         # tokens, validation, logger
│   │   └── server.ts
│   └── package.json
├── .env.example
├── README.md
└── package.json
```

---

## 🧰 Requirements

* **Node.js** ≥ 18
* **MongoDB** (local or Atlas)
* **Razorpay** account & API keys
* **ZegoCloud** project & keys (AppID / ServerSecret)

---

## 🔑 Environment Variables

Create a `.env` in `backend/` based on the example:

```
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/helixcure

# JWT
JWT_SECRET=supersecret
JWT_EXPIRES_IN=7d

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=whsec_xxxxxxxxx

# ZegoCloud
ZEGO_APP_ID=123456789
ZEGO_SERVER_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
```

Frontend `.env` (Vite) in `frontend/`:

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
VITE_ZEGO_APP_ID=123456789
```

> Never commit real secrets. Use `.env.local` and gitignore.

---

## 🚀 Getting Started (Local)

```bash
# 1) Clone
git clone https://github.com/singladhruv/helix-cure.git
cd helix-cure

# 2) Install deps
cd backend && npm i && cd ..
cd frontend && npm i && cd ..

# 3) Env files
cp .env.example backend/.env   # then fill values

# 4) Run servers (two terminals)
cd backend && npm run dev
cd frontend && npm run dev
```

* Backend: [http://localhost:5000](http://localhost:5000)
* Frontend: [http://localhost:5173](http://localhost:5173)

---

## 💳 Payments Flow (Razorpay)

1. **Create order** (backend) → returns `order_id`.
2. **Open Checkout** (frontend) with `VITE_RAZORPAY_KEY_ID` & order details.
3. On success, receive `razorpay_payment_id`, `razorpay_order_id`, `razorpay_signature`.
4. **Verify signature** on backend → mark appointment as **Paid**.
5. (Optional) **Webhook** `/payments/webhook` for async updates/refunds.

**Sample endpoints**:

```
POST /api/payments/create-order
POST /api/payments/verify
POST /api/payments/webhook
```

---


**Sample endpoints**:

```
POST /api/calls/token    # returns token for room=appointmentId
```

---

## 🧭 Core Entities

* **User**: { name, email, role: 'patient' | 'doctor' | 'admin' }
* **Doctor**: { userId, specialization, yearsExp, fee, slots\[], verified }
* **Appointment**: { patientId, doctorId, slot, status, payment, notes }
* **Review**: { doctorId, patientId, rating, comment }

> See `/backend/src/models/` for schema
