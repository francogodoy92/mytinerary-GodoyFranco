import React, { useState } from 'react';
import '../index.css';
import {Link, NavLink} from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="relative px-4 py-2 md:p-0">
        <button
          className="md:hidden text-white rounded border border-gray-800 px-4 py-1 hover:text-blue-700 font-medium"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ol
          className={`${
            isMenuOpen ? 'flex flex-col' : 'hidden'
          } md:flex md:flex-row gap-3 md:p-0 md:space-x-2 absolute top-10 right-0.5 md:static md:top-auto md:right-auto bg-gray-400 items-center justify-center p-2 rounded-md`}
          style={{
            transition: 'max-height 0.3s ease-in-out',
            maxHeight: isMenuOpen ? '300px' : '0px',
          }}
        >
          <li>
            <Link
              to="/Home"
              className={`${
                isMenuOpen ? 'bg-gray-400 text-gray-900 text-lg border-b-2' : 'text-white'
              }  rounded px-4 py-1 hover:text-blue-700 font-medium`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Cities"
              className={`${
                isMenuOpen ? 'bg-gray-400 text-gray-900 text-lg border-b-2' : 'text-white'
              }  rounded px-4 py-1 hover:text-blue-700 font-medium`}
            >
              Cities
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className={`${
                isMenuOpen ? 'bg-gray-400 text-blue-900 text-lg' : 'text-white'
              }  rounded px-4 py-1 hover:text-blue-700 font-medium`}
            >
              Login
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Nav; 