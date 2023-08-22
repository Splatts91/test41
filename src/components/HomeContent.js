import React from 'react';

function HomeContent() {
  const contentStyle = {
    textAlign: 'center',
    margin: '40px auto',
    maxWidth: '600px',
  };

  const messageStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return (
    <div style={contentStyle}>
      <h1>Welcome to Tops & Bottoms</h1>
      <p style={messageStyle}>
        Hey there! Welcome to Tops & Bottoms, where fashion meets fun! We're the go-to spot for trendy winter clothing for adults. Looking for tops that'll make heads turn and bottoms that'll have you busting a move? We've got your back – and your bottoms! So, what are you waiting for? Let's get this topsy-turvy winter party started!
      </p>
    </div>
  );
}

export default HomeContent;
