import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Browse from './Components/Browse/Browse';
import Activity from './Components/Activity/Activity';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import MainPage from './Components/Forum/MainPage';

const App = () => {
  console.log("App component is being rendered.");
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/forum" element={<MainPage />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <MainPage />
        </div>
      </div>
    </Router>
  );
}

export default App;
