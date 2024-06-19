import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse'; // Import Browse component
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import TopicPosts from './Components/TopicPosts/TopicPosts';
import Topics from './Components/Topics/topics'

const App = () => {
  const [showMainContent, setShowMainContent] = useState(true); // Initial state

  const handleTopicClick = () => {
    setShowMainContent(false); // Hide main content on click
  };

  return (
    <Router>
      <div>
        <Navbar onTopicClick={handleTopicClick} />
        {showMainContent && ( // Conditionally render main content
          <>
            <Hero />
            <Browse />
          </>
        )}
        <div className="container">
          <Routes>
            <Route path="/" element={<><Hero /><Browse /></>} /> {/* Home route */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/topics" element={<Topics />} /> {/* Corrected Topics route */}
            <Route path="/topic/:topicName" element={<TopicPosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
