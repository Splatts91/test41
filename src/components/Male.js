import React, { useState } from 'react';
import Tops from './Tops'; // Import Tops component
import Bottoms from './Bottoms'; // Import Bottoms component

function Male() {
  const [activePage, setActivePage] = useState('male'); // Initial active page is 'male'

  const pageStyle = {
    background: '#9BD8E6', // Background color for Male page
    textAlign: 'center',
    padding: '40px',
  };

  const buttonStyle = {
    background: '#276D8F',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const navigateToTops = () => {
    setActivePage('tops');
  };

  const navigateToBottoms = () => {
    setActivePage('bottoms');
  };

  return (
    <div style={pageStyle}>
      {activePage === 'male' && (
        <div>
          <h1>Welcome to the Male Page</h1>
          <button style={buttonStyle} onClick={navigateToTops}>Tops</button>
          <button style={buttonStyle} onClick={navigateToBottoms}>Bottoms</button>
        </div>
      )}
      {activePage === 'tops' && <Tops />}
      {activePage === 'bottoms' && <Bottoms />}
    </div>
  );
}

export default Male;
