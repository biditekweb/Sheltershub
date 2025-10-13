
import React from 'react';
import { footerLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">{Object.keys(footerLinks)[0]}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Property Type'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="mt-0 md:mt-10 lg:mt-0">
            <h3 className="font-bold mb-4 invisible hidden md:block">{Object.keys(footerLinks)[1]}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Commercial Property'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{Object.keys(footerLinks)[2]}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['About Us'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{Object.keys(footerLinks)[3]}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Support'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{Object.keys(footerLinks)[4]}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks['Our Socials'].map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-brand-orange">{link.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-brand-blue-dark py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          Copyright© 2025 Sheltershub.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
