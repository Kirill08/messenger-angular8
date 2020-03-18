import { ID } from '@datorama/akita';

export type User = {
  id: ID,
  avatar: string,
  name: string,
  surname: string,
  location: string, // TODO: change to object
  isOnline: boolean,
  email: string,
  password: string
};
