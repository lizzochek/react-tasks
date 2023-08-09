import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(
  ({ type, state, label, changeHandler, blurHandler }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          state.isValid === false ? classes.invalid : ''
        }`}>
        <label htmlFor={type}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={type}
          value={state.value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
      </div>
    );
  }
);

export default Input;
