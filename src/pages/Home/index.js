import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import DefaultPage from '../../components/DefaultPage';

import './styles.css';

function Home() {
  return (   
    <DefaultPage>
      <div className="button-container">

        <Link to="/question-one">
          <Button 
            onClick={() => {}}
            buttonText="Questão 1"      
          />
        </Link>

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