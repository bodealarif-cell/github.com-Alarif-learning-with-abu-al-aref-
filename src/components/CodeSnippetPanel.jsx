import { useState } from 'react';
import { motion } from 'framer-motion';

const CodeSnippetPanel = ({ snippets, onSnippetClick }) => {
  const [clickedIds, setClickedIds] = useState([]);

  const handleClick = (snippet) => {
    if (!clickedIds.includes(snippet.id)) {
      setClickedIds([...clickedIds, snippet.id]);
    }
    onSnippetClick(snippet.code);
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-amber-300">📦 الكتل البرمجية</h4>
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          whileHover={{ scale: 1.02 }}
          className={`p-3 rounded-xl cursor-pointer transition-all ${
            clickedIds.includes(snippet.id)
              ? 'bg-gray-700/50 opacity-60 line-through'
              : 'glass-3d'
          }`}
          onClick={() => handleClick(snippet)}
        >
          <p className="text-sm">{snippet.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CodeSnippetPanel;
