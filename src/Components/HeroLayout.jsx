const HeroLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d012f] via-[#14043b] to-[#0b022e] overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-40 right-20"></div>
        <div className="absolute w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-20 left-1/3"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 pt-20 md:pt-0">
        {children}
      </div>
      
    </div>
  );
};

export default HeroLayout;
