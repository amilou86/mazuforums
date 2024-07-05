import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState({
        Education: [
            {
                id: 1,
                title: 'New Books',
                content: "Our children's schools need new text books, are they going to be replaced soon?",
                date: '2023-01-01',
                replies: [
                    { id: 1, content: 'This is very important!', date: '2023-01-02' },
                    { id: 2, content: 'Agreed!', date: '2023-01-03' }
                ],
                likes: 5,
                likedBy: ['user1', 'user2']
            },
            // Add more posts for Education
        ],
        Health: [
            {
                id: 1,
                title: 'Hospital Beds',
                content: 'There are not enough beds in the hospitals, we urgently need more.',
                date: '2023-02-01',
                replies: [
                    { id: 1, content: 'We also need the sheets and pillows replaced more often.', date: '2023-02-02' },
                ],
                likes: 3,
                likedBy: ['user3']
            },
            {
                id: 2,
                title: 'Appointment waiting times',
                content: "There are not enough appointments available in a reasonable time, we need access to medical treatment without a long wait.",
                date: '2024-06-26',
                replies: [
                    { id: 1, content: "I agree, we need more doctors and nurses so we can be treated when we need it", date: '2024-06-30' }
                ],
                likes: 5,
                likedBy: ['user5']
            }
        ],
        // Add more topics with their posts here
    });

    return (
        <PostContext.Provider value={{ postsData, setPostsData }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
