import React, { useState } from 'react';
import './SignInModal.css';

const SignInModal = ({ isOpen, onClose, onSignIn }) => {
    // State variables to store user input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Simulated backend check (replace with actual backend integration)
        if (username === 'exampleuser' && password === 'Password1') {
            // Simulated successful sign-in
            onSignIn(username);
            onClose(); // Close the modal after successful sign-in
            setUsername('');
            setPassword('');
            setError('');
        } else {
            setError('Incorrect username or password.'); // Show error message for incorrect credentials
        }
    };

    // Clear input fields whenever the modal opens/closes (using useEffect)
    React.useEffect(() => {
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
