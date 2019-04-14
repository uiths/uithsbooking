import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

class AuthService {

  tokenKey = 'auth_token';
  //Lấy token từ localstorage
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  //giải mã token: gồm các thông tin người dùng
  decode(token) {
    return jwt.decode(token);
  }
  //Lưu token vào localstorage
  saveToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }
  //Xóa token khỏi localstorage
  invalidateUser() {
    localStorage.removeItem(this.tokenKey);
  }

  getExpiration(token) {
    const exp = this.decode(token).exp;

    return moment.unix(exp);
  }

  getId() {
    return this.decode(this.getToken()).userId
  }
  getUsername() {
    return this.decode(this.getToken()).username;
  }
  getEmail() {
    return this.decode(this.getToken()).email;
  }
  getPhone() {
    return this.decode(this.getToken()).phone;
  }
  getImage() {
    return this.decode(this.getToken()).image;
  }
  isValid(token) {
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();

    return (token && this.isValid(token)) ? true : false;
  }
}


export default new AuthService();
