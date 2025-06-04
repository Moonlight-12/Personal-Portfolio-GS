import React from 'react';
import { NavigationProps } from '../../types/portfolio';

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['Experience', 'Projects', 'Contact'];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;