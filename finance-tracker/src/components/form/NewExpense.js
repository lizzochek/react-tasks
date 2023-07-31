import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ onNewExpense }) {
  const onSaveExpense = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    onNewExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
}
