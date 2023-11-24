// controllers/job.js

import Job from '../models/job.js';
import mongoose from 'mongoose';

export const postJob = async (req, res) => {
  const { jobTitle, jobDescription, jobLocation, jobType, postedBy, companyId } = req.body;

  const newJob = new Job({
    jobTitle,
    jobDescription,
    jobLocation,
    jobType,
    postedBy,
    companyId,
  });

  try {
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobList = await Job.find().sort({ postedOn: -1 });
    res.status(200).json(jobList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneJob = async (req, res) => {
  try {
    const id = req.params.id;
  
    const job = await Job.findById(id);
    if (!job) {
      res.status(400).json({ message: "Blog doesn't exist" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// You can add more controllers for updating and deleting jobs if needed.
