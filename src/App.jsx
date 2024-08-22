import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { PostProvider } from './Components/Forum/Context/PostContext.jsx';

// Import Modals
import SignInModal from '../src/Components/Forum/SignInModal/SignInModal.jsx';
import SignUpModal from '../src/Components/Forum/SignUpModal/SignUpModal.jsx';

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
import ScrollToTop from './Components/Forum/ScrollToTop.jsx';

// CJP Components
import CJPNavbar from './Components/CitizenJournalistPortal/CJPNavbar.jsx';
import CJPHero from './Components/CitizenJournalistPortal/CJPHero.jsx';

const ForumLayout = () => (
  <div>
    <Navbar />
    <Hero />
    <Outlet /> {/* Place Outlet after Hero */}
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
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignIn = () => {
    // Your sign-in logic here
    setIsSignInOpen(false);
  };

  const handleSignUp = () => {
    // Your sign-up logic here
    setIsSignUpOpen(false);
  };

  return (
    <Router>
      <PostProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Forum Routes */}
          <Route path="/" element={<ForumLayout />}>
            {/* Render both Browse and ResourceLibrary on the initial load */}
            <Route index element={
              <>
                <Browse />
                <ResourceLibrary />
              </>
            } />
            <Route path="/browse" element={<Browse />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:topicName" element={<TopicPosts />} />
            <Route path="/topic/:topicName/post/:postId" element={<PostDetails />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Keep ResourceLibrary accessible via /resource */}
            <Route path="/resource" element={<ResourceLibrary />} />
            <Route path="/cjpportal" element={<CitizenJournalistPortal />} />
          </Route>

          {/* Citizen Journalist Portal Routes */}
          <Route path="/cjportal" element={<CJPLayout />}>
            {/* Add more routes for the CJP part here */}
          </Route>
        </Routes>
        <FloatingBottomNav
          onSignInClick={() => setIsSignInOpen(true)}
          onSignUpClick={() => setIsSignUpOpen(true)}
        />
        {/* Modals */}
        <SignInModal
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
          onSignIn={handleSignIn}
        />
        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          onSignUp={handleSignUp}
        />
      </PostProvider>
    </Router>
  );
};

export default App;