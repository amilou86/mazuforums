import React from 'react'
import { Link } from 'react-router-dom' // Import Link component
import './Navbar.css'
import MFlogo from '../../assets/MFlogo1.png'
import MFlogo2 from '../../assets/MFlogo2.png'
import MFlogo3 from '../../assets/MFlogo3.png'
import soundwave1 from '../../assets/soundwave1.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={MFlogo2} alt="logo" className='logo' />
            <ul>
                <li>
                    <Link to="/">Home</Link>  {/* Link to the root path ("/") for Home */}
                </li>
                <li>
                    <Link to="/">Browse</Link>
                </li>
                <li>
                    <Link to="/">Topics</Link>
                </li>
                <li><button className='btn'>Sign In</button></li>
                <li><button className='btn'>Sign Up</button></li>
            </ul>

        </nav>
    )
}

export default Navbar
