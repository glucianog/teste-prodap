import React, { useState } from 'react';

import BackButton from '../../components/BackButton';
import PageDefault from '../../components/DefaultPage';
import Input from '../../components/Input';

import './styles.css';
import CurrencyInput from '../../components/CurrencyInput';
import Button from '../../components/Button';

function QuestionOne( props ) {
  const [name, setName] = useState();
  const [salary, setSalary] = useState();
  const [sales, setSales] = useState();
  const [total, setTotal] = useState();
  const [hasErrors, setHasErrors] = useState(false);

  function calculateTotal() {
    const unmaskedSalary = salary.replace("R$", '').replace(/,/g,'');
    const unmaskedSales = sales.replace("R$", '').replace(/,/g, '');

    const floatUnmaskedSalary = parseFloat(unmaskedSalary);
    const flaotUnmaskedSales = parseFloat(unmaskedSales);

    const totalSalary = floatUnmaskedSalary + ( 0.15* flaotUnmaskedSales); 

    setTotal(totalSalary.toFixed(2));
  }
  
  function handleCalculateSalary(event) {
    event.preventDefault();

    if(name && salary && sales) {
      setHasErrors(false);
      calculateTotal();
    } else {
      setHasErrors(true);
    }   
  }  

  return (
    <PageDefault>
      <div id="page-question-one" className="container"> 
        <main>
          <form onSubmit={handleCalculateSalary}>
            <fieldset>
              <legend>
                Dados do funcionário                
                <BackButton /> 
              </legend>

              <Input
                name="name"
                label="Nome"
                value={name}
                onChange={event => setName(event.target.value)}
              />

              <div className="money-fields">
                <CurrencyInput
                  name="salary"
                  label="Salário Fixo"
                  value={salary}                  
                  onChange={event => setSalary(event.target.value)}
                />    

                <CurrencyInput
                  name="sales"
                  label="Venda Mensal"
                  value={sales}                  
                  onChange={event => setSales(event.target.value)}
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
            : total
              ? <label htmlFor="total" className="total"> {name} receberá R$ {total}.</label> 
              : ''
          }
        </main>        
      </div> 
    </PageDefault>
  );
}

export default QuestionOne;

