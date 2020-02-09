import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public REGISTER_URL = 'https://pbp-api-v0.herokuapp.com/api/register';
  public LOGIN_URL = 'https://pbp-api-v0.herokuapp.com/api/login';
  public USERPROFILE_URL = 'https://pbp-api-v0.herokuapp.com/api/user/profile';

  constructor(public http: HttpClient,
              public router: Router) {
  }

  getUserProfile() {
    return this.http.get<any>(this.USERPROFILE_URL);
  }

  registerUser(user) {
    return this.http.post<any>(this.REGISTER_URL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.LOGIN_URL, user);
  }

  logoutUser() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/items']);
  }

  loggedIn() {
    return !!localStorage.getItem('access_token');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }
}
