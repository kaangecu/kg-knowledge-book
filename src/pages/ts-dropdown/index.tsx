import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import TsDropdown from 'components/TsDropdown';
import { getUsersDummyApi, getUsersReqresApi } from 'lib/users';
import {
  DummyUserType,
  ReqesUserType,
  DummyUserResponseType,
  ReqesUserResponseType,
} from 'lib/users/types';

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
  const reqestUsers: ReqesUserType[] = reqesUsersData?.data?.map((el) => {
    const changedUser: ReqesUserType = {
      id: el.id,
      email: el.email,
      firstName: el.first_name,
      lastName: el.last_name,
      avatar: el.avatar,
    };
    return changedUser;
  });

  const [dummyUser, setDummyUser] = useState<DummyUserType>();
  const [reqesUser, setReqesUser] = useState<ReqesUserType>();

  useEffect(() => {
    console.log(dummyUser)
    console.log(reqesUser)
  }, [dummyUser,reqesUser])
  
  return (
    <div>
      <label htmlFor="dummyUser">Dummy User:</label>
      <p id="dummyUser">{dummyUser?.firstName}</p>
      <br />
      <TsDropdown<DummyUserType> onChange={setDummyUser} values={dummyUsers} />

      <br />

      <label htmlFor="reqesUser">Reqes User:</label>
      <p id="reqesUser">{reqesUser?.firstName}</p>
      <br />
      <TsDropdown<ReqesUserType> onChange={setReqesUser} values={reqestUsers} />
    </div>
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
