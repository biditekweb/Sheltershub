import React, { useState } from 'react';
import { navLinks } from '../constants';

const Logo: React.FC = () => (
    <img src="https://i.ibb.co/4RJRrttb/Sheltershub-Logo-png.png" alt="Sheltershub Logo" className="h-[4.5rem] w-auto" />
);

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-[#082956] text-white text-sm font-light">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span>The Most Trusted Real Estate Marketplace</span>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-brand-orange transition-colors">Post a Property</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Login</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Signup</a>
          </div>
        </div>
      </div>
      
      {/* Middle Bar: Logo and Advert */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex bg-gray-200 items-center justify-center w-full max-w-2xl h-20">
            <span className="text-black text-4xl tracking-wide">Advert Space</span>
        </div>
      </div>

      {/* Bottom Bar: Main Navigation */}
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4 h-14 flex justify-center items-center">
             <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-800 hover:text-brand-orange font-semibold text-base transition-colors">
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="lg:hidden w-full flex justify-end">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 focus:outline-none" aria-label="Open menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col items-center py-4 space-y-2">
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-orange font-medium px-4 py-2 w-full text-center">
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 pb-4">
                <a href="#" className="text-gray-700 hover:text-brand-orange">Post a Property</a>
                <a href="#" className="text-gray-700 hover:text-brand-orange">Login</a>
                <a href="#" className="text-gray-700 hover:text-brand-orange">Signup</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;