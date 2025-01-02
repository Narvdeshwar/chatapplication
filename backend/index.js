import express from "express";
import env from "dotenv";
import DB_CONNECT from "./config/dbconfig.js"; // Use default import
env.config();

const app = express();
const port = process.env.PORT || 5155;

// Connect to Database
DB_CONNECT();

app.listen(port, () => {
  console.log("Server is running on port", port);
});
