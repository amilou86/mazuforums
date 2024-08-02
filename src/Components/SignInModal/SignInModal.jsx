import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignInModal.css';

// Ensure the /api/signin endpoint is correctly set up on your backend to handle the POST request with the username and password, and that it returns a proper response indicating success or failure of the sign-in attempt.

const SignInModal = ({ isOpen, onClose, onSignIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('/api/signin', {
                username,
                password
            });

            // Assuming the backend sends back a user object or a success message
            if (response.status === 200) {
                onSignIn(username); // Call the onSignIn callback with the username
                onClose(); // Close the modal after successful sign-in
                setUsername('');
                setPassword('');
                setError('');
            }
        } catch (err) {
            setError('Incorrect username or password.'); // Show error message for incorrect credentials
        }
    };

    useEffect(() => {
        setUsername('');
        setPassword('');
        setError('');
    }, [isOpen]); // Clear on isOpen change

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Sign In</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
