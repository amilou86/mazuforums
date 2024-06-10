import React from 'react'
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
                <li>Home</li>
                <li>Browse</li>
                <li>Activity</li>
                <li><button className='btn'>Sign In</button></li>
                <li>Sign Up</li>
            </ul>

        </nav>
    )
}

export default Navbar