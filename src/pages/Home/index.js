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

        <Link to="/question-two">
          <Button 
            onClick={() => {}}
            buttonText="Questão 2"      
          />
        </Link>

        <Link to="/question-three">
          <Button
            buttonText="Questão 3"      
          />
        </Link>
      </div> 
    </DefaultPage>
  );
}

export default Home;