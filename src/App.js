import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Male from './components/Male';
import Female from './components/Female';
import ContactInfo from './components/ContactInfo'; 
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'male':
        return <Male />;
      case 'female':
        return <Female />;
      case 'contact': 
        return <ContactInfo />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setActivePage={setActivePage} />
      {renderPage()}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
