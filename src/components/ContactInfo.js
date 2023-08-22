import React from 'react';

function ContactInfo() {
  const pageStyle = {
    background: '#9BD8E6',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '40px',
  };

  return (
    <div style={pageStyle}>
      <h1>Contact Information</h1>
      <p>Email: contact@topsandbottoms.com</p>
      <p>Phone: 123-456-7890</p>
      {/* Add other contact information if we want */}
    </div>
  );
}

export default ContactInfo;
