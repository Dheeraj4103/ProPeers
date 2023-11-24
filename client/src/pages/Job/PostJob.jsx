// components/Job/PostJob.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postJob } from '../../actions/job';
import toast from 'react-hot-toast';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const dispatch = useDispatch();
  const postedBy = useSelector((state) => state.currentUserReducer.result.name);
  const companyId = '123'; // You should get the company ID from the logged-in user or other source

  const handleSubmit = (e) => {
    e.preventDefault();

    if (jobTitle && jobDescription && jobLocation && jobType) {
      dispatch(
        postJob({
          jobTitle,
          jobDescription,
          jobLocation,
          jobType,
          postedBy,
          companyId,
        })
      );

      toast.success('Job posted successfully');
    } else {
      toast.error('Please enter values in all the fields');
    }
  };

    return (
        <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2" style={{ marginTop: '30px' }}>
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for job details */}
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
          Job Description:
          <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        </label>
        <label>
          Job Location:
          <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
        </label>
        <label>
          Job Type:
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </label>
        <button type="submit">Post Job</button>
      </form>
                </div>
            </div>
            </div>
  );
};

export default PostJob;
