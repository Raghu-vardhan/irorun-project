import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "../../lib/db";
import Store from "../../lib/models/store";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  await connectDB();

  const { username, password } = req.body;

  const store = await Store.findOne({ username, isActive: true });
  if (!store) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, store.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { storeId: store._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return res.json({
    token,
    storeName: store.storeName
  });
}
