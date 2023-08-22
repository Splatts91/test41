import React from 'react';
import ProductImage from './ProductImage';

function Tops() {
  const pageStyle = {
    background: '#9BD8E6', // Same background as ContactInfo and HomeContent
    textAlign: 'center',
    padding: '40px',
  };

  return (
    <div style={pageStyle}>
      <h1>Welcome to Tops</h1>
      <div className="product-container">
        <ProductImage src="malehoodie1.jpg" alt="Top 1" />
        <ProductImage src="malejacket1" alt="Top 2" />
        <ProductImage src="malehoodie2.jpg" alt="Top 3" />
        <ProductImage src="malejacket2.jpg" alt="Top 4" />
      </div>
    </div>
  );
}

export default Tops;
