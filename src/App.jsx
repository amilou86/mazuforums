import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse'; // Import Browse component
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import MainPage from './Components/Forum/MainPage'; // Import MainPage component (optional)
import TopicDiscussions from './Components/Forum/TopicDiscussions';
import Topics from './Components/Topics/topics'

const App = () => {
  console.log("App component is being rendered.");
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        {/* <Browse /> */}  {/* Comment out if Browse is not meant for initial rendering */}
        <MainPage />  {/* Assuming MainPage handles user authentication or doesn't require it */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Browse />} />  {/* Route for Browse component */}
            <Route path="/topics" element={<Topics />} />  {/* Route for Topics component */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/topic/:topicName" element={<TopicDiscussions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
