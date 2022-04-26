import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import TsDropdown from 'components/TsDropdown';

type User = {
  id: string;
  title: string;
  surname: string;
};

type Task = {
  id: string;
  title: string;
  taskNo: number;
};

const TsDropdownPage: NextPage = () => {
  const users: User[] = [
    {
      id: '1',
      title: 'Selam',
      surname: 'Selamlar',
    },
    {
      id: '2',
      title: 'Hi',
      surname: 'Bye',
    },
  ];
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Task1',
      taskNo: 3,
    },
    {
      id: '2',
      title: 'Task2',
      taskNo: 5,
    },
  ];

  const [user, setUser] = useState<User>();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    console.log(user);
    console.log(task);
  }, [user, task]);

  return (
    <div>
      <label htmlFor="user">User:</label>
      <p id="user">{user?.title}</p>
      <br />
      <TsDropdown<User> onChange={setUser} values={users} />

      <br />
      
      <label htmlFor="task">Task:</label>
      <p id="task">{task?.title}</p>
      <br />
      <TsDropdown<Task> onChange={setTask} values={tasks} />
    </div>
  );
};

export default TsDropdownPage;
