import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { PostProvider } from './Components/Forum/Context/PostContext.jsx';

// Forum Components
import Navbar from './Components/Forum/Navbar/Navbar.jsx';
import Hero from './Components/Forum/Hero/Hero.jsx';
import Browse from './Components/Forum/Browse/Browse.jsx';
import Topics from './Components/Forum/Topics/Topics.jsx';
import TopicPosts from './Components/Forum/TopicPosts/TopicPosts.jsx';
import PostDetails from './Components/Forum/PostDetails/PostDetails.jsx';
import SignUp from './Components/Forum/SignUp/SignUp.jsx';
import ResourceLibrary from './Components/Forum/ResourceLibrary/ResourceLibrary.jsx';
import CitizenJournalistPortal from './Components/Forum/CitizenJournalistPortal.jsx';
import FloatingBottomNav from './Components/Forum/FloatingBottomNav/FloatingBottomNav.jsx';
import ReplyList from './Components/Forum/Replies/ReplyList.jsx';
import ReplyItem from './Components/Forum/Replies/ReplyItem.jsx';
import ReplyForm from './Components/Forum/Replies/ReplyForm.jsx';
import ScrollToTop from './Components/Forum/ScrollToTop.jsx';

// CJP Components
import CJPNavbar from './Components/CitizenJournalistPortal/CJPNavbar.jsx';
import CJPHero from './Components/CitizenJournalistPortal/CJPHero.jsx';
import CJPSignIn from './Components/CitizenJournalistPortal/CJPSignIn.jsx';

const ForumLayout = () => (
  <div>
    <Navbar />
    <Hero />
    <Outlet /> {/* Place Outlet after Hero */}

    <ResourceLibrary />

    <CitizenJournalistPortal />
    <FloatingBottomNav />
  </div>
);

const CJPLayout = () => (
  <div>
    <Outlet /> {/* Place Outlet first */}
    <CJPNavbar />
    <CJPHero />
  </div>
);

const App = () => {
  const [showCJPSignIn, setShowCJPSignIn] = useState(false);

  const handleOpenCJPSignIn = () => {
    setShowCJPSignIn(true);
  };

  const handleCloseCJPSignIn = () => {
    setShowCJPSignIn(false);
  };

  return (
    <Router>
      <PostProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Forum Routes */}
          <Route path="/" element={<ForumLayout />} >
            <Route index element={<Browse />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:topicName" element={<TopicPosts />} />
            <Route path="/topic/:topicName/post/:postId" element={<PostDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resource" element={<ResourceLibrary />} />
          </Route>

          {/* Citizen Journalist Portal Routes */}
          <Route path="/cjportal" element={<CJPLayout />}>
            {/* Add more routes for the CJP part here */}
          </Route>
        </Routes>
        <FloatingBottomNav />
      </PostProvider>
    </Router>
  );
};

export default App;