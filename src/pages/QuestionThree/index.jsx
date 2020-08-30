import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import DefaultPage from '../../components/DefaultPage';
import Input from '../../components/Input';

import './styles.css';

function QuestionThree() {
  const [amountOfNumbers, setAmountOfNumbers] = useState('');
  const [number, setNumber] = useState('');
  const [insertedNumbers, setInsertedNumbers] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [allNumbers, setAllNumbers] = useState([]);

  function handleSetN(event) {
    if (number > 0 && number < 11) {
      setAmountOfNumbers(number)
      setNumber('');
    }      
  }

  function insertNumber() {
    if (number % 2 === 0) {
      setEvenNumbers([...evenNumbers, number]);     
    } else {
      setOddNumbers([...oddNumbers, number]);       
    }
    setNumber('');
    setAllNumbers([...allNumbers, number]);
    setInsertedNumbers(insertedNumbers + 1);
  }

  function removeNumber(number) {
    if (number % 2 === 0) {
      const numbersArray = evenNumbers.filter(item => item !== number);
      setEvenNumbers(numbersArray);     
    } else {
      const numbersArray = oddNumbers.filter(item => item !== number);
      setOddNumbers(numbersArray);      
    }
    const numbersArray = allNumbers.filter(item => item !== number);
    console.log(numbersArray);
    setAllNumbers(numbersArray)

    setInsertedNumbers(insertedNumbers - 1);
  }

  function resetValues() {
    setAmountOfNumbers('');
    setInsertedNumbers('');
    setIsSorted(false);
    setEvenNumbers([]);
    setOddNumbers([]);
    setAllNumbers([]);    
  }

  function handleSubmit(event) {
    event.preventDefault();

    const evenArrayCopy = evenNumbers;
    evenArrayCopy.sort((a,b) => a-b );

    const oddArrayCopy = oddNumbers;
    oddArrayCopy.sort((a,b) => b-a );

    setAllNumbers(evenArrayCopy.concat(oddArrayCopy));
    setIsSorted(true);
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

              {
                amountOfNumbers 
                ?
                  <>
                    {insertedNumbers < amountOfNumbers 
                      ?
                        (<div className="line-row">
                          <Input
                            name="number"
                            type="number"
                            label={`Insira até ${amountOfNumbers} números`}
                            placeholder="Digite um número"
                            value={number}
                            onChange={object => setNumber(object.target.value)}
                          />
                          <Button
                            buttonText="Inserir"  
                            onClick={insertNumber}
                          />    
                        </div>)
                      : 
                        !isSorted 
                        ? 
                          (<div className="sort-container">
                            <Button
                              buttonText="Ordenar"
                              type="submit"
                            />
                          </div>)
                        :
                          (<div className="sort-container">
                            <Button
                              buttonText="Limpar"
                              onClick={resetValues}
                            />
                          </div>)
                    }
                    <div className="numbers-container">
                      {allNumbers.map((number, index) => {
                        return (
                          <div key={index} className="number-block">
                            {number} 
                            {!isSorted && (
                              <FaTrashAlt 
                                size="20"  
                                color="#000000" 
                                className="remove-button"
                                onClick={() => removeNumber(number)}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>                     
                  </>
                : 
                 (<div className="line-row">
                    <Input
                      name="number"
                      type="number"
                      label="Quantos números serão?"
                      min="1"
                      max="10"
                      placeholder="Digite N, tal que 1 < N < 10"
                      value={number}
                      onChange={object => setNumber(object.target.value)}
                    />            

                    <Button
                      type="submit"
                      buttonText="Confirmar"  
                      onClick={handleSetN}
                    />
                  </div>)
              }
            </fieldset>
          </form>
        </main>
      </div>
    </DefaultPage>    
  );
}

export default QuestionThree;