// models/job.js

import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: 'Job must have a title',
  },
  jobDescription: {
    type: String,
    required: 'Job must have a description',
  },
  jobLocation: {
    type: String,
    required: 'Job must have a location',
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    required: 'Job must have a type',
  },
  postedBy: {
    type: String,
    required: 'Job must be posted by someone',
  },
  companyId: {
    type: String,
    required: 'Company ID is required',
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Job', jobSchema);
