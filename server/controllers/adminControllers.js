import Jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    // Destructure email and password from the request body
    const { email, password } = req.body;

    // Validate email and password against environment variables
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      // Return failure response for invalid credentials
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate a JWT token using the admin's email and secret
    const token = Jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d", // optional: sets token expiration (recommended)
    });

    // Return success response with the generated token
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    // Return failure response in case of any runtime error
    res.json({
      success: false,
      message: error.message,
    });
  }
};


