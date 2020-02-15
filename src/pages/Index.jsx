import React from 'react';
import Layout from '../components/Layout';
import ThumbnailGallery from '../components/ThumbnailGallery';
import Jumbotron from '../components/Jumbotron';

const Index = () => (
  <Layout
    shouldShowJumbotron={true}
    jumbotronImgSrc="https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  >
    <ThumbnailGallery />
  </Layout>
);

export default Index;
