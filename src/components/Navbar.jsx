import { Link } from "react-router-dom";
import { useState } from "react";

// Example categories data (could be fetched from an API or passed as props)
const categories = [
  { path: "security", label: "Security" },
  { path: "communication", label: "Communication" },
  { path: "displays", label: "Displays" },
  { path: "solutions", label: "Solutions" },
  { path: "computers", label: "Computers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed w-full h-16 bg-white shadow-md z-50">
        <nav className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-blue-500">
              Sree Sai Electronics<span className="text-blue-500">.</span>
            </Link>
          </div>

          {/* Navigation links section */}
          <ul className="flex space-x-8 ml-auto">
            <li className="relative">
              <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Home</Link>
            </li>

            <li className="relative">
              <Link 
                to="#" 
                onClick={toggleDropdown} 
                className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
              >
                Services
              </Link>
              {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  {categories.map((category) => (
                    <li key={category.path}>
                      <Link
                        to={`/categories/${category.path}`}
                        className="block px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-200"
                      >
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="relative">
              <Link to="/contact-us" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
