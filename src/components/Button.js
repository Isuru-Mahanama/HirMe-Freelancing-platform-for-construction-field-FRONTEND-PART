import React from "react";
import { Link } from "react-router-dom";
import './btn.css';

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn--large']
const Button = ({
    children,
    type,
    onclick,
    buttonstyle,
    buttonsize
}) => {
    const checkButtonStyle = STYLES.includes(buttonstyle) ?buttonstyle:STYLES[0];
    

    const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize:SIZES[0];

    return ( 
        <Link to='/join' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onclick}
        type={type}
      >
        {children}
      </button>
    </Link>
     );
};
 
export default Button;