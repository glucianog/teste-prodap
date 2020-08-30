import React, { useState } from 'react';

import DefaultPage from '../../components/DefaultPage'
import BackButton from '../../components/BackButton';

import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

function QuestionTwo() {
  const [x1, setX1] = useState();
  const [y1, setY1] = useState();
  const [x2, setX2] = useState();
  const [y2, setY2] = useState();
  const [totalDistance, setTotalDistance] = useState();
  const [hasErrors, setHasErrors] = useState(false);

  function calculateDistance() {
    const diffXAxiss = x2 - x1;
    const diffYAxiss = y2 - y1;

    const powXAxiss = Math.pow(diffXAxiss, 2);
    const powYAxiss = Math.pow(diffYAxiss, 2);

    const distance = Math.sqrt(powXAxiss + powYAxiss);

    setTotalDistance(distance.toFixed(4));
  }


  function handleSubmit(event) {
    event.preventDefault();

    if(x1 && x2 && y1 && y2) {
      setHasErrors(false);
      calculateDistance();
    } else {
      setHasErrors(true);
    }
  }
  
  return (
    <DefaultPage>
    <div id="page-question-two" className="container"> 
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Dados dos eixos                
              <BackButton /> 
            </legend>

            <div className="line-row">
              <Input
                name="x1"
                label="Valor de x1"
                type="number"
                step="0.01"
                value={x1}
                onChange={object => setX1(object.target.value)}
              />

              <Input
                name="y1"
                label="Valor de y1"
                type="number"
                step="0.01"
                value={y1}
                onChange={object => setY1(object.target.value)}
              />
            </div>

            <div className="line-row">
              <Input
                name="x2"
                label="Valor de x2"
                type="number"
                step="0.01"
                value={x2}
                onChange={object => setX2(object.target.value)}
              />

              <Input
                name="y2"
                label="Valor de y2"
                type="number"
                step="0.01"
                value={y2}
                onChange={object => setY2(object.target.value)}
              />
            </div>
            <div className="submit-button">
              <Button
                type="submit"
                buttonText="Calcular"
              />
            </div>

          </fieldset>
        </form>
        {hasErrors
            ? <label className="error-label">Existem campos vazios no formulário! </label>
            : totalDistance
              ? <label htmlFor="total-distance" className="total-distance"> A distância entre os pontos é de: {totalDistance} u.m. </label> 
              : ''
          }
      </main>        
    </div> 
  </DefaultPage>
  )

}

export default QuestionTwo;