import React from 'react';

import Button from '../../components/Button';
import DefaultPage from '../../components/DefaultPage';

import './styles.css';

function Home() {
  return (   
    <DefaultPage>
      <div className="button-container">
        <Button 
          onClick={() => console.log("CLICKOU 1")}
          buttonText="Questão 1"      
        />

        <Button 
          onClick={() => console.log("CLICKOU 2")}
          buttonText="Questão 2"      
        />

        <Button 
          onClick={() => console.log("CLICKOU 3")}
          buttonText="Questão 3"      
        />
      </div> 
    </DefaultPage>
  );
}

export default Home;