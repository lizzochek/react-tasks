import ExpenseItem from './ExpenseItem';
import Card from '../common/Card';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

export default function ExpenseList({ expenses }) {
  const onSelectedYear = (value) => {
    setFilteredYear(value);
  };

  const [filteredYear, setFilteredYear] = useState('2023');
  const filteredExpenses = expenses.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = !filteredExpenses.length ? (
    <p className='no-expenses'>No expenses yet</p>
  ) : (
    filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onSelectedYear={onSelectedYear}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses ? filteredExpenses : []} />
        <ul>{expensesContent}</ul>
      </Card>
    </div>
  );
}
