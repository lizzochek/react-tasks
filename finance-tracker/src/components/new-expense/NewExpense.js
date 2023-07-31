import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ onNewExpense }) {
  const [isFormOpen, setFormOpen] = useState(false);

  const onSaveExpense = (enteredData) => {
    const expenseData = {
      ...enteredData,
      date: new Date(enteredData.date),
      id: Math.random().toString(),
    };
    onNewExpense(expenseData);
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  if (!isFormOpen)
    return (
      <div className='new-expense'>
        <div onClick={toggleForm}>
          <button>Add Expense</button>
        </div>
      </div>
    );

  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpense={onSaveExpense}
        onClose={toggleForm}
      />
    </div>
  );
}
