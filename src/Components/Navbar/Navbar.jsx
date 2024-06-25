import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MFlogo2 from '../../assets/MFlogo2.png';

const Navbar = ({ onNavLinkClick }) => {
    return (
        <nav className='container navbar'>
            <img src={MFlogo2} alt="logo" className='logo' />
            <ul>
                <li>
                    <Link to="/" onClick={() => onNavLinkClick('home')}>Home</Link>
                </li>
                {/* <li>
                    <Link to="/browse" onClick={() => onNavLinkClick('browse')}>Browse</Link>
                </li> */}
                <li>
                    <Link to="/topics" onClick={() => onNavLinkClick('topics')}>Topics</Link>
                </li>
                <li><button className='btn'>Sign In</button></li>
                <li><button className='btn'>Sign Up</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
