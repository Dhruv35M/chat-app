import express from "express";
import dotenv from "dotenv";

import auth from "./routes/auth.routes.js";
import connectToDB from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use("/api/auth", auth);

app.listen(PORT, () => {
  connectToDB();
  console.log(`server is running at port ${PORT}`);
});
