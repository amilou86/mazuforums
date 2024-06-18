import React, { useState, useEffect } from 'react';
import axios from 'axios'; // if using axios for API requests
import Post from '../Post/Post';


const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts'); //NEEDS REPLACING WITH ENDPOINT ADDRESS
                const fetchedPosts = response.data.posts || response.data; // Assuming posts are in "posts" or root of response
                setPosts(fetchedPosts.map((post) => ({ ...post, replyCount: 0 }))); // Set placeholder reply count
            } catch (err) {
                console.error(err);
            }
        };

        fetchPosts();
    }, []);

    // ... component logic

    return (
        <div className="posts-container">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post key={post._id} content={post.content} replyCount={post.replyCount} /> // Pass replyCount as a prop
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
};



export default PostsList