import React, { useState, useEffect, useContext, createContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Mock data for frontend-only development
        setPostsData({
            'Education': [{ id: 1, title: 'Sample Education Post', content: 'This is a sample post.', date: '2024-01-01', likes: 10 }],
            'Tourism': [{ id: 2, title: 'Sample Tourism Post', content: 'This is a sample post.', date: '2024-01-01', likes: 20 }],
            'Marriages': [{ id: 1, title: 'Sample Post', content: 'This is a sample post.', date: '2024-08-08', likes: 15 }],
        });
        setIsLoading(false);
    }, []);

    return (
        <PostContext.Provider value={{ postsData, setPostsData, isLoading }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
