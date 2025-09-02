const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");
const User = require("./models/User");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    await Product.deleteMany();
    await User.deleteMany();

    await Product.insertMany([
      { name: "Laptop", price: 1200, description: "High performance laptop" },
      { name: "Phone", price: 800, description: "Latest smartphone" }
    ]);

    await User.insertMany([
      { username: "sayeem", email: "sayeem9090@gmail.com" }
    ]);

    console.log("✅ Database seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
}

seed();

