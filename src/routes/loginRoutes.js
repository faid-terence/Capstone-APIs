import express from "express"
import loginController from "../controllers/loginController.js"

const router = express.Router();

// define routes

router.post("/", loginController)

export default router