import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/family/home">Family</Link>
        <Link to="/business/home">Business</Link>
        <Link to="/authority/home">Authority</Link>
        <Link to="/admin/home">Admin</Link>
        {/* Add other navigation links */}
      </nav>
    </header>
  );
}

export default Header;