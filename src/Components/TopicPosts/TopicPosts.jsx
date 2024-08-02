import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TopicPosts.css';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { usePosts } from '../Context/PostContext';

// Ensure backend has endpoints set up to handle GET /api/topics/:topicName/posts and POST /api/topics/:topicName/posts requests.

const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();
    const { postsData, setPostsData } = usePosts(); // Ensure setPostsData is properly imported

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts for the topic from the backend on component mount
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`/api/topics/${topicName}/posts`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [topicName]);

    const handlePostClick = (postId) => {
        navigate(`/topic/${topicName}/post/${postId}`);
    };

    const handleBackToTopics = () => {
        navigate('/topics');
    };

    const handleCreatePost = () => {
        setIsModalOpen(true);
    };

    const handlePostSubmit = async (newPost) => {
        try {
            // Send the new post to the backend
            const response = await axios.post(`/api/topics/${topicName}/posts`, newPost);

            // Update local state with the new post
            const updatedPosts = [...posts, response.data];
            setPosts(updatedPosts);
            setPostsData({ ...postsData, [topicName]: updatedPosts });
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error creating post:', error);
        }
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
