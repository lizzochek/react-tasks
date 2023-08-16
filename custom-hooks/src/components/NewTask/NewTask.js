import useHttp from '../../hooks/http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: 'https://react-http-cbb96-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
