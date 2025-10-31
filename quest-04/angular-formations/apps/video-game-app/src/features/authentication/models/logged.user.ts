import { AuthUser } from './authenticate.user';
export type LoggedUser = Omit<AuthUser, 'password'> & {
  firstName: string;
  lastName: string;
  token: string;
};
