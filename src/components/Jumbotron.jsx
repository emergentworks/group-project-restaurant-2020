import React from 'react';

const Jumbotron = ({ src }) => {
  const styles = {
    'background-image': `url(${src})`,
    height: '300px',
    color: 'white',
  };

  return (
    <div class="jumbotron" style={styles}>
      <h1 className="text-center">
        <span class="glyphicon glyphicon-cutlery" aria-hidden="true"></span>The Food's Galore
      </h1>
   </div>
  );
};

export default Jumbotron;
