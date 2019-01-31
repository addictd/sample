import './input.scss';

import React from "react";
import PropTypes from "prop-types";


const Input = ({type, label, input_id, placeholder, onFormChange, maxlength}) =>{

    return(
        <div id="quiz-input">
            <label htmlFor={input_id} className="form_label">{label}</label>
            <input 
                id={input_id} 
                onChange={ onFormChange.bind(this, label) } 
                className="input" 
                type={type} 
                placeholder={placeholder} 
                maxlength={maxlength} />
        </div>
    )
}

const {string,func,number} = PropTypes;

Input.propTypes = {
    label: string.isRequired,
    type: string.isRequired,
    input_id: string.isRequired,
    placeholder: string,
    onFormChange: func.isRequired,
    maxlength: number
}

export default Input;
