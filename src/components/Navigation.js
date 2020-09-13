import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        {/* Add that router here as well */}
        <li><NavLink to="/all">All</NavLink></li>
        <li><NavLink to="/car">Cars</NavLink></li>
        <li><NavLink to="/animals">Animals</NavLink></li>
        <li><NavLink to="/bird">Birds</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
