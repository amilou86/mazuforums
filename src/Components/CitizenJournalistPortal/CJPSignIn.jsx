import React from "react";
import { SiGithub, SiTwitter } from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

export const CJPSignIn = ({ onClose, onSignIn }) => {
    const navigate = useNavigate();  // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignIn();  // Call the passed sign-in handler if needed

        // Navigate to the CJPHero and CJPNavbar components after successful sign-in
        navigate('/cjportal');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-zinc-950 text-zinc-200 p-8 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-sm text-blue-400"
                >
                    <FiArrowLeft />
                    Go back
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.25, ease: "easeInOut" }}
                    className="relative z-10 mx-auto w-full max-w-xl"
                >
                    <Heading />

                    <SocialOptions />
                    <Or />
                    <form onSubmit={handleSubmit}>
                        <Email />
                        <Terms />
                        <SplashButton type="submit" className="w-full">
                            Sign in
                        </SplashButton>
                    </form>
                </motion.div>

                <CornerGrid />
            </div>
        </div>
    );
};

const Heading = () => (
    <div>
        <NavLogo />
        <div className="mb-9 mt-6 space-y-1.5">
            <h1 className="text-2xl font-semibold">Sign in to your account</h1>
            <p className="text-zinc-400">
                Don't have an account?{" "}
                <a href="#" className="text-blue-400">
                    Create one.
                </a>
            </p>
        </div>
    </div>
);

const SocialOptions = () => (
    <div>
        <div className="mb-3 flex gap-3">
            <BubbleButton className="flex w-full justify-center py-3">
                <SiTwitter />
            </BubbleButton>
            <BubbleButton className="flex w-full justify-center py-3">
                <SiGithub />
            </BubbleButton>
        </div>
        <BubbleButton className="flex w-full justify-center py-3">
            Sign in with SSO
        </BubbleButton>
    </div>
);

const Or = () => (
    <div className="my-6 flex items-center gap-3">
        <div className="h-[1px] w-full bg-zinc-700" />
        <span className="text-zinc-400">OR</span>
        <div className="h-[1px] w-full bg-zinc-700" />
    </div>
);

const Email = () => (
    <div className="mb-3">
        <label htmlFor="email-input" className="mb-1.5 block text-zinc-400">
            Email
        </label>
        <input
            id="email-input"
            type="email"
            placeholder="your.email@provider.com"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700"
        />
    </div>
);

const Terms = () => (
    <p className="mt-9 text-xs text-zinc-400">
        By signing in, you agree to our{" "}
        <a href="#" className="text-blue-400">
            Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-400">
            Privacy Policy.
        </a>
    </p>
);

const SplashButton = ({ children, className, ...rest }) => (
    <button
        className={twMerge(
            "rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
            className
        )}
        {...rest}
    >
        {children}
    </button>
);

const BubbleButton = ({ children, className, ...rest }) => (
    <button
        className={twMerge(
            "relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-1.5 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100",
            className
        )}
        {...rest}
    >
        {children}
    </button>
);

const CornerGrid = () => (
    <div
        style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute right-0 top-0 z-0 size-[50vw]"
    >
        <div
            style={{
                backgroundImage: "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))",
            }}
            className="absolute inset-0"
        />
    </div>
);

const NavLogo = () => (
    <a href="#">
        <svg width="99" height="21" viewBox="0 0 99 21" fill="none">
            {/* SVG content */}
        </svg>
    </a>
);

export default CJPSignIn;
