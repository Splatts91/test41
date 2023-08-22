import React from 'react';

function Footer({ setActivePage }) {
  const footerStyle = {
    background: '#276D8F',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle} onClick={() => setActivePage('contact')}>
      Contact Info
    </footer>
  );
}

export default Footer;
