import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpense }) {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const onInputChange = (field, value) => {
    if (field === 'title') {
      setUserInput((prevState) => ({
        ...prevState,
        title: value,
      }));
    } else if (field === 'amount') {
      setUserInput((prevState) => ({
        ...prevState,
        amount: value,
      }));
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        date: value,
      }));
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSaveExpense(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={(e) => onInputChange('title', e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={userInput.amount}
            min='0.01'
            step='0.01'
            onChange={(e) => onInputChange('amount', e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={userInput.date}
            type='date'
            min='2019-01-01'
            max='2023-08-01'
            onChange={(e) => onInputChange('date', e.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
