import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  
  return (
    <Layout>
      <Link to="/menu">go to menu</Link>
      index
    </Layout>
  );
};

export default Index;
