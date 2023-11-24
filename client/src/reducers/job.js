// reducers/jobReducer.js

const jobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case 'POST_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'FETCH_ALL_JOBS':
      return { ...state, jobs: action.payload };
    case 'FETCH_JOB_DETAILS':
      return { ...state, selectedJob: action.payload };
    default:
      return state;
  }
};
  
  export default jobReducer;
  