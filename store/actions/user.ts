import user from "../interfaces/user/userActionType";
import userInfo from "../interfaces/user/userInfo";
import actionType from "../actionTypes/user";

export const login = (payload: userInfo): user.Login => {

  return { type: actionType.USER_LOGIN, payload };
};