import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from "../../actions/blog";
import toast from 'react-hot-toast';

// import "./CreateBlog.css";  // You can style this as needed
import Editor from '../../components/Editor/Editor.jsx';  // Assuming you have an Editor component
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.jsx";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogTags, setBlogTags] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector(state => state.currentUserReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (User) {
      if (blogTitle && blogContent && blogTags) {
        dispatch(createBlog({
          blogTitle,
          blogContent,
          blogTags,
          userPosted: User.result.name,
          userId: User?.result._id,
        }));
        toast.success('Blog posted successfully');
      } else {
        toast.error('Please enter values in all the fields');
      }
    } else {
      toast.error('Please login to post a blog');
    }
  };

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: '30px' }}>
    <div className="create-blog">
      <div className="create-blog-container">
        <h1>Create a New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="create-blog-form-container">
            <label htmlFor="create-blog-title">
              <h4>Title</h4>
              <p>Be specific and imagine you’re writing for an audience</p>
              <input
                type="text"
                id="create-blog-title"
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="e.g. Exploring the World of React Hooks"
              />
            </label>
            <label htmlFor="create-blog-content">
              <h4>Content</h4>
              <p>Share your thoughts and knowledge</p>
              <Editor
                value={blogContent}
                onChange={setBlogContent}
              />
            </label>
            <label htmlFor="create-blog-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your blog is about</p>
              <input
                type="text"
                id="create-blog-tags"
                onChange={(e) => setBlogTags(e.target.value.split(" "))}
                placeholder="e.g. react javascript web-development"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Post Blog"
            className="post-blog-btn"
          />
        </form>
      </div>
      </div>
    </div>
    </div>
      
  );
};

export default CreateBlog;
