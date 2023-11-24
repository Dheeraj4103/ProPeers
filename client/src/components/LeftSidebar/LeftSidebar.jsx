import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {

  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <button className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button  className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Blog/Create"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Blogs</p>
            </NavLink>
          </button>
          <button className="nav-btn">
          <NavLink
            to="/Blog/All"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>All Blogs</p>
          </NavLink>
        </button>
          <button className="nav-btn">
          <NavLink
            to="/Job/post"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Post Jobs</p>
          </NavLink>
        </button>
          <button className="nav-btn">
          <NavLink
            to="/Job/all"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>All Jobs</p>
          </NavLink>
        </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
