import React from 'react';
import backgroundImage from '../assets/trees.jpeg';

function SkyLayout() {
  const skyBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    zIndex: -1,
    opacity: 0.65,
  };
  //test

  return (
    <div style={skyBackgroundStyle}></div>
  );
}

export default SkyLayout;
