import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { usePosts } from '../../Forum/Context/PostContext.jsx';
import ReplySection from '../Replies/ReplySection.jsx';

const reactionsList = ["👍", "❤️", "😂", "😮", "😢", "👏"];

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
        const updatedPosts = [...posts, { ...newPost, likes: 0, reactions: {}, replies: [] }];
        setPostsData({ ...postsData, [topicName]: updatedPosts });
        setIsModalOpen(false);
    };

    const handleLike = (postId) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        );
        setPostsData({ ...postsData, [topicName]: updatedPosts });
    };

    const handleReaction = (postId, reaction) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                const currentReactionCount = (post.reactions && post.reactions[reaction]) || 0;
                const newReaction = currentReactionCount > 0 ? 0 : 1; // Toggle reaction
                return {
                    ...post,
                    reactions: { ...post.reactions, [reaction]: newReaction }
                };
            }
            return post;
        });
        setPostsData({ ...postsData, [topicName]: updatedPosts });
    };

    const handleReplySubmit = (postId, replyContent) => {
        if (replyContent.trim() === "") {
            alert("Reply cannot be empty");
            return;
        }
        const updatedPosts = posts.map((post) =>
            post.id === postId
                ? {
                    ...post,
                    replies: [...(post.replies || []), { id: Date.now(), content: replyContent }]
                }
                : post
        );
        setPostsData({ ...postsData, [topicName]: updatedPosts });
    };

    return (
        <div id="topic-posts" className="flex flex-col mt-4 px-4">
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleBackToTopics}
                    className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
                >
                    Back to Topics
                </button>
            </div>
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
                <ul className="list-none p-4 mt-4 w-full">
                    {posts.map((post) => (
                        <li key={post.id} className="border border-gray-300 rounded-md p-4 mb-4 hover:shadow-md">
                            <h2 className="text-orange-500 font-bold">{post.title}</h2>
                            <p className="text-gray-700 mb-2">{post.content}</p>
                            <div className="text-gray-500 text-right">Posted on {post.date}</div>

                            {/* Like and Reactions */}
                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() => handleLike(post.id)}
                                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 mr-2"
                                >
                                    👍 {post.likes}
                                </button>
                                {reactionsList.map((reaction) => (
                                    <button
                                        key={reaction}
                                        onClick={() => handleReaction(post.id, reaction)}
                                        className="text-xl mx-1"
                                    >
                                        {reaction} {(post.reactions?.[reaction] || 0)}
                                    </button>
                                ))}
                            </div>

                            {/* Reply Section */}
                            <ReplySection post={post} onReplySubmit={handleReplySubmit} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default TopicPosts;
