import React from 'react';
import './Option.css'

const Option = ({ index, index1, option, answer, handleRadioChange }) => {
    return (
        <div>
            <label className="form-check-label option" htmlFor={`option-${index}-${index1 + 1}`}  >
                <input onClick={(e) => { handleRadioChange(e, answer) }} className="form-check-input" type="radio" name={`option-${index}`} id={`option-${index}-${index1 + 1}`} value={option} />
                <code>{option}</code>
            </label>
        </div>
    );
};

export default Option;