export type DummyUserType = {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
};

export type DummyUserResponseType = {
  data: DummyUserType[];
  limit: number;
  page: number;
  total: number;
};

export type ReqesUserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

type ReqesUserInitialType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ReqesUserResponseType = {
  data: ReqesUserInitialType[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};