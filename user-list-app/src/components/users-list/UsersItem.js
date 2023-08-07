import './UsersItem.css';

export default function UsersItem({ user }) {
  return (
    <div className='users__item'>
      <span>{`${user.username} (${user.age} years old)`}</span>
    </div>
  );
}
