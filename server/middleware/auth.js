import jwt from "jsonwebtoken";

// Middleware to authenticate requests using JWT
const auth = (req, res, next) => {
  // Get token from Authorization header
  const token = req.headers.authorization;

  // If no token is provided, send a failure response
  if (!token) {
    return res.json({ success: false, message: "Token not provided" });
  }

  try {
    // Verify the token using the secret key from environment variables
    jwt.verify(token, process.env.JWT_SECRET);

    // If verification passes, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token is invalid or expired, send error response
    res.json({ success: false, message: "Invalid token" });
  }
};

export default auth;
