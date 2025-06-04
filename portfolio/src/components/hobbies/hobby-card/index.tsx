// Separate HobbyCard component for better organization
const HobbyCard: React.FC<{ 
    hobby: any; 
    index: number; 
  }> = ({ hobby, index }) => {
    return (
      <div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
        style={{ 
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        <div className="flex items-center mb-4">
          <div className="text-blue-400 mr-4">{hobby.icon}</div>
          <h3 className="text-xl font-semibold">{hobby.name}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{hobby.description}</p>
      </div>
    );
  };

  export default HobbyCard;
  