const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {children}
      <footer className="text-center py-6 text-gray-400 border-t border-white/10 mt-12">
        صممه أبو العارف
      </footer>
    </div>
  );
};

export default Layout;
