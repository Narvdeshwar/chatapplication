import mongoose from "mongoose";

const DB_CONNECT = async () => {
  const MONGODB_URL = process.env.MONGODB_URI;
  try {
    const connect = await mongoose.connect(MONGODB_URL);
    console.log("DB connected succussfully at Host:", connect.connection.host);
  } catch (err) {
    console.error("Error while connecting to the DB:", err.message);
    process.exit(1); // Exit process on failure
  }
};

export default DB_CONNECT; // Default export for easier imports
