import { HeaderProps } from '@/types/getStartedTypes';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Header: React.FC<HeaderProps> = ({ title, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50  backdrop-blur-md'
    } `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 group cursor-pointer md:flex-1">
            <div className="relative">
              <Image
                width={10}
                height={10}
                src={logo}
                alt={`${title} Logo`}
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800 transition-colors duration-300 group-hover:text-blue-600">
                {title}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Get Started CTA and Mobile Menu Button */}
          <div className="flex items-center justify-end md:flex-1">
            {/* Get Started Button - Hidden on mobile, visible on desktop */}
            <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ml-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-b border-gray-200 animate-fade-in">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Get Started Button */}
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;