import express from "express";
import { adminLogin } from "../controllers/adminControllers.js"; // ✅ add .js

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;
