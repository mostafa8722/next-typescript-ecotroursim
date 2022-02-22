import actionType from "../actionTypes/user";
import { Action } from "../actionsEntity/user";
import userType from "../interfaces/user/userState";
import initialUser from "../initialStates/user";
import ClassUser from "../classes/user";

const userReducer = (
  state: userType = initialUser,
  action: Action,
): userType => {
  const tempUser = new ClassUser(state);

  switch (action.type) {
    case actionType.USER_LOGIN:
      tempUser.login(action.payload);
      return tempUser;
      break;

   
    default:
      return state;
  }
};

export default userReducer;
