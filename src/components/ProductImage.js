import React from 'react';

function ProductImage({ src, alt }) {
  const imageStyle = {
    width: '200px', // Adjust image size as needed
    height: '200px',
    margin: '10px',
  };

  return <img src={src} alt={alt} style={imageStyle} />;
}

export default ProductImage;
