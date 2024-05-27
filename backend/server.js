import express from "express";
import dotenv from "dotenv";
import auth from "./routes/auth.routes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
