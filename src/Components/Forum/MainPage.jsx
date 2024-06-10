import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    // Initial list of forum topics
    const initialTopics = [
        { id: 1, title: "Health" },
        { id: 2, title: "Education" },
        { id: 3, title: "Technology" },
        // More topics to be created by the user
    ];

    // State to manage the list of topics
    const [topics, setTopics] = useState(initialTopics);
    // State to manage the input value for the new topic
    const [newTopicTitle, setNewTopicTitle] = useState('');

    // Handle form submission to add a new topic
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTopicTitle.trim() !== '') {
            const newTopic = {
                id: topics.length + 1, // Generate a unique ID for the new topic
                title: newTopicTitle.trim()
            };
            setTopics([...topics, newTopic]);
            setNewTopicTitle(''); // Clear the input field
        }
    };

    return (
        <div>
            <h1>Forum Topics:</h1>
            <ul>
                {topics.map(topic => (
                    <li key={topic.id}>
                        <Link to={`/topic/${topic.title}`}>
                            {topic.title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Form to create a new topic */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                    placeholder="Enter new topic title"
                />
                <button type="submit">Add Topic</button>
            </form>
        </div>
    );
}

export default MainPage;
