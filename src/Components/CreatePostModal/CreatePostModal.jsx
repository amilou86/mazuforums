import React, { useState } from 'react';
import './CreatePostModal.css'

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Date.now(), // Unique id for the new post
            title: newPost.title,
            content: newPost.content,
            date: new Date().toLocaleString(),
            replies: [],
            likes: 0,
            likedBy: []
        });
        setNewPost({ title: '', content: '' });
        onClose(); // Close the modal after submitting
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
                            <button type="submit" className="btn btn-primary">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
