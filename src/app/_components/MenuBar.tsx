import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-screen flex-col p-4">
      <div className="z-50 flex items-center">
        <button
          onClick={toggleMenu}
          className="fixed left-4 top-4 z-50 cursor-pointer text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="flex h-full w-64 flex-col space-y-4 py-8"
          >
            <li className="menu-item">
              <a href="#" className="menu-link">
                Accueil
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Services
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Réalisation
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Contact
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                A propos
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      {/* <ul className="hidden md:flex md:flex-col md:justify-start md:space-y-4">
        <li className="menu-item">
          <a href="#" className="menu-link">
            Accueil
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Services
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Réalisations
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Contact
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            A propos
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default MenuBar;
