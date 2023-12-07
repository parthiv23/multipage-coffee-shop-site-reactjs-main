import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
      </h1>
      <span className="logo--grounds">
      <nav class="col-3">
        <NavLink to="/about"><b>Explore</b></NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/visit">Contact Us</NavLink>
      </nav>
      </span>
    </header>
  );
}

export default Header;