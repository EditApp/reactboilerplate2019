import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {

  return (
    <div className="header">
      <div className="nav-bar">
        <Link className="router-link" to="/">
          Videos
        </Link>
        <Link className="router-link" to="/videodetail">
          Video details
        </Link>
      </div>
    </div>
  );
}

export default Header 