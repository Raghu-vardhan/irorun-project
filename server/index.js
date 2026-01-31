require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Store Campaign API is running 🚀");
});

app.use("/api/webhook", require("./routes/webhook.routes"));

app.use("/api/store", require("./routes/store.routes"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("Store routes loaded");
