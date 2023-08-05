import React from 'react';
import "../index.css";

function Nav() {
  return (
    <nav>
      <ol className="flex gap-2 p-2">
        <li>
          <a href="#" className="bg-gray-800 text-white rounded border border-gray-800 px-4 py-1 hover:bg-white hover:text-blue-700 font-medium">
            Home
          </a>
        </li>
        <li>
          <a
            href="../pages/Cities.jsx"
            className="bg-gray-800 text-white rounded border border-gray-800 px-4 py-1 hover:bg-white hover:text-blue-700 font-medium"
          >
            Cities
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-gray-800 text-white rounded border border-gray-800 px-4 py-1 hover:bg-white hover:text-blue-700 font-medium"
          >
            Login
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Nav;
