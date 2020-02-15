import React from 'react';

const Thumbnail = ({ alt, children, label, src }) => (
  <div className="media">
    <div className="media-left media-middle">
      <a href="#">
        <img className="media-object" src={src} alt={alt}/>
      </a>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{label}</h4>
      {children}
    </div>
  </div>
);

export default Thumbnail;
