import userInterface from "../interfaces/user/userState";
import userInfo from "../interfaces/user/userInfo";

class ClassUser implements userInterface {
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

  // constructor(cart: cartItem[] | [] , toatalPrice: number, deliveryPrice: number) {
  constructor(state: userInterface) {
    this.user = state.user;
    this.isLoggedIn = state.isLoggedIn;
    this.userId = state.userId;
    this.token = state.token;
    this.refreshToken = state.refreshToken;
    this.expiresOn = state.expiresOn;
    this.data = state.data;
    this.apiToken = state.apiToken;
    this.mobile = state.mobile;
    this.email = state.email;
    this.password = state.password;
    this.bank = state.bank;
    this.sheba = state.sheba;
    this.national_back_img  = state.national_back_img;
    this.national_front_img = state.national_front_img;
    this.certificate_img = state.certificate_img;
    this.lat = state.lat;
    this.lng = state.lng;
    this.address = state.address;
  }

  login(user: userInfo) {
    this.mobile = user.mobile;
    this.apiToken = user.token;
  }

}

export default ClassUser;
