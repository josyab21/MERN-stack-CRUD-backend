import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log("DB is Connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;
