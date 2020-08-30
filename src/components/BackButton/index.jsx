import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import './styles.css';

function BackButton() {  
  const history = useHistory();
  return (
    <div className="back-button">
      <Button 
        onClick={() => history.goBack()}
        buttonText="Voltar"       
      />          
    </div>
  );
}

export default BackButton;