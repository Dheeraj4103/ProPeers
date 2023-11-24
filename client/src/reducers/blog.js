// reducers/blog.js

import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAILURE,
} from '../actions/blog';
import {
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_FAILURE,
  // ... (other action types)
} from '../actions/blog';

import {
  GET_SINGLE_BLOG_REQUEST,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_FAILURE,
  // ... (other action types)
} from '../actions/blog';
  
  const initialState = {
    creatingBlog: false,
    createdBlog: null,
    error: null,
    blogs: [],
    singleBlog: null
  };
  
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return {
        ...state,
        creatingBlog: true,
        createdBlog: null,
        error: null,
      };
  
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        creatingBlog: false,
        createdBlog: action.payload,
        error: null,
      };
  
    case CREATE_BLOG_FAILURE:
      return {
        ...state,
        creatingBlog: false,
        createdBlog: null,
        error: action.payload,
      };
    case GET_ALL_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        error: null,
      };
    
    case GET_ALL_BLOGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    
    case GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        singleBlog: action.payload,
        error: null,
      };
    
    case GET_SINGLE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  
    default:
      return state;
  }
};
  
  export default blogReducer;
  