import * as userActions from './user/user.actions';
import { userSliceAction } from './user/user.slice';

export const allActions = { ...userActions ,...userSliceAction }
