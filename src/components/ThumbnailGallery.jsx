import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailGallery = () => (
  <div class="row">
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
   <div class="col-sm-6 col-md-4">
     <div class="thumbnail">
       <img src="https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
       <div class="caption">
         <h3>Thumbnail label</h3>
         <p>...</p>
         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
       </div>
     </div>
   </div>
  </div>
);

export default ThumbnailGallery;
