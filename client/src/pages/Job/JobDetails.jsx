// components/Job/JobDetails.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobDetails } from '../../actions/job';

const JobDetails = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobReducer.jobs.find((j) => j._id === jobId));

  useEffect(() => {
    if (jobId) {
      dispatch(getJobDetails(jobId));
    }
  }, [dispatch, jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      {/* Add more details based on your job schema */}
    </div>
  );
};

export default JobDetails;
