import { useState } from 'react';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/new-expense/NewExpense';

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const onNewExpense = (expenseData) =>
    setExpenses((prevState) => [expenseData, ...prevState]);

  return (
    <div className='App'>
      <NewExpense onNewExpense={onNewExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
