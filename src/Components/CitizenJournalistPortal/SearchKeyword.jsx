import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SimpleModal = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-gray-900/50 fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg"
          >
            <h3 className="text-xl font-bold text-center mb-4">
              Search For A Keyword
            </h3>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter keyword..."
              className="w-full p-2 mb-4 rounded border border-gray-300 text-black placeholder-gray-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 text-black w-full py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white w-full py-2 rounded"
              >
                Search!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SimpleModal;
