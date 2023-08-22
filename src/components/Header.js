import React from 'react';

function Header({ setActivePage }) {
  const headerStyle = {
    background: `url('/headerMTNS.jpg') no-repeat center center/cover`,
    textAlign: 'center',
    padding: '150px 0',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
  };

  const buttonStyle = {
    background: '#276D8F',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <img src="/headerMTNS.jpg" alt="Tops & Bottoms" style={imgStyle} />
      <nav style={navStyle}>
        <button style={buttonStyle} onClick={() => setActivePage('home')}>Home</button>
        <button style={buttonStyle} onClick={() => setActivePage('male')}>Male</button>
        <button style={buttonStyle} onClick={() => setActivePage('female')}>Female</button>
      </nav>
    </header>
  );
}

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
};

export default Header;
