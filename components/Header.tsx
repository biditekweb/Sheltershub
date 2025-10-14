import React, { useState } from 'react';
import { navLinks } from '../constants';

const SheltershubLogoIcon: React.FC = () => (
    <svg width="48" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            {/* Top Block */}
            <path d="M15 0 L35 0 L30 8 L10 8 Z" fill="#0A2B4C"/>
            <path d="M10 8 L30 8 L25 16 L5 16 Z" fill="#CBD5E1"/>
            
            {/* Bottom Block */}
            <path d="M30 22 L50 22 L45 30 L25 30 Z" fill="#0A2B4C"/>
            <path d="M25 30 L45 30 L40 38 L20 38 Z" fill="#CBD5E1"/>
        </g>
    </svg>
);


const Logo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <SheltershubLogoIcon />
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-gray-900">Sheltershub</span>
        <span className="text-brand-orange">.com</span>
      </h1>
      <p className="text-xs text-brand-blue mt-1">Ghana's No. 1 Real Estate Marketplace</p>
    </div>
  </div>
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
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex bg-gray-200 items-center justify-center w-full max-w-2xl h-24">
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
