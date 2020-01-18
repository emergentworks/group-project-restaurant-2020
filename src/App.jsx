import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const GREETING = 'Hello, world!';
  
  return (
    <div>
      <Header />
      <h1>{GREETING}</h1>
      <Footer />
    </div>
  );
};

export default hot(module)(App);
