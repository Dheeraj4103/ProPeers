// components/Job/AllJobs.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../actions/job';
import { Link } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const AllJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return (
    <div className='home-container-1'>
        <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: '30px' }}>
    <div>
      <h2>All Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <Link to={`/Job/${job._id}`}>
            <h3>{job.jobTitle}</h3>
          </Link>
          {/* Add more details based on your job schema */}
        </div>
      ))}
      </div>
      </div>
      </div>
  );
};

export default AllJobs;
