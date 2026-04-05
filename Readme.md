# 💸 Finance Dashboard Backend API

A role-based backend system for managing financial records, users, and analytics.
Built to demonstrate backend architecture, access control, and data processing.

---

## 🚀 Features

* 🔐 Authentication (Register, Login, Logout)
* 👤 Role-Based Access Control (Viewer, Analyst, Admin)
* 💸 Financial Records Management (CRUD)
* 📊 Dashboard Analytics (Summary & Category-wise)
* 🧑‍💻 User Management (Admin only)
* 🛡️ Secure APIs using JWT & Middleware

---

## 🧠 Roles & Permissions

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View own records                     |
| Analyst | View all records + analytics         |
| Admin   | Full access (CRUD + user management) |

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcrypt.js (Password hashing)

---

## 📁 Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── db/
└── app.js
```

---

## 🔐 Authentication APIs

* POST `/api/v1/auth/register` → Register user
* POST `/api/v1/auth/login` → Login user
* GET `/api/v1/auth/logout` → Logout user

---

## 💸 Records APIs

* POST `/api/v1/records/create_Record` → Create record (Admin)
* GET `/api/v1/records/getrecord` → Get records (All roles)
* PUT `/api/v1/records/:id` → Update record (Admin)
* DELETE `/api/v1/records/:id` → Delete record (Admin)

---

## 📊 Dashboard APIs

* GET `/api/v1/dashboard/summary?email=user@gmail.com`
* GET `/api/v1/dashboard/category?email=user@gmail.com`

👉 Only accessible by **Admin & Analyst**

---

## 👤 User APIs (Admin Only)

* GET `/api/v1/admin/getUsers` → Get all users
* PUT `/api/v1/admin/:id/role` → Update role
* PUT `/api/v1/admin/:id/status` → Activate/Deactivate user

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd ZORVYN
npm install
node server.js
```

---

## 🧪 API Testing

You can test APIs using Postman.

📁 Postman Collection included in:

```
/postman/finance-dashboard-api.postman_collection.json
```

---

## 📄 API Documentation

👉 View full API docs here:
https://documenter.getpostman.com/view/47484294/2sBXiqE8zd

---

## 🎯 Key Highlights

* Clean architecture with separation of concerns
* Role-based authorization using middleware
* Scalable and maintainable code structure
* Real-world backend design approach
* Monolthic Structure

---

## 💡 Notes

* Admin creates financial records on behalf of users
* Dashboard APIs provide aggregated insights
* Designed for evaluation of backend skills, not production use

---

## 👨‍💻 Author

Akash Ray

---
