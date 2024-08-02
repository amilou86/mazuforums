import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUpModal.css';

// Make sure backend is set up to handle the /api/signup endpoint and responds with appropriate status codes and messages.

const SignUpModal = ({ isOpen, onClose, onSignUp }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validate inputs (check if any field is empty)
        if (!firstName || !lastName || !email || !username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Validate password requirements
        if (!isValidPassword(password)) {
            setPasswordError('Password must be at least 6 characters long, contain at least one capital letter, and at least one number.');
            return;
        }

        // Prepare user data object
        const userData = {
            firstName,
            lastName,
            email,
            username,
            password,
        };

        try {
            const response = await axios.post('/api/signup', userData);

            if (response.status === 201) { // Assuming 201 Created status for successful sign-up
                onSignUp(userData); // Call the onSignUp callback with the user data
                onClose(); // Close the modal after successful sign-up
                setFirstName('');
                setLastName('');
                setEmail('');
                setUsername('');
                setPassword('');
                setError('');
                setPasswordError('');
            }
        } catch (err) {
            setError('Sign-up failed. Please try again.');
        }
    };

    // Password validation function
    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
        return regex.test(password);
    };

    useEffect(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setError('');
        setPasswordError('');
    }, [isOpen]); // Clear on isOpen change

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}> {/* Apply 'show' class when modal is open */}
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Sign Up</h5> {/* Added "Sign Up" heading */}
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {error && <div className="alert alert-danger">{error}</div>} {/* Display general error message if any */}
                        {passwordError && <div className="alert alert-danger">{passwordError}</div>} {/* Display password error message if any */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
