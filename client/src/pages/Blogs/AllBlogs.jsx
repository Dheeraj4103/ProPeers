// components/Blog/AllBlogs.jsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBlogs } from '../../actions/blog';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogReducer.blogs);

    useEffect(() => {
        dispatch(getAllBlogs());
        console.log(blogs);
    }, [dispatch]);

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{ marginTop: '30px' }}>
                <div>
                    <h2>All Blogs</h2>
                    {blogs.map((blog) => (
                        <div key={blog._id}>
                            <Link to={`/Blog/${blog._id}`} style={{ textDecoration: 'none' }}>
                                <h3>{blog.blogTitle}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;
