import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MFlogo2 from '../../assets/MFlogo2.png';
import SignUpModal from '../SignUpModal/SignUpModal';
import SignInModal from '../SignInModal/SignInModal';

const Navbar = ({ onNavLinkClick }) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false); // State for SignUpModal visibility
    const [showSignInModal, setShowSignInModal] = useState(false); // State for SignInModal visibility

    const handleSignUp = async (userData) => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Sign Up Data:', data);
                alert(`User ${data.username} signed up successfully!`);
                setShowSignUpModal(false);
            } else {
                const error = await response.json();
                alert(`Sign Up Failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Sign Up Error:', error);
            alert('An error occurred during sign up. Please try again.');
        }
    };

    const handleSignIn = async (credentials) => {
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Sign In Data:', data);
                alert(`User ${data.username} signed in successfully!`);
                setShowSignInModal(false);
            } else {
                const error = await response.json();
                alert(`Sign In Failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Sign In Error:', error);
            alert('An error occurred during sign in. Please try again.');
        }
    };

    return (
        <div className="full-width-container">
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
                        <button className='btn' onClick={() => setShowSignInModal(true)}>Sign In</button>
                    </li>
                </ul>
                <SignUpModal
                    isOpen={showSignUpModal}
                    onClose={() => setShowSignUpModal(false)}
                    onSignUp={handleSignUp}
                />
                <SignInModal
                    isOpen={showSignInModal}
                    onClose={() => setShowSignInModal(false)}
                    onSignIn={handleSignIn}
                />
            </nav>
        </div>
    );
};

export default Navbar;
