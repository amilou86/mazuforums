import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { PostProvider } from './Components/Forum/Context/PostContext.jsx';

// Forum Components
import Navbar from './Components/Forum/Navbar/Navbar.jsx'; // Add this component
import Hero from './Components/Forum/Hero/Hero.jsx';
import Browse from './Components/Forum/Browse/Browse.jsx';
import Topics from './Components/Forum/Topics/topics.jsx';
import TopicPosts from './Components/Forum/TopicPosts/TopicPosts.jsx';
import PostDetails from './Components/Forum/PostDetails/PostDetails.jsx';
import SignUp from './Components/Forum/SignUp/SignUp.jsx';
import ResourceLibrary from './Components/Forum/ResourceLibrary/ResourceLibrary.jsx'; // Add this component
import CitizenJournalistPortal from './Components/Forum/CitizenJournalistPortal.jsx';
import FloatingBottomNav from './Components/Forum/FloatingBottomNav/FloatingBottomNav.jsx'; // Add this component

// CJP Components
import CJPNavbar from './Components/CitizenJournalistPortal/CJPNavbar.jsx'; // Add this component
import CJPHero from './Components/CitizenJournalistPortal/CJPHero.jsx'; // Add this component
import CJPSignIn from './Components/CitizenJournalistPortal/CJPSignIn.jsx'; // Add this component

const ForumLayout = () => (
  <div>
    <Navbar />
    <Hero />
    <ResourceLibrary />
    <CitizenJournalistPortal />
    <FloatingBottomNav />
    <Outlet />
  </div>
);

const CJPLayout = () => (
  <div>
    <CJPNavbar />
    <CJPHero />
    <Outlet />
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
        <div>
          <Routes>
            {/* Forum Routes */}
            <Route path="/" element={<ForumLayout />}>
              <Route index element={<Browse />} />
              <Route path="browse" element={<Browse />} />
              <Route path="topics" element={<Topics />} />
              <Route path="topic/:topicName" element={<TopicPosts />} />
              <Route path="topic/:topicName/post/:postId" element={<PostDetails />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            {/* Citizen Journalist Portal Routes */}
            <Route path="/cjportal" element={<CJPLayout />}>
              {/* Add more routes for the CJP part here */}
            </Route>
          </Routes>

          {/* Conditional CJPSignIn Button */}
          {showCJPSignIn && <CJPSignIn onClose={handleCloseCJPSignIn} />}

          {/* Render the button for CJPSignIn in a place where it will be visible */}
          <Button
            style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
            onClick={handleOpenCJPSignIn}
          >
            Join the movement
          </Button>
        </div>
      </PostProvider>
    </Router>
  );
};

export default App;
