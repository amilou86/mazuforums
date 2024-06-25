import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MFlogo2 from '../../assets/MFlogo2.png';
import SignUpModal from '../SignUpModal/SignUpModal'; // Import SignUpModal component

const Navbar = ({ onNavLinkClick }) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false); // State for SignUpModal visibility

    const handleSignUp = (userData) => {
        // Handle sign-up logic here (e.g., send data to backend)
        console.log('Sign Up Data:', userData);
        // Simulated success message
        alert(`User ${userData.username} signed up successfully!`);
        // Close the modal after sign-up
        setShowSignUpModal(false);
    };

    return (
        <nav className='container navbar'>
            <img src={MFlogo2} alt="logo" className='logo' />
            <ul>
                <li>
                    <Link to="/" onClick={() => onNavLinkClick('home')}>Home</Link>
                </li>
                <li>
                    <Link to="/topics" onClick={() => onNavLinkClick('topics')}>Topics</Link>
                </li>
                <li><button className='btn' onClick={() => setShowSignUpModal(true)}>Sign Up</button></li>
            </ul>
            <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} onSignUp={handleSignUp} />
        </nav>
    );
};

export default Navbar;
