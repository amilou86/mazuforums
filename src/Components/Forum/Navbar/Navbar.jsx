import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SignInModal from '../SignInModal/SignInModal.jsx';
import SignUpModal from '../SignUpModal/SignUpModal.jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleSignIn = (username) => {
        console.log(`User signed in: ${username}`);
    };

    const handleSignUp = (userData) => {
        console.log('User signed up:', userData);
    };

    return (
        <nav className="bg-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <div className="flex items-center flex-grow">
                <div className="logo text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif", color: "#023e8a" }}>
                    <Link to="/" className="text-lg font-bold">MAZUFORUMS</Link>
                </div>
            </div>

            <NavRight
                setIsOpen={setIsOpen}
                setIsSignInOpen={setIsSignInOpen}
                setIsSignUpOpen={setIsSignUpOpen}
            />

            <SignInModal
                isOpen={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
                onSignIn={handleSignIn}
            />

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
        <div className=" flex items-center flex-grow justify-end gap-6">
            <button
                className="block lg:hidden text-gray-950 text-2xl"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>Menu</span>
            </button>
            <Link to="/topics" className="text-[#023e8a] hover:text-indigo-600">Topics</Link>
            <Link to="/resource" className="text-[#023e8a] hover:text-indigo-600">Resource Library</Link>
            <Link to="/cjportal" className="text-[#023e8a] hover:text-indigo-600">Citizen Journalist Portal</Link>
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

export default Navbar;
