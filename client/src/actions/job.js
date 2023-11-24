// actions/job.js

import * as api from '../api'; // Import your API functions

export const postJob = (jobData) => async (dispatch) => {
  try {
    const { data } = await api.postJob(jobData);
    dispatch({ type: 'POST_JOB', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getAllJobs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllJobs();
    dispatch({ type: 'FETCH_ALL_JOBS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getJobDetails = (jobId) => async (dispatch) => {
  try {
    const { data } = await api.getJobDetails(jobId);
    dispatch({ type: 'FETCH_JOB_DETAILS', payload: data });
  } catch (error) {
    console.error(error);
  }
};
