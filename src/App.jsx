import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Browse from './Components/Browse/Browse'
import Activity from './Components/Activity/Activity'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Browse />
      </div>
      <Activity />
      <SignIn />
      <SignUp />
    </div>
  )
}

export default App