import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as React from 'react';
import * as Framermotion from 'framer-motion';
import * as LucideReact from 'lucide-react';

const Preview = ({ code }) => {
  // تجميع المكتبات التي سيحتاجها الكود
  const scope = {
    ...React,
    ...Framermotion,
    ...LucideReact,
    useState: React.useState,
    useEffect: React.useEffect,
  };

  return (
    <div className="glass-3d rounded-xl p-4">
      <h4 className="font-semibold text-amber-300 mb-2">👁️ المعاينة المباشرة</h4>
      <LiveProvider code={code} scope={scope} noInline={code.includes('export default')}>
        <div className="bg-gray-800 p-4 rounded-lg border border-white/10">
          <LivePreview />
        </div>
        <LiveError className="text-red-400 text-sm mt-2" />
      </LiveProvider>
    </div>
  );
};

export default Preview;
