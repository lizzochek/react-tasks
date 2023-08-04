import './Form.css';
import { useState } from 'react';

export default function Form({ onSubmitData }) {
  const [userInput, setUserInput] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    durationYears: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitData(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  const onInput = (type, value) => {
    switch (type) {
      case 'current-savings':
        setUserInput((prevState) => ({ ...prevState, currentSavings: value }));
        break;
      case 'yearly-contribution':
        setUserInput((prevState) => ({
          ...prevState,
          yearlyContribution: value,
        }));
        break;
      case 'expected-return':
        setUserInput((prevState) => ({ ...prevState, expectedReturn: value }));
        break;
      case 'duration':
        setUserInput((prevState) => ({ ...prevState, durationYears: value }));
        break;
      default:
        break;
    }
  };

  const onReset = () => {
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
    onSubmitData(null);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className='form'>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput.currentSavings || ''}
            onChange={(e) => onInput('current-savings', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput.yearlyContribution || ''}
            onChange={(e) => onInput('yearly-contribution', e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={userInput.expectedReturn || ''}
            onChange={(e) => onInput('expected-return', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput.durationYears || ''}
            onChange={(e) => onInput('duration', e.target.value)}
          />
        </p>
      </div>
      <p className='actions'>
        <button
          type='reset'
          className='buttonAlt'
          onClick={onReset}>
          Reset
        </button>
        <button
          type='submit'
          className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
}
