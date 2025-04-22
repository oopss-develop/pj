import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmenuHover = (menu: string) => {
    setActiveSubmenu(menu);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  const menuItems = [
    { name: '홈', path: '/' },
    { 
      name: '교회소개', 
      path: '/about',
      submenu: [
        { name: '인사말', path: '/about/greeting' },
        { name: '섬기는 사람들', path: '/about/leaders' },
        { name: '교회발자취', path: '/about/history' }
      ]
    },
    { name: '예배', path: '/worship' },
    { name: '사역', path: '/ministries' },
    { name: '연락처', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            무학교회
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.submenu && handleSubmenuHover(item.path)}
                onMouseLeave={handleSubmenuLeave}
              >
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item.name}
                </Link>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.path && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2"
                    style={{ 
                      marginTop: '0',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block py-2 text-gray-600 hover:text-gray-900"
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 