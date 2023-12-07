import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
      <span className="logo--grounds"><b>Urban</b></span>
        <span className="logo--coffee">Coffee</span>
        
      </Link>
    </div>
  );
}

export default Logo;