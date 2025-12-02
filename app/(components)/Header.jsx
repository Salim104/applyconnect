'use client';
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Mac', 'iPhone', 'iPad', 'Watch', 'AirPods', 'Accessories'];

  return (
    <header className="bg-[#1d1d1f] text-white">
      <nav className="max-padd-container py-3">
        {/* Desktop Header */}
        <div className="flexBetween">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logoConnect.png" 
              alt="Logo Connect" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}> 
                <a 
                  href="#" 
                  className="text-[13px] hover:text-gray-300 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              className="hover:text-gray-300 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="hover:text-gray-300 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button 
              className="hover:text-gray-300 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4">
            {/* Mobile Navigation Links */}
            <ul className="space-y-3 mb-6 ml-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="block text-lg hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Icons */}
            <div className="flex items-center justify-center gap-8 pt-4 border-t border-gray-700">
              <button 
                className="hover:text-gray-300 transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
              <button 
                className="hover:text-gray-300 transition-colors"
                aria-label="Account"
              >
                <User className="w-6 h-6" />
              </button>
              <button 
                className="hover:text-gray-300 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}