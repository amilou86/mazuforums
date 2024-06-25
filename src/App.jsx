import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Topics from './Components/Topics/topics';
import TopicPosts from './Components/TopicPosts/TopicPosts';

const App = () => {
  const [allPosts, setAllPosts] = useState([
    { id: 1, title: "New Books", content: "My daughter's primary school needs new books, the current ones are old and out of date. When will they be replaced?", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [], topic: 'Education' },
    { id: 2, title: "School Meals", content: "My son's high school serves very unhealthy meals, we need the menu to include healthier options", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [], topic: 'Education' },
    { id: 3, title: "Solar Panels", content: "We need to install more solar panels in our community to reduce energy costs.", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [], topic: 'Energy' },
    { id: 4, title: "Electric Buses", content: "Our public transport should include more electric buses to reduce pollution.", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [], topic: 'Transport' },
    // Add more dummy posts as needed
  ]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:topicName" element={<TopicPosts posts={allPosts} setPosts={setAllPosts} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
