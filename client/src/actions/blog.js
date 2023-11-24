// actions/blog.js
import * as api from "../api";


export const CREATE_BLOG_REQUEST = 'CREATE_BLOG_REQUEST';
export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const CREATE_BLOG_FAILURE = 'CREATE_BLOG_FAILURE';
// actions/blog.js

// ... (existing action types and actions)

export const GET_ALL_BLOGS_REQUEST = 'GET_ALL_BLOGS_REQUEST';
export const GET_ALL_BLOGS_SUCCESS = 'GET_ALL_BLOGS_SUCCESS';
export const GET_ALL_BLOGS_FAILURE = 'GET_ALL_BLOGS_FAILURE';

export const getAllBlogsRequest = () => ({
  type: GET_ALL_BLOGS_REQUEST,
});

export const getAllBlogsSuccess = (blogs) => ({
  type: GET_ALL_BLOGS_SUCCESS,
  payload: blogs,
});

export const getAllBlogsFailure = (error) => ({
  type: GET_ALL_BLOGS_FAILURE,
  payload: error,
});

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch(getAllBlogsRequest());

    const response = await api.getAllBlogs();
    const blogs = response.data;
    console.log("blogs", blogs)

    dispatch(getAllBlogsSuccess(blogs));
  } catch (error) {
    dispatch(getAllBlogsFailure(error.message));
  }
};


export const createBlogRequest = () => ({
  type: CREATE_BLOG_REQUEST,
});

export const createBlogSuccess = (blog) => ({
  type: CREATE_BLOG_SUCCESS,
  payload: blog,
});

export const createBlogFailure = (error) => ({
  type: CREATE_BLOG_FAILURE,
  payload: error,
});

export const createBlog = (blogData) => async (dispatch) => {
  try {
    dispatch(createBlogRequest());

    // Make API call to create a blog (you'll need to implement this)
    const createdBlog = await api.createBlog(blogData);

    dispatch(createBlogSuccess(createdBlog));
  } catch (error) {
    dispatch(createBlogFailure(error.message));
  }
};
// actions/blog.js

// ... (existing action types and actions)

export const GET_SINGLE_BLOG_REQUEST = 'GET_SINGLE_BLOG_REQUEST';
export const GET_SINGLE_BLOG_SUCCESS = 'GET_SINGLE_BLOG_SUCCESS';
export const GET_SINGLE_BLOG_FAILURE = 'GET_SINGLE_BLOG_FAILURE';

export const getSingleBlogRequest = () => ({
  type: GET_SINGLE_BLOG_REQUEST,
});

export const getSingleBlogSuccess = (blog) => ({
  type: GET_SINGLE_BLOG_SUCCESS,
  payload: blog,
});

export const getSingleBlogFailure = (error) => ({
  type: GET_SINGLE_BLOG_FAILURE,
  payload: error,
});

export const getSingleBlog = (blogId) => async (dispatch) => {
  try {
    dispatch(getSingleBlogRequest());

    const response = await api.getSingleBlog(blogId);
    const blog = response.data;

    dispatch(getSingleBlogSuccess(blog));
  } catch (error) {
    dispatch(getSingleBlogFailure(error.message));
  }
};
