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
import FloatingBottomNav from './Components/Forum/FloatingBottomNav/FloatingBottomNav.jsx';
import ScrollToTop from './Components/Forum/ScrollToTop.jsx';
import CitizenJournalistPortal from './Components/Forum/CitizenJournalistPortal.jsx'
// CJP Components
import CJPHero from './Components/CitizenJournalistPortal/CJPHero.jsx';

// Layouts
const ForumLayout = () => (
  <div>
    <Navbar />
    <Hero />
    <Outlet /> {/* This is where nested routes will be rendered */}
    <CitizenJournalistPortal />
    <FloatingBottomNav />
  </div>
);

const CJPLayout = () => (
  <div>
    <Navbar />
    <Outlet /> {/* Render CJPHero here */}
    <FloatingBottomNav />
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
        <Routes>
          {/* Forum Routes */}
          <Route path="/" element={<ForumLayout />}>
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
            <Route path="/resource" element={<ResourceLibrary />} />
            <Route path="/cjpportal" element={<CitizenJournalistPortal />} />
          </Route>

          {/* Citizen Journalist Portal Routes */}
          <Route path="/cjportal" element={<CJPLayout />}>
            <Route index element={<CJPHero />} />
            {/* Add more routes for CJ Portal part here if needed */}
          </Route>
        </Routes>
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
