import React from 'react';

const Footer = ({ onNavigate }) => (
  <footer className="w-full border-t border-gray-200 bg-gray-50 py-8">
    <div className="container mx-auto px-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Name of the Site. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a 
          className="hover:underline cursor-pointer"
          onClick={() => onNavigate('/privacy')}
        >
          Privacy Policy
        </a>
        <a 
          className="hover:underline cursor-pointer"
          onClick={() => onNavigate('/terms')}
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;