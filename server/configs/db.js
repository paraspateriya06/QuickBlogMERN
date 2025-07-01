import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    // Listen to successful connection event
    mongoose.connection.on("connected", () =>
      console.log(" Database is Connected Successfully")
    );

    // Connect to MongoDB using environment URI (already includes /quickBlog if set correctly in .env)
    await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {
    // Log any connection errors
    console.log(" MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
