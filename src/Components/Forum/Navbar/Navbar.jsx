import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Ensure this is imported
import SignInModal from '../SignInModal/SignInModal.jsx'; // Import SignInModal
import SignUpModal from '../SignUpModal/SignUpModal.jsx'; // Import SignUpModal

const FlipNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false); // State for SignIn modal
    const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State for SignUp modal

    const handleSignIn = (username) => {
        console.log(`User signed in: ${username}`);
        // Handle any post sign-in logic here
    };

    const handleSignUp = (userData) => {
        console.log('User signed up:', userData);
        // Handle any post sign-up logic here
    };

    return (
        <nav className="bg-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <div className="flex items-center flex-grow">
                <div className="logo text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif", color: "#023e8a" }}>
                    <StyledNavLink text="MAZUFORUMS" to="/" />
                </div>
            </div>

            <NavRight
                setIsOpen={setIsOpen}
                setIsSignInOpen={setIsSignInOpen}
                setIsSignUpOpen={setIsSignUpOpen}
            />

            {/* Sign In Modal */}
            <SignInModal
                isOpen={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
                onSignIn={handleSignIn}
            />

            {/* Sign Up Modal */}
            <SignUpModal
                isOpen={isSignUpOpen}
                onClose={() => setIsSignUpOpen(false)}
                onSignUp={handleSignUp}
            />
        </nav>
    );
};

const NavRight = ({ setIsOpen, setIsSignInOpen, setIsSignUpOpen }) => {
    return (
        <div className="flex items-center flex-grow justify-end gap-6">
            <button
                className="block lg:hidden text-gray-950 text-2xl"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>Menu</span>
            </button>
            <StyledNavLink to="/topics" text="Topics" />
            <StyledNavLink to="/resource" text="Resource Library" />
            <StyledNavLink to="/citizen" text="Citizen Journalist Portal" />
            <button
                onClick={() => setIsSignInOpen(true)}
                className="text-[#023e8a] hover:text-indigo-600"
            >
                Sign In
            </button>
            <button
                onClick={() => setIsSignUpOpen(true)}
                className="text-[#023e8a] hover:text-indigo-600"
            >
                Sign Up
            </button>
        </div>
    );
};

// Styled NavLink with animations for right-side links
const StyledNavLink = ({ text, to }) => {
    return (
        <Link to={to} className="hidden lg:block h-[30px] overflow-hidden font-medium">
            <motion.div whileHover={{ y: -30 }}>
                <span className="flex items-center h-[30px] text-[#023e8a]">{text}</span>
                <span className="flex items-center h-[30px] text-indigo-600">{text}</span>
            </motion.div>
        </Link>
    );
};

export default FlipNav;