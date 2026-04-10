const express = require("express");
const cors = require("cors");

const app = express();

// DB connection
const connectDB = require("./config/db");
connectDB();

// middleware
app.use(express.json());
app.use(cors());

//  routes
const authRoutes = require("./routes/authroutes");
app.use("/api/auth", authRoutes);

// auth middleware
const auth = require("./middleware/auth");

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

//  protected route
app.get("/rooms", auth, (req, res) => {
  res.json({ message: "Rooms data (Protected) " });
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000 ");
});