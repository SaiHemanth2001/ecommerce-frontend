import React from 'react';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ name }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === '/';
  const isViewProduct = location.pathname === `/view/${name}`;
  const isLoggedIn = !!localStorage.getItem("jwt"); 

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    navigate(-1);
  };

  const handler1 = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <header className="header">
      <nav>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', padding: '0 0 0 20px' }}>
          {!isHomepage && (
            <li>
              <button onClick={() => navigate("/")} style={{ all: "unset", cursor: "pointer", marginRight: "10px" }}>
                Homepage
              </button>
            </li>
          )}

          {isLoggedIn ? (
            <li>
              <button onClick={handleSignOut} style={{ all: "unset", cursor: "pointer", marginRight: "10px" }}>
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => navigate("/login")} style={{ all: "unset", cursor: "pointer", marginRight: "10px" }}>
                Login
              </button>
            </li>
          )}

          {isViewProduct && (
            <li>
              <button onClick={handler1} style={{ all: "unset", cursor: "pointer", marginRight: "10px" }}>
                Back
              </button>
            </li>
          )}

          <li>
            <button onClick={() => navigate("/cart")} style={{ all: "unset", cursor: "pointer", marginRight: "10px" }}>
              View Cart
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
