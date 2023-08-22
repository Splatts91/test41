import React from 'react';
import ProductImage from './ProductImage'; // Import ProductImage component

function Bottoms() {
  const pageStyle = {
    background: '#9BD8E6', // Same background as ContactInfo and HomeContent
    textAlign: 'center',
    padding: '40px',
  };

  return (
    <div style={pageStyle}>
      <h1>Welcome to Bottoms</h1>
      <div className="product-container">
        <ProductImage src="malesp1.jpg" alt="Bottom 1" />
        <ProductImage src="malepants1.jpg" alt="Bottom 2" />
        <ProductImage src="malesp2.jpg" alt="Bottom 3" />
        <ProductImage src="malepats2.jpg" alt="Bottom 4" />
      </div>
    </div>
  );
}

export default Bottoms;
