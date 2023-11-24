import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from "./pages/Users/Users"
import UserProfile from "./pages/UserProfile/UserProfile"
import CreateBlog from './pages/Blogs/CreateBlog'
import AllBlogs from './pages/Blogs/AllBlogs'
import SingleBlog from './pages/Blogs/SingleBlog'
import PostJob from './pages/Job/PostJob'
import JobDetails from './pages/Job/JobDetails'
import AllJobs from './pages/Job/AllJobs'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
      <Route path='/Blog/Create' element={<CreateBlog />} />
      <Route path='/Blog/All' element={<AllBlogs />} />
      <Route path="/Blog/:blogId" element={<SingleBlog />} />
      <Route path="/Job/post" element={<PostJob />} />
      <Route path="/Job/:jobId" element={<JobDetails />} />
      <Route path="/Job/all" element={<AllJobs />} />
    </Routes>
  )
}

export default AllRoutes