import ExpenseItem from './ExpenseItem';
import Card from '../common/Card';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const onSelectedYear = (value) => {
    setFilteredYear(value);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onSelectedYear={onSelectedYear}
          filteredYear={filteredYear}
        />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}
