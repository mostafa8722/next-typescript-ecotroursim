import userInfo from "./userInfo";

interface userState {
  user: userInfo | {};

  isLoggedIn: boolean | false;
  userId: string | "";
  token: string | "";
  refreshToken: string | "";
  expiresOn: string | "";
  data: string | "";
  apiToken: string | "";
  mobile: string | "";
  email: string | "";
  password: string | "";
  bank: string | "";
  sheba: string | "";
  national_back_img : string | "";
  national_front_img : string | "";
  certificate_img : string | "";
  lat : string | "";
  lng : string | "";
  address : string | "";
}
export default userState;
