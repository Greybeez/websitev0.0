import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Smartphone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('header.home'), key: 'home' },
    { name: t('header.aboutUs'), key: 'about' },
    { name: t('header.programs'), key: 'programs' },
    { name: t('header.successStories'), key: 'stories' },
    { name: t('header.news'), key: 'news' },
    { name: t('header.contact'), key: 'contact' },
    { name: t('header.strapiTest'), key: 'strapi-test' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 md:h-24 gap-x-6">
          {/* Logo */}
          <div className="flex items-center py-2">
            <button
              onClick={() => onPageChange('home')}
              className="flex items-center hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1"
            >
              <img 
                src="/images/greybeez-logo.JPG" 
                alt="GreyBeez Pvt. Ltd. - Empowering Mankind"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  console.error('Failed to load GreyBeez logo, falling back to text');
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              <span 
                className="text-2xl md:text-3xl font-bold text-primary-600 hidden"
                style={{ display: 'none' }}
              >
                GreyBeez
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  currentPage === item.key
                    ? 'text-purple-800 border-b-2 border-purple-800 pb-1'
                    : 'text-purple-800 hover:text-orange-500 hover:border-b-2 hover:border-orange-500'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* JobPar.ai Icon Button */}
            <button
              onClick={() => onPageChange('jobpar')}
              className={`p-4 rounded-xl transition-all duration-300 ${
                currentPage === 'jobpar'
                  ? 'text-white bg-gradient-to-br from-gray-600 via-orange-500 to-green-500 border-2 border-gray-400 shadow-lg'
                  : 'text-white bg-gradient-to-br from-gray-500 via-orange-400 to-green-400 hover:from-gray-600 hover:via-orange-500 hover:to-green-500 hover:scale-110 shadow-md hover:shadow-lg'
              }`}
              title="JobPar.ai - Mobile App"
            >
              <Smartphone className="w-8 h-8" />
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-purple-800 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-lg font-semibold rounded-lg transition-colors duration-300 ${
                    currentPage === item.key
                      ? 'text-purple-800 bg-purple-100'
                      : 'text-purple-800 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* JobPar.ai Mobile Button */}
              <button
                onClick={() => {
                  onPageChange('jobpar');
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center ${
                  currentPage === 'jobpar'
                    ? 'text-white bg-gradient-to-br from-gray-600 via-orange-500 to-green-500'
                    : 'text-purple-800 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                JobPar.ai
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}