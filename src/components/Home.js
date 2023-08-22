import React from 'react';
import HomeContent from './HomeContent';

function Home() {
  const pageStyle = {
    background: '#9BD8E6',
    minHeight: '100vh',
  };

  return (
    <div style={pageStyle}>
      <HomeContent />
    </div>
  );
}

export default Home;
