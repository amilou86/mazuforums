import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicPosts.css';

const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();

    // Dummy posts data for different topics
    const dummyPosts = {
        Education: [
            { id: 1, title: 'New Books', content: "Our children's schools need new text books...", date: '2023-01-01' },
        ],
        Health: [
            { id: 1, title: 'Hospital Beds', content: 'There are not enough beds in the hospitals...', date: '2023-02-01' },
            { id: 2, title: 'Appointment Waiting Times', content: "There are not enough appointments available...", date: '2024-06-26' }
        ],
        // Add more topics with posts here
    };

    const handlePostClick = (postId) => {
        navigate(`/topic/${topicName}/post/${postId}`);
    };

    const handleBackToTopics = () => {
        navigate('/topics');
    };

    return (
        <div>
            <button onClick={handleBackToTopics} className="btn btn-secondary">Back to Topics</button>
            <h1>{topicName} Discussions</h1>
            <ul className="post-list">
                {dummyPosts[topicName].map(post => (
                    <li key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                        <div className="post-date">Posted on {post.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicPosts;
