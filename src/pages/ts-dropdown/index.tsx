import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import TsDropdown from 'components/TsDropdown';
import {getUsers} from 'lib/users'
import {UserType,UserResponseType} from 'lib/users/types'
import {User,Task} from 'consts/types'

type TsDropdownPagePropType = {
  jsonData:string
}

const TsDropdownPage: NextPage<TsDropdownPagePropType> = (props:TsDropdownPagePropType) => {
  const {jsonData} = props
  const data:UserResponseType = JSON.parse(jsonData)

  const users:UserType[] = data?.data
  // const users: User[] = [
  //   {
  //     id: '1',
  //     title: 'Selam',
  //     surname: 'Selamlar',
  //   },
  //   {
  //     id: '2',
  //     title: 'Hi',
  //     surname: 'Bye',
  //   },
  // ];
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

  const [user, setUser] = useState<UserType>();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    // console.log(user);
    // console.log(task);
  }, [user, task]);

  return (
    <div>
      <label htmlFor="user">User:</label>
      <p id="user">{user?.title}</p>
      <br />
      <TsDropdown<UserType> onChange={setUser} values={users} />

      <br />

      <label htmlFor="task">Task:</label>
      <p id="task">{task?.title}</p>
      <br />
      <TsDropdown<Task> onChange={setTask} values={tasks} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await getUsers().then(el=>el)
  
  //Serverside proplarda object döndüremiyoruz propla work around yapmak gerekiyor
  //https://lifesaver.codes/answer/getserversideprops-cannot-be-serialized-as-json-please-only-return-json-serializable-data-types-11993
  //https://stackoverflow.com/questions/65689445/object-object-response-cannot-be-serialized-as-json
  const jsonData = JSON.stringify(data)
  return {
    props: {
      jsonData,
    },
  }
}

export default TsDropdownPage;
