
import React, { useState } from 'react';
import { navLinks } from '../constants';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-brand-blue p-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-brand-blue">Sheltershub.com</h1>
      <p className="text-xs text-gray-500">Ghana's No. 1 Real Estate Marketplace</p>
    </div>
  </div>
);

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="bg-brand-blue text-white text-xs">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <span>The Most Trusted Real Estate Marketplace</span>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-brand-orange">Post a Property</a>
            <a href="#" className="hover:text-brand-orange">Login</a>
            <a href="#" className="hover:text-brand-orange">Signup</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex items-center space-x-4">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-blue font-medium">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-blue focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col items-center py-4 space-y-2">
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-blue font-medium px-4 py-2 w-full text-center">
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 pb-4">
                <a href="#" className="hover:text-brand-orange">Post a Property</a>
                <a href="#" className="hover:text-brand-orange">Login</a>
                <a href="#" className="hover:text-brand-orange">Signup</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
