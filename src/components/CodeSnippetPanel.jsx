import { useState } from 'react';
import { motion } from 'framer-motion';

const CodeSnippetPanel = ({ snippets, onSnippetClick }) => {
  const [usedSnippets, setUsedSnippets] = useState([]);

  const handleClick = (snippet) => {
    if (!usedSnippets.includes(snippet.id)) {
      setUsedSnippets([...usedSnippets, snippet.id]);
      onSnippetClick(snippet.code);
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-amber-300">📦 الكتل البرمجية</h4>
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          whileHover={{ scale: usedSnippets.includes(snippet.id) ? 1 : 1.02 }}
          className={`p-3 rounded-xl cursor-pointer transition-all ${
            usedSnippets.includes(snippet.id)
              ? 'bg-gray-700/50 opacity-60 line-through pointer-events-none'
              : 'glass-3d hover:shadow-amber-500/20'
          }`}
          onClick={() => handleClick(snippet)}
        >
          <p className="text-sm font-semibold text-amber-200 mb-1">{snippet.label}</p>
          <pre className="text-xs bg-black/30 p-2 rounded-lg overflow-x-auto text-gray-300">
            {snippet.code}
          </pre>
        </motion.div>
      ))}
    </div>
  );
};

export default CodeSnippetPanel;
