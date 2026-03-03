const Editor = ({ code, onChange }) => {
  return (
    <div className="glass-3d rounded-xl p-4">
      <h4 className="font-semibold text-amber-300 mb-2">✏️ المحرر</h4>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 bg-gray-800 text-white font-mono text-sm p-3 rounded-lg border border-white/10 focus:border-amber-400 outline-none"
        dir="ltr"
      />
    </div>
  );
};

export default Editor;
