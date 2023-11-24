// components/Blog/SingleBlog.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBlog } from '../../actions/blog';

const SingleBlog = () => {
  const { blogId } = useParams();
  console.log("blog id", blogId)
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogReducer.singleBlog);

  useEffect(() => {
    dispatch(getSingleBlog(blogId));
    console.log("got blog", blog)
  }, [dispatch, blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{blog.blogTitle}</h2>
      <p>{blog.blogContent}</p>
      <p>Author: {blog.userPosted}</p>
      <p>Tags: {blog.blogTags.join(', ')}</p>
      <p>Posted On: {new Date(blog.postedOn).toLocaleString()}</p>
    </div>
  );
};

export default SingleBlog;
