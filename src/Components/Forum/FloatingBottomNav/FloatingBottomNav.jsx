// FloatingBottomNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SiUpptime } from "react-icons/si";
import { MdOutlineTopic } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { FiHome } from "react-icons/fi";

const FloatingBottomNav = ({ onSignInClick, onSignUpClick }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white text-black shadow-lg flex items-center justify-between px-4 py-2 z-50">
            <div className="text-lg font-bold">
                <Link to="/">MAZUFORUMS</Link>
            </div>
            <div className="flex gap-6">
                <Link to="/" className="text-sm hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center">
                    <FiHome className="text-xl" />
                    <span className="text-xs">Home</span>
                </Link>
                <Link to="/topics" className="text-sm hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center">
                    <MdOutlineTopic className="text-xl" />
                    <span className="text-xs">Topics</span>
                </Link>
                <button onClick={onSignUpClick} className="text-sm hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center">
                    <SiUpptime className="text-xl" />
                    <span className="text-xs">Sign Up</span>
                </button>
                <button onClick={onSignInClick} className="text-sm hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center">
                    <PiSignIn className="text-xl" />
                    <span className="text-xs">Sign In</span>
                </button>
            </div>
        </footer>
    );
};

export default FloatingBottomNav;
