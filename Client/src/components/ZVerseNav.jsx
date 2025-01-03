import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import from react-router-dom for navigation
import { Menu, X } from 'lucide-react';
// Assuming you have a separate Logo component

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-tr from-indigo-50 to-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            Logo
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <NavLinks />
          </div>
          <div className="hidden md:flex items-center">
            <CTAButtons />
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};
const NavLinks = () => { 
  const links = ['Home', 'About', 'Courses', 'Student Portal', 'Domain'];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link}
          to={link === 'Student Portal' ? '/Zverse/Dashboard' : `/${link.toLowerCase().replace(' ', '-')}`}
          className="px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 relative group"
        >
          {link}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
      ))}
    </>
  );
};

const CTAButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/login"
        className="px-4 py-2 font-medium text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
      >
        Login
      </Link>
      <Link
        to="/join"
        className="px-4 py-2  font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
      >
        Join
      </Link>
    </div>
  );
};

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 h-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="pt-5 pb-6 px-5">
        <div className="flex flex-col space-y-4">
          <NavLinks />
          <CTAButtons />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
