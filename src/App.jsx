import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Footer from './components/Footer';
import IndexPage from './pages/index';
import Menu from './pages/Menu';

const App = () => {
  const ourNames = [
    'Esther',
    'Mark',
    'Dino',
    'Skylar',
  ];

  return <IndexPage />
};

export default hot(module)(App);
