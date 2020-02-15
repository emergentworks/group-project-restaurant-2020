import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Jumbotron from './Jumbotron';

const Layout = ({ children, shouldShowJumbotron, jumbotronImgSrc }) => (
  <div>
    <Navbar />
    {shouldShowJumbotron && <Jumbotron src={jumbotronImgSrc} />}
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
