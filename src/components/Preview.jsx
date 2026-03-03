import { useEffect, useRef } from 'react';

const Preview = ({ code }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const html = `
      <!DOCTYPE html>
      <html dir="rtl">
      <head>
        <meta charset="UTF-8">
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/framer-motion/dist/framer-motion.js"></script>
        <script src="https://unpkg.com/lucide-react/dist/umd/lucide-react.min.js"></script>
        <style>body { background: #1f2937; color: white; }</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          // User's code (assumed to be a component that exports default)
          ${code}

          // Render the default export
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(App.default || App));
        </script>
      </body>
      </html>
    `;

    iframeRef.current.srcdoc = html;
  }, [code]);

  return (
    <div className="glass-3d rounded-xl p-4">
      <h4 className="font-semibold text-amber-300 mb-2">👁️ المعاينة المباشرة</h4>
      <iframe
        ref={iframeRef}
        title="preview"
        className="w-full h-64 bg-white/5 rounded-lg border border-white/10"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default Preview;
