// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-700/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © {currentYear} Geraldo Sadikin. Built with Next.js, TypeScript & Tailwind CSS
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <span>Designed with ❤️</span>
          <span>•</span>
          <span>Open Source</span>
          <span>•</span>
          <span>Responsive Design</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;