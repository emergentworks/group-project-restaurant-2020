import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <nav className="navbar navbar-inverse navbar-fixed-bottom">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">Restaurant Name</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to="/">Contact Info</Link>
        </li>
        <li>
          <Link to="/">Schedule</Link>
        </li>
        <li>
          <Link to="/">Page 2</Link>
        </li>
        <li>
          <Link to="/">Page 3</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Footer;
