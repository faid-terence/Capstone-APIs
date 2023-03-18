import express from "express";
import blogsController from "../controllers/blogsController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js";



const router = express.Router();

// defined routes


router.get("/" , blogsController.getblogs);
router.get("/:id", blogsController.getblog);
router.post("/", blogsController.createBlog);
router.put("/:id", blogsController.updateBlog);
router.delete("/:id", blogsController.deleteBlog);




export default router