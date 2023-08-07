import { useState } from 'react';
import ErrorModal from '../common/ErrorModal';
import './Form.css';

export default function Form({ onAddUser }) {
  const [userInput, setUserInput] = useState({
    username: '',
    age: '',
    id: '',
  });

  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onInputChange = (type, value) => {
    if (type === 'name')
      setUserInput((prevState) => ({ ...prevState, username: value }));
    if (type === 'age')
      setUserInput((prevState) => ({ ...prevState, age: +value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!userInput.username || !userInput.age) {
      setErrorText('Please fill all fields');
      setIsError(true);
      return;
    }

    if (userInput.age < 0) {
      setErrorText("Age can't be negative");
      setIsError(true);
      return;
    }

    setUserInput((prevState) => ({
      ...prevState,
      id: Math.random().toString(),
    }));

    onAddUser(userInput);
    setUserInput({
      username: '',
      age: '',
      id: '',
    });
  };

  const onCancel = () => {
    if (isError) setIsError(false);
    setUserInput({
      username: '',
      age: '',
      id: '',
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className='form__controls'>
          <div className='form__control'>
            <label>Username</label>
            <input
              type='text'
              value={userInput.username}
              onChange={(e) => onInputChange('name', e.target.value)}
            />
          </div>
          <div className='form__control'>
            <label>Age (years)</label>
            <input
              type='number'
              value={userInput.age}
              onChange={(e) => onInputChange('age', e.target.value)}
            />
          </div>
        </div>
        <div className='form__actions'>
          <div className='form__action'>
            <button onClick={onCancel}>Cancel</button>
          </div>
          <div className='form__action'>
            <button type='submit'>Add User</button>
          </div>
        </div>
      </form>
      {isError && (
        <ErrorModal
          text={errorText}
          onCancel={onCancel}
        />
      )}
    </div>
  );
}
