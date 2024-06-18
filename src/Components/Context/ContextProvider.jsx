import React, { useState } from 'react';
import Context from './Context'; // Import Context

const ContextProvider = ({ children }) => {
    const [subforums, setSubforums] = useState([
        {
            title: "Education",
            discussions: [
                { title: "New books", content: "..." },
                { title: "School parking", content: "..." }
            ],
        },
        {
            title: "Health",
            discussions: [
                { title: "New beds", content: "..." },
                { title: "hospital parking", content: "..." },
            ],
        }
    ]);

    return (
        <Context.Provider value={{ subforums, setSubforums }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
