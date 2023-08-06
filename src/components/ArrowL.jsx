import React from 'react';
import "../index.css"

function Arrow({ onClick }) {
        return (
          <div className="flex items-center text-3xl md:text-6xl font-extrabold text-black cursor-pointer" onClick={onClick}>
            {"<"}
          </div>
        );
      }
      
      export default Arrow;