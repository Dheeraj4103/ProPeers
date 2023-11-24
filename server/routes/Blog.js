// Assuming you have already imported express and the blog controllers at the top

import express from "express"
import auth from '../middleware/auth.js'
import { createBlog, getAllBlogs, deleteBlog, getOneBlog } from "../controllers/blog.js";
const router = express.Router();

router.post('/create', createBlog);
router.get('/all', getAllBlogs);
router.get("/:id", getOneBlog)
router.delete('/delete/:id', deleteBlog);

export default router;
