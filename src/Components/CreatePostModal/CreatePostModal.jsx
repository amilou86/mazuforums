import React, { useState } from 'react';
import './CreatePostModal.css';

// Assumptions
// The backend API endpoint /api/posts accepts a POST request to create a new post and responds with the created post data.
// The onPostCreated function in the parent component handles the newly created post appropriately.

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/posts', { // Replace with backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: newPost.title,
                    content: newPost.content,
                    date: new Date().toLocaleString(),
                    replies: [],
                    likes: 0,
                    likedBy: []
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            const createdPost = await response.json();
            onPostCreated(createdPost); // Notify parent component of the new post
            setNewPost({ title: '', content: '' });
            onClose(); // Close the modal after submitting
        } catch (error) {
            setError(error.message); // Set error message for display
        }
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create New Post</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Post Title"
                                    className="form-control"
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="content"
                                    placeholder="Post Content"
                                    className="form-control"
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                ></textarea>
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit" className="btn btn-primary">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
