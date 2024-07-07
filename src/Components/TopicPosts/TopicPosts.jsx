import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicPosts.css';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { usePosts } from '../Context/PostContext'; // Adjust the import path if necessary

const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();
    const { postsData, setPostsData } = usePosts();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const posts = postsData[topicName] || [];

    const handlePostClick = (postId) => {
        navigate(`/topic/${topicName}/post/${postId}`);
    };

    const handleBackToTopics = () => {
        navigate('/topics');
    };

    const handleCreatePost = () => {
        setIsModalOpen(true);
    };

    const handlePostSubmit = (newPost) => {
        const updatedPosts = [...posts, newPost];
        setPostsData({ ...postsData, [topicName]: updatedPosts });
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleBackToTopics} className="btn btn-secondary">Back to Topics</button>
            <h1>{topicName} Discussions</h1>
            <button onClick={handleCreatePost} className="btn btn-primary">Create Post</button>
            <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handlePostSubmit} />
            {posts.length > 0 ? (
                <ul className="post-list">
                    {posts.map(post => (
                        <li key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-content">{post.content}</p>
                            <div className="post-date">Posted on {post.date}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available for this topic.</p>
            )}
        </div>
    );
};

export default TopicPosts;
