# 🛒 Smart Grocery List & Inventory Manager

A full-stack MERN application designed to track pantry inventory, monitor expiry dates, and automatically generate shopping lists based on low-stock thresholds.

## 📌 Problem Statement
Food waste and inefficient grocery shopping cost households and small businesses thousands every year. This system replaces manual guesswork with automated, data-driven inventory tracking.

## 🚀 Features
- **Secure Authentication:** JWT-based user login and registration.
- **Inventory CRUD:** Add, update, and manage grocery items.
- **Automated Shopping List:** Items dropping below their minimum threshold are instantly flagged for restocking.
- **Expiry Alerts:** Highlights items expiring within the next 7 days to prevent waste.
- **One-Click Restock:** Quickly increment/decrement stock after usage or shopping trips.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Auth:** JSON Web Tokens (JWT), Bcrypt.js

## 📐 Architecture & Folder Structure
- `/client`: React Vite application (UI, State, API Calls)
- `/server`: Node/Express REST API (Auth, DB Models, Routing)

## ⚙️ How to Run Locally
1. Clone the repository.
2. Setup Backend: `cd server`, `npm install`, add your MongoDB URI to `.env`, run `npm run dev`.
3. Setup Frontend: `cd client`, `npm install`, run `npm run dev`.
4. Open `http://localhost:5173` in your browser.

## 🎓 Learning Outcomes
Demonstrates proficiency in RESTful API design, NoSQL relational data modeling, React state management, and full-stack authentication workflows.