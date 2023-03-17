import express from "express";
import blogsRoutes from "./blogsRoutes.js"
import registerRoutes from "./registerRoutes.js"
import loginRoutes from "./loginRoutes.js"
const router = express.Router();



router.use("/blogs",blogsRoutes )
router.use("/register",registerRoutes)
router.use("/login",loginRoutes)




export default router