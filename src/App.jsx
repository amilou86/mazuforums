import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import MainPage from './Components/Forum/MainPage';
import TopicDiscussions from './Components/Forum/TopicDiscussions';

const App = () => {
  console.log("App component is being rendered.");
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        {/* <Browse /> */}
        <MainPage />
        <div className="container">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/forum" element={<MainPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/topic/:topicName" element={<TopicDiscussions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

