import React, { useState } from 'react';

const ReplySection = ({ post, onReplySubmit }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyContent, setReplyContent] = useState("");

    // Ensure post.replies is always an array
    const replies = Array.isArray(post.replies) ? post.replies : [];

    const handleReplySubmit = () => {
        if (replyContent.trim() === "") {
            alert("Reply cannot be empty");
            return;
        }
        console.log("Submitting reply:", replyContent);
        onReplySubmit(post.id, replyContent);
        setReplyContent(""); // Clear the input after submission
    };

    return (
        <div id="topic-posts" className="mt-4">
            <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-blue-500 text-sm mb-2"
            >
                {showReplies ? "Hide Replies" : `See Replies (${replies.length})`}
            </button>
            {showReplies && (
                <div className="ml-4">
                    {replies.length > 0 ? (
                        <ul className="list-none">
                            {replies.map((reply) => (
                                <li key={reply.id} className="border-t border-gray-300 py-2">
                                    {reply.content}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No replies yet.</p>
                    )}
                    <div className="flex items-center mt-2">
                        <input
                            type="text"
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            className="border border-gray-300 rounded-md px-2 py-1 mr-2 w-full"
                            placeholder="Write a reply..."
                        />
                        <button
                            onClick={handleReplySubmit}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                        >
                            Reply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReplySection;
