import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { usePosts } from '../../Forum/Context/PostContext.jsx';


const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();
    const { postsData, setPostsData } = usePosts(); // Ensure setPostsData is properly imported

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
        <div className="flex flex-col mt-4 px-4">
            <button
                onClick={handleBackToTopics}
                className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 mb-4"
            >
                Back to Topics
            </button>
            <div className="flex flex-col items-center mt-4">
                <h1 className="text-2xl font-bold mb-4" style={{ color: '#023e8a', fontFamily: 'Outfit, sans-serif' }}>
                    {topicName} Discussions
                </h1>
                <button
                    onClick={handleCreatePost}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-bold"
                >
                    Create Post
                </button>
            </div>
            <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handlePostSubmit} />
            {posts.length > 0 ? (
                <ul className="list-none p-4 mt-4">
                    {posts.map((post) => (
                        <li key={post.id} className="border border-gray-300 rounded-md p-4 mb-4 hover:shadow-md cursor-pointer" onClick={() => handlePostClick(post.id)}>
                            <h2 className="text-orange-500 font-bold">{post.title}</h2>
                            <p className="text-gray-700">{post.content}</p>
                            <div className="text-gray-500 text-right">Posted on {post.date}</div>
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
