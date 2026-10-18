# 🛒 Smart Grocery List & Inventory Manager

![Tech Stack](https://img.shields.io/badge/Tech-MERN%20(React%20%7C%20Node%20%7C%20Express%20%7C%20MongoDB)-blue)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

A full-stack MERN web application designed to help users manage household or small-business grocery inventories, track quantities, receive automated low-stock warnings, and organize shopping lists efficiently.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [System Objectives](#-system-objectives)
- [Tech Stack](#️-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation & Environment Setup](#-installation--environment-setup)
- [How to Run the Project (PowerShell Workflow)](#-how-to-run-the-project-powershell-workflow)
- [Author & License](#-author--license)

---

## 📌 Project Overview
Managing groceries manually often leads to buying duplicate items, running out of staples, or wasting food. This platform provides a centralized digital dashboard where users can securely register, log in, manage their live inventory items, and instantly spot items that require restocking.

---

## ⚠️ Problem Statement
* **Lack of Visibility:** Forgetting what items are already in stock leads to unnecessary duplicate purchases.
* **Stockouts:** Running out of essential kitchen staples disrupts meal preparation.
* **Manual Tracking Inefficiencies:** Traditional paper lists or disorganized notes lack live status updates and alerts.

---

## 🎯 System Objectives
1. **Secure Authentication:** Implement user registration and login using JWT tokens and password hashing.
2. **Dynamic Inventory Control:** Provide full CRUD operations for grocery items (Name, Quantity, Minimum Stock Threshold).
3. **Automated Low-Stock Alerts:** Visually flag items when current quantities fall below user-defined minimums.
4. **Modern Responsive UI:** Deliver a fast, colorful user experience styled with Tailwind CSS.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Local instance `mongodb://127.0.0.1:27017/groceryDB`)
* **Security:** bcryptjs, jsonwebtoken, cors

---

## 📂 Folder Structure
```text
Smart-Grocery-Inventory-Manager/
│
├── client/                  # React Frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/      # UI components (Navbar, etc.)
│   │   ├── context/         # AuthContext state management
│   │   ├── pages/           # Views (Login, Dashboard)
│   │   └── App.jsx
│   └── package.json
│
├── server/                  # Node.js & Express Backend
│   ├── models/              # Mongoose schemas (User, Item)
│   ├── routes/              # API endpoints (auth, items)
│   ├── server.js            # Express server entry point
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ Installation & Environment Setup

Ensure you have Node.js and MongoDB installed and running locally on your machine.
1. Clone & Set Up Backend

Open your terminal and navigate to the server folder:
PowerShell

cd server
npm install

Create a .env file inside the server/ folder with the following variables:
Code snippet

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/groceryDB
JWT_SECRET=supersecretjwtkey123

2. Set Up Frontend

Open a separate terminal window and navigate to the client folder:
PowerShell

cd client
npm install

🚀 How to Run the Project (PowerShell Workflow)

Because this is a decoupled Full-Stack MERN application, you must run the backend and frontend simultaneously in two separate PowerShell windows.
Terminal 1: Start the Backend Server
PowerShell

cd server
npm run dev

(Wait for the success messages: 🚀 Server running on port 5000 and ✅ MongoDB Connected successfully)
Terminal 2: Start the Frontend Client
PowerShell

cd client
npm run dev

(Hold Ctrl and click http://localhost:5173/ in your terminal to open the application in your browser).
👤 Author & License

Developed as an industry-oriented Full-Stack portfolio project. Shared under the MIT License.
