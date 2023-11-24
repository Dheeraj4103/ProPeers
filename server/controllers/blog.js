// Assuming you have already imported the necessary dependencies at the top

import Blog from "../models/blog.js";
import mongoose from "mongoose";

export const createBlog = async (req, res) => {
  const blogData = req.body;
  const newBlog = new Blog(blogData);

  try {
    await newBlog.save();
    res.status(200).json("Blog posted successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new blog");
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogList = await Blog.find().sort({ postedOn: -1 });
    res.status(200).json(blogList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneBlog = async (req, res) => {
  try {
    const id = req.params.id;
  
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(400).json({ message: "Blog doesn't exist" });
    } 
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Blog unavailable...");
  }

  try {
    await Blog.findByIdAndRemove(_id);
    res.status(200).json({ message: "Blog successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
