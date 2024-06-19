import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TopicPosts.css';

const TopicPosts = () => {
    const { topicName } = useParams();
    const [posts, setPosts] = useState([
        { id: 1, title: "New Books", content: "My daughter's primary school needs new books, the current ones are old and out of date. When will they be replaced?", date: new Date().toLocaleString(), replies: [] },
        { id: 2, title: "School Meals", content: "My son's high school serves very unhealthy meals, we need the menu to include healthier options", date: new Date().toLocaleString(), replies: [] },
    ]);

    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const newPostData = {
            id: posts.length + 1,
            title: newPost.title,
            content: newPost.content,
            date: new Date().toLocaleString(),
            replies: [],
        };
        setPosts([...posts, newPostData]);
        setNewPost({ title: '', content: '' });
    };

    const handleReplySubmit = (e, postId) => {
        e.preventDefault();
        const replyContent = e.target.elements.replyContent.value;
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                const newReply = { content: replyContent, date: new Date().toLocaleString() };
                return { ...post, replies: [...post.replies, newReply] };
            }
            return post;
        });
        setPosts(updatedPosts);
        e.target.elements.replyContent.value = '';
    };

    return (
        <div>
            <h1>{topicName} Discussions</h1>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                        <div className="post-date">Posted on {post.date}</div> {/* Updated to div */}
                        <ul>
                            {post.replies.map((reply, index) => (
                                <li key={index} className="reply-item">
                                    <p className="reply-content">{reply.content}</p>
                                    <div className="reply-date">Replied on {reply.date}</div> {/* Updated to div */}
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={(e) => handleReplySubmit(e, post.id)} className="reply-form">
                            <input type="text" name="replyContent" placeholder="Reply to this post" className="form-control" />
                            <button type="submit" className="btn btn-secondary mt-2">Reply</button>
                        </form>
                    </li>
                ))}
            </ul>

            <form onSubmit={handlePostSubmit} className="mt-3">
                <input
                    type="text"
                    name="title"
                    placeholder="Post Title"
                    className="form-control"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    name="content"
                    placeholder="Post Content"
                    className="form-control mt-2"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                ></textarea>
                <button type="submit" className="btn btn-primary mt-2">Create Post</button>
            </form>
        </div>
    );
};

export default TopicPosts;
