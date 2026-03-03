import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CodeSnippetPanel from './CodeSnippetPanel';
import Editor from './Editor';
import Preview from './Preview';

const Workspace = ({ mission, userCode, onCodeChange, onSnippetClick }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // محاكاة نسبة التقدم (يمكن تطويرها لاحقاً)
    setProgress(33);
  }, [mission]);

  return (
    <div className="glass-3d rounded-3xl p-6 mt-4">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-sm">
          <span>التقدّم</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-l from-amber-400 to-purple-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Mission description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 p-4 bg-white/5 rounded-xl border-r-4 border-amber-400"
      >
        <h3 className="text-xl mb-2">{mission.title}</h3>
        <p className="text-gray-300">{mission.description}</p>
      </motion.div>

      {/* Split screen */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <CodeSnippetPanel snippets={mission.snippets} onSnippetClick={onSnippetClick} />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <Editor code={userCode} onChange={onCodeChange} />
          <Preview code={userCode} />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
