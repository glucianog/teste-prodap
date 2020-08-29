import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './styles.css';

function DefaultPage( props ) {
  return (
    <main className="default-container">
      <Header />
      {props.children} 
      <Footer />    
    </main>
  );
}

export default DefaultPage;