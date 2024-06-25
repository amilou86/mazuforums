import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicPosts.css';
import { FaHeart } from 'react-icons/fa';
import CreatePostModal from '../CreatePostModal/CreatePostModal'; // Import the modal component

const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Dummy data for posts (replace with actual API fetch logic if available)
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'First Post Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '2023-01-01',
            replies: [
                { content: 'Reply 1', date: '2023-01-02' },
                { content: 'Reply 2', date: '2023-01-03' }
            ],
            likes: 5,
            likedBy: ['user1', 'user2']
        },
        {
            id: 2,
            title: 'Second Post Title',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2023-01-02',
            replies: [],
            likes: 2,
            likedBy: ['user3']
        }
    ]);

    // Function to handle like button click
    const handleLike = (postId) => {
        const userId = "user123"; // Replace with actual user ID from authentication context or state

        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                if (!post.likedBy.includes(userId)) {
                    return {
                        ...post,
                        likes: post.likes + 1,
                        likedBy: [...post.likedBy, userId]
                    };
                }
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Function to handle back button click to Topics page
    const handleBackToTopics = () => {
        navigate('/topics');
    };

    // Function to handle back button click to Browse page
    const handleBackToBrowse = () => {
        navigate('/browse');
    };

    const handleOpenCreatePost = () => {
        setShowModal(true); // Open the modal on button click
    };

    return (
        <div>
            <h1>{topicName} Discussions</h1>
            <div className="d-flex justify-content-between mb-3">
                <button onClick={handleBackToTopics} className="btn-custom-back">Back to Topics</button>
                <button onClick={handleBackToBrowse} className="btn-custom-back">Back to Browse</button>
                <button onClick={handleOpenCreatePost} className="btn-custom-create">Create New Post</button>
            </div>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                        <div className="post-date">Posted on {post.date}</div>

                        {/* Display replies */}
                        <ul>
                            {post.replies.map((reply, index) => (
                                <li key={index} className="reply-item">
                                    <p className="reply-content">{reply.content}</p>
                                    <div className="reply-date">Replied on {reply.date}</div>
                                </li>
                            ))}
                        </ul>

                        {/* Like button */}
                        <div className="post-likes">
                            <button onClick={() => handleLike(post.id)} className="btn-custom-like">
                                <FaHeart /> {/* Using the FaHeart icon */}
                            </button>
                            <span className="likes-count">{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Render CreatePostModal if showModal state is true */}
            {showModal && (
                <CreatePostModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={(newPostData) => {
                        // Handle post submission logic here
                        console.log(newPostData);
                        setPosts([...posts, newPostData]);
                    }}
                />
            )}
        </div>
    );
};

export default TopicPosts;
