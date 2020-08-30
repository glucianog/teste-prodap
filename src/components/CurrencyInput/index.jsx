import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import './styles.css';

function CurrencyInput({ label, name, ...rest }) {
  const defaultMaskOptions = {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2, // how many digits allowed after the decimal
    allowNegative: false,
    allowLeadingZeroes: false,
  }

  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <div className="currency-input-block">
      <label htmlFor={name}>{label}</label>
      <MaskedInput mask={currencyMask} {...rest} />
    </div>
  );
}

export default CurrencyInput;