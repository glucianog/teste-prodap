import React from 'react';

import BackButton from '../../components/BackButton';
import DefaultPage from '../../components/DefaultPage';

import './styles.css';

function QuestionThree() {

  function handleSubmit() {

  }
  
  return (
    <DefaultPage>
      <div id="page-question-three" className="container"> 
        <main>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                Ordenação de números                
                <BackButton /> 
              </legend>
            </fieldset>
          </form>
        </main>
      </div>
    </DefaultPage>    
  );
}

export default QuestionThree;