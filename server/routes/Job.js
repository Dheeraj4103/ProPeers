// routes/job.js

import express from "express";
import { postJob, getAllJobs, getOneJob } from "../controllers/job.js";

const router = express.Router();

router.post("/post", postJob);
router.get("/all", getAllJobs);
router.get("/:id", getOneJob);

export default router;
