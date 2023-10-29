import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DataBase = async () => {
  try {
    await mongoose.connect(process.env.MongoDB);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error Detected ${error}`);
  }
};

export default DataBase;
