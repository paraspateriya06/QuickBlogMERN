import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Listen to successful connection event (fix: corrected spelling from "connnected" to "connected")
    mongoose.connection.on("connected", () =>
      console.log(" Database is Connected Successfully")
    );

    // Attempt to connect to MongoDB using the URI from environment variable
    await mongoose.connect(`${process.env.MONGODB_URI}/quickBlog`);

  } catch (error) {
    // Log any connection errors
    console.log(" MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
