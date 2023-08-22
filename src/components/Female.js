import React from 'react';
import Tops from './Tops'; // Import Tops component
import Bottoms from './Bottoms'; // Import Bottoms component

function Female() {
  const [activePage, setActivePage] = React.useState('female');

  const pageStyle = {
    background: '#9BD8E6', // Background color for Female page
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

  const navigateToFemaleTops = () => {
    setActivePage('femaleTops');
  };

  const navigateToFemaleBottoms = () => {
    setActivePage('femaleBottoms');
  };

  return (
    <div style={pageStyle}>
      {activePage === 'female' && (
        <div>
          <h1>Welcome to the Female Page</h1>
          <button style={buttonStyle} onClick={navigateToFemaleTops}>Tops</button>
          <button style={buttonStyle} onClick={navigateToFemaleBottoms}>Bottoms</button>
        </div>
      )}
      {activePage === 'femaleTops' && <Tops />}
      {activePage === 'femaleBottoms' && <Bottoms />}
    </div>
  );
}

export default Female;
