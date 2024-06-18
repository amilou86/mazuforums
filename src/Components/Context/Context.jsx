import { createContext } from 'react';


const Context = createContext({
    subforums: [
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
    ],
    setSubforums: () => { },
});

export default Context