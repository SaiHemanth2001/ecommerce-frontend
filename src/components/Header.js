import React from 'react';
import './Header.css';

const Header = ({email}) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href={`/${email}/home`}>Homepage</a></li>
          <li><a href={`/${email}/cart`}>Viewcart</a></li>
          <li><a href={`/`}>Signout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
