import ExpenseDescription from './ExpenseDescription';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../common/Card';

export default function ExpenseItem({ date, title, amount }) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <ExpenseDescription
        title={title}
        amount={amount}
      />
    </Card>
  );
}
