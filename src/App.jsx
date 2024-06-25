// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Topics from './Components/Topics/topics'; // Correct import path
import TopicPosts from './Components/TopicPosts/TopicPosts';
import SignUpModal from './Components/SignUpModal/SignUpModal'; // Import SignUpModal component

const App = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false); // State for SignUpModal visibility
  const [posts, setPosts] = useState([]); // State to store posts data

  const handleSignUp = (userData) => {
    // Handle sign-up logic here (e.g., send data to backend)
    console.log('Sign Up Data:', userData);
    // Simulated success message
    alert(`User ${userData.username} signed up successfully!`);
  };

  return (
    <Router>
      <div>
        <Navbar onSignUpClick={() => setShowSignUpModal(true)} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/topics" element={<Topics />} />
            <Route
              path="/topic/:topicName"
              element={<TopicPosts posts={posts} setPosts={setPosts} />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/signup"
              element={<SignUp onSignUp={handleSignUp} />}
            />
          </Routes>
        </div>
        <SignUpModal
          isOpen={showSignUpModal}
          onClose={() => setShowSignUpModal(false)}
          onSignUp={handleSignUp}
        />
      </div>
    </Router>
  );
};

export default App;
