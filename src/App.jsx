import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Topics from './Components/Topics/topics';
import TopicPosts from './Components/TopicPosts/TopicPosts';
import SignUpModal from './Components/SignUpModal/SignUpModal';
import PostDetails from './Components/PostDetails/PostDetails';
import { PostProvider } from './Components/Context/PostContext';

const App = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUp = (userData) => {
    console.log('Sign Up Data:', userData);
    alert(`User ${userData.username} signed up successfully!`);
  };

  return (
    <PostProvider>
      <Router>
        <div>
          <Navbar onSignUpClick={() => setShowSignUpModal(true)} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/topic/:topicName" element={<TopicPosts />} />
              <Route path="/topic/:topicName/post/:postId" element={<PostDetails />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            </Routes>
          </div>
          <SignUpModal
            isOpen={showSignUpModal}
            onClose={() => setShowSignUpModal(false)}
            onSignUp={handleSignUp}
          />
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
