import React, { useState } from 'react';
import { NextPage } from 'next';
import TsDropdown from 'components/TsDropdown';
import { getUsersDummyApi, getUsersReqresApi } from 'lib/users';
import {
  DummyUserType,
  ReqesUserType,
  DummyUserResponseType,
  ReqesUserResponseType,
} from 'lib/users/types';
import styles from './TsDropdownPage.module.scss';

type TsDropdownPagePropType = {
  jsonReqesUsers: string;
  jsonDummyUsers: string;
};

const TsDropdownPage: NextPage<TsDropdownPagePropType> = (
  props: TsDropdownPagePropType
) => {
  const { jsonReqesUsers, jsonDummyUsers } = props;
  const reqesUsersData: ReqesUserResponseType = JSON.parse(jsonReqesUsers);
  const dummyUsersData: DummyUserResponseType = JSON.parse(jsonDummyUsers);

  const dummyUsers: DummyUserType[] = dummyUsersData?.data;
  const reqesUsers: ReqesUserType[] = reqesUsersData?.data?.map((el) => {
    const changedUser: ReqesUserType = {
      id: el.id,
      email: el.email,
      firstName: el.first_name,
      lastName: el.last_name,
      avatar: el.avatar,
    };
    return changedUser;
  });

  const [dummyUser, setDummyUser] = useState<DummyUserType>(dummyUsers[0]);
  const [reqesUser, setReqesUser] = useState<ReqesUserType>(reqesUsers[0]);

  const renderDropdowns = (
    <div className={styles['dropdown-container']}>
      <div>
        <TsDropdown<DummyUserType>
          onChange={setDummyUser}
          values={dummyUsers}
          label="Dummy User"
        />
        <p>Selected Dummy : {dummyUser?.firstName}</p>
      </div>
      <div>
        <TsDropdown<ReqesUserType>
          onChange={setReqesUser}
          values={reqesUsers}
          label="Reqes User"
        />
        <p>Selected Reqes :{reqesUser?.firstName}</p>
      </div>
    </div>
  );
  return (
    <>
      <h1>
        This page aims to demonstrate an implementation of TypeScript Generics.
      </h1>
      <h3>
        In our case we have 2 different user objects with shared fields. We want
        to display these users using the same Dropdown component in a strongly
        typed manner.
      </h3>
      <a href="https://www.developerway.com/posts/typescript-generics-for-react-developers">
        Inspider By Developerway&lsquo;s Blog Post
      </a>
      <br/>
      <br/>
      <br/>
      {renderDropdowns}
    </>
  );
};

export async function getStaticProps() {
  const reqesUsers = await getUsersReqresApi()
    .then((el) => el)
    .catch((er) => {
      console.log(er);
    });
  const dummyUsers = await getUsersDummyApi()
    .then((el) => el)
    .catch((er) => {
      console.log(er);
    });

  //Serverside proplarda object döndüremiyoruz propla work around yapmak gerekiyor
  //https://lifesaver.codes/answer/getserversideprops-cannot-be-serialized-as-json-please-only-return-json-serializable-data-types-11993
  //https://stackoverflow.com/questions/65689445/object-object-response-cannot-be-serialized-as-json
  const jsonReqesUsers = reqesUsers && JSON.stringify(reqesUsers);
  const jsonDummyUsers = dummyUsers && JSON.stringify(dummyUsers);
  return {
    props: {
      jsonReqesUsers,
      jsonDummyUsers,
    },
  };
}

export default TsDropdownPage;
