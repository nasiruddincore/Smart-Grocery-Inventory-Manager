const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Security Fix: Disable framework fingerprinting header
app.disable('x-powered-by');

// Activate CORS specifically for your Vite React frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Enable JSON body parsing for incoming requests
app.use(express.json());

// Database Connection with graceful fallback
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/groceryDB')
  .then(() => console.log(`✅ MongoDB Connected successfully`))
  .catch((err) => {
    console.error(`❌ Database Connection Error: ${err.message}`);
    process.exit(1);
  });

// Smart Grocery API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/items'));

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});