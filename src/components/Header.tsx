import React from 'react';

const Header = ({ onNavigate }) => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div 
        className="text-2xl font-bold text-gray-900 cursor-pointer"
        onClick={() => onNavigate('/')}
      >
        Name of the Site
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          Home
        </a>
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/blog')}
        >
          Blog
        </a>
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/about')}
        >
          About
        </a>
      </nav>
      {/* Mobile menu button could be added here */}
    </div>
  </header>
);

export default Header;