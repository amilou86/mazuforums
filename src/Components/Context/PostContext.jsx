import React, { useState, useContext, createContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState({
        Education: [
            { id: 1, title: 'Education Post 1', likes: 1100, date: '2023-07-01', image: 'education_image_url' },
            { id: 2, title: 'Education Post 2', likes: 15, date: '2023-07-02', image: 'education_image_url' }
        ],
        Health: [
            { id: 1, title: 'Health Post 1', likes: 20, date: '2024-07-03', image: 'health_image_url' }
        ],
        Energy: [
            { id: 1, title: 'Energy Post 1', likes: 5, date: '2023-07-04', image: 'energy_image_url' }
        ],
        Transport: [
            { id: 1, title: 'Transport Post 1', likes: 10, date: '2023-07-01', image: 'education_image_url' },
            { id: 2, title: 'Transport Post 2', likes: 15, date: '2023-07-02', image: 'education_image_url' }
        ],
        HumanRights: [
            { id: 1, title: 'HumanRights Post 1', likes: 20, date: '2023-07-03', image: 'health_image_url' }
        ],
        Tourism: [
            { id: 1, title: 'Tourism Post 1', likes: 5, date: '2023-07-04', image: 'energy_image_url' }
        ],
        Digital: [
            { id: 1, title: 'Digital Post 1', likes: 1, date: '2023-07-01', image: 'education_image_url' },
            { id: 2, title: 'Digital Post 2', likes: 1, date: '2023-07-02', image: 'education_image_url' },
            { id: 3, title: 'Digital Post 3', likes: 1, date: '2023-07-01', image: 'education_image_url' },
            { id: 4, title: 'Digital Post 4', likes: 1, date: '2023-07-02', image: 'education_image_url' }
        ],
        Agriculture: [
            { id: 1, title: 'Agriculture Post 1', likes: 20, date: '2023-07-03', image: 'health_image_url' }
        ],
        Domestic: [
            { id: 1, title: 'Domestic Violence Post 1', likes: 5, date: '2023-07-04', image: 'energy_image_url' }
        ],
        ChildAbuse: [
            { id: 1, title: 'Child Abuse Post 1', likes: 10, date: '2023-07-01', image: 'education_image_url' },
            { id: 2, title: 'Child Abuse Post 2', likes: 15, date: '2023-07-02', image: 'education_image_url' }
        ],
        ChildDefilement: [
            { id: 1, title: 'Child Defilement Post 1', likes: 20, date: '2023-07-03', image: 'health_image_url' }
        ],
        Online: [
            { id: 1, title: 'Online Abuse Post 1', likes: 5, date: '2023-07-04', image: 'energy_image_url' }
        ],
        EarlyMarriages: [
            { id: 1, title: 'Early Marriages Post 1', likes: 10, date: '2023-07-01', image: 'education_image_url' },
            { id: 2, title: 'Early Marriages Post 2', likes: 15, date: '2023-07-02', image: 'education_image_url' }
        ],
        AccessInfo: [
            { id: 1, title: 'Access to Information Post 1', likes: 20, date: '2023-07-03', image: 'health_image_url' }
        ],
        DataProtection: [
            { id: 1, title: 'Data Protection Post 1', likes: 5, date: '2023-07-04', image: 'energy_image_url' }
        ],

        // Add the remaining topics similarly with varied data
    });

    return (
        <PostContext.Provider value={{ postsData, setPostsData }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
