import React from 'react';
import Form from './components/form/Form';
import Card from './components/common/Card';
import UsersList from './components/users-list/UsersList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (input) => {
    if (input) setUsers((prevState) => [input, ...prevState]);
  };

  return (
    <div>
      <Card>
        <Form onAddUser={onAddUser} />
      </Card>
      <UsersList users={users} />
    </div>
  );
}

export default App;
