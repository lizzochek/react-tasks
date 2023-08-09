import React, { useEffect, useState, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from './Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return { value: action.val, isValid: action.val.includes('@') };

  if (action.type === 'INPUT_BLUR')
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return { value: action.val, isValid: action.val.trim().length > 6 };

  if (action.type === 'INPUT_BLUR')
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: true,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: true,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
    }, 500);

    // Cleanup function runs before useEffect function and on unmount
    return () => {
      clearTimeout(timer);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value);
    } else if (!emailValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type='email'
          label='E-mail'
          state={emailState}
          changeHandler={emailChangeHandler}
          blurHandler={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type='password'
          label='Password'
          state={passwordState}
          changeHandler={passwordChangeHandler}
          blurHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
