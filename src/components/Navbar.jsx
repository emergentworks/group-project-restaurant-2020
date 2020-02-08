import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Resturant Name</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Reservations</Link>
          </li>
          <li>
            <Link to="/">Special Events</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
