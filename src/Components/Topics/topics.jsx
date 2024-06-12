import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {

    // Mock data for topics
    const mockTopics = [
        { title: "General Discussion" },
        { title: "Tech Talk" },
        { title: "Art & Design" },
        { title: "Gaming Zone" },
        { title: "Bookworms Corner" },
    ];

    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {/* Map over the mockTopics array directly */}
                {mockTopics.map((topic) => (
                    <li key={topic.title}>
                        <Link to={`/forum/${topic.title}`}>{topic.title}</Link>
                    </li>
                ))}
            </ul>

            {/* Form to create new topics (optional) */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const newTopic = { title: e.target.title.value };
                // Implement logic to add new topic to backend (when available)
            }}>
                <input type="text" name="title" placeholder="New Topic Title" />
                <button type="submit">Create Topic</button>
            </form>
        </div>
    );
};

export default Topics;
