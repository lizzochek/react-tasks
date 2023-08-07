import Card from '../common/Card';
import UsersItem from './UsersItem';

export default function UsersList({ users }) {
  console.log(users);
  return (
    <Card className={!users?.length ? 'hidden' : ''}>
      {users &&
        users.map((user) => (
          <UsersItem
            key={user.id}
            user={user}
          />
        ))}
    </Card>
  );
}
