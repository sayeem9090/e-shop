// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Product = require("./models/Product");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Function to connect to MongoDB with retry
async function connectWithRetry() {
  let connected = false;
  while (!connected) {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connected = true;
      console.log("Connected to MongoDB"); // ✅ Removed emoji to avoid syntax issues
    } catch (err) {
      console.log("MongoDB not ready, retrying in 3s...");
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

// Connect to MongoDB
connectWithRetry();

// Routes
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});

