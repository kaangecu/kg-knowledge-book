export type UserType = {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
};

export type UserResponseType = {
  data: UserType[];
  limit: number;
  page: number;
  total: number;
};
