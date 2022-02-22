import actionType from "../../actionTypes/user";
import userInfo from "./userInfo";


export namespace user {
  export interface Login {
    type: actionType.USER_LOGIN;
    payload: userInfo;
  }
 
}

export default user;
