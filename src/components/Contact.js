
import React from 'react';

function Contact() {
  const contentStyle = {
    textAlign: 'center',
    marginTop: '20px',
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

  return (
    <div style={contentStyle}>
      <h2>Contact Us</h2>
      <p>For any inquiries or support, please email us at info@topsandbottoms.com</p>
    </div>
  );
}

export default Contact;
