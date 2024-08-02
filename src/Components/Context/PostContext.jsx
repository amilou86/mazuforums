import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

// Make sure backend has an endpoint like /api/posts that returns the posts data in the format the application expects. The endpoint should respond with a JSON object that has a structure similar to the initial state.

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts'); // Adjust the URL to the backend endpoint
                setPostsData(response.data);
            } catch (error) {
                console.error('Error fetching posts data:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ postsData, setPostsData }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
