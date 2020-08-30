import React from 'react';

import './styles.css';

function Button( props ) {
  return (
    <button 
      type={props.type? props.type : "button"}
      onClick={props.onClick}
    >
      {props.buttonText}             
    </button>
  );
}

export default Button;