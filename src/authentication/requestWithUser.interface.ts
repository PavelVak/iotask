import { User } from '../users/user.schema';

export interface RequestWithUser extends Request {
  user: User;
}
