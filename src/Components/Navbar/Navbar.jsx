import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MFlogo2 from '../../assets/MFlogo2.png';
import SignUpModal from '../SignUpModal/SignUpModal'; // Import SignUpModal component
import SignInModal from '../SignInModal/SignInModal'; // Import SignInModal component

const Navbar = ({ onNavLinkClick }) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false); // State for SignUpModal visibility
    const [showSignInModal, setShowSignInModal] = useState(false); // State for SignInModal visibility

    const handleSignUp = (userData) => {
        // Handle sign-up logic here (e.g., send data to backend)
        console.log('Sign Up Data:', userData);
        // Simulated success message
        alert(`User ${userData.username} signed up successfully!`);
        // Close the modal after sign-up
        setShowSignUpModal(false);
    };

    const handleSignInClick = () => {
        setShowSignInModal(true);
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
                <li>
                    <button className='btn' onClick={() => setShowSignUpModal(true)}>Sign Up</button>
                </li>
                {/* Add a button for Sign In */}
                <li>
                    <button className='btn' onClick={handleSignInClick}>Sign In</button>
                </li>
            </ul>
            <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} onSignUp={handleSignUp} />
            <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
        </nav>
    );
};

export default Navbar;
