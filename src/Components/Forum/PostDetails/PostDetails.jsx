import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReplyList from '../Replies/ReplyList.jsx'
import ReplyForm from '../Replies/ReplyForm.jsx'
import { usePosts } from '../Context/PostContext';

const PostDetails = () => {
    const { topicName, postId } = useParams();
    const navigate = useNavigate();
    const { postsData, setPostsData } = usePosts();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const topicPosts = postsData[topicName] || [];
        const selectedPost = topicPosts.find(p => p.id === parseInt(postId));
        setPost(selectedPost);
    }, [topicName, postId, postsData]);

    const handleReplyReaction = (replyId, type) => {
        const userId = "user123";
        const updatedReplies = post.replies.map(reply => {
            const updatedReactions = { ...(reply.reactions || {}), [userId]: type };
            return reply.id === replyId ? { ...reply, reactions: updatedReactions } : reply;
        });

        const updatedPost = { ...post, replies: updatedReplies };
        updatePostInContext(updatedPost);
    };

    const handleAddReply = (newReplyContent) => {
        const newReply = {
            id: post.replies.length + 1,
            content: newReplyContent,
            date: new Date().toISOString().split('T')[0],
            reactions: {}
        };

        const updatedPost = { ...post, replies: [...post.replies, newReply] };
        updatePostInContext(updatedPost);
    };

    const updatePostInContext = (updatedPost) => {
        const updatedPosts = postsData[topicName].map(p => p.id === updatedPost.id ? updatedPost : p);
        setPostsData({ ...postsData, [topicName]: updatedPosts });
        setPost(updatedPost);
    };

    const handleBackToPosts = () => {
        navigate(`/topic/${topicName}`);
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div id="post-details" className="post-details-container">
            <button onClick={handleBackToPosts} className="btn-custom-back">Back to Posts</button>
            <div className="post-section">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-content">{post.content}</p>
                <div className="post-date">Posted on {post.date}</div>
            </div>

            <h5 className="replies-heading">REPLIES</h5>
            <ReplyList replies={post.replies} handleReplyReaction={handleReplyReaction} />
            <ReplyForm onAddReply={handleAddReply} />
        </div>
    );
};

export default PostDetails;
