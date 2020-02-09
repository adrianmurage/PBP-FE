import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REGISTER_URL = 'http://127.0.0.1:5000/api/register';
  private LOGIN_URL = 'http://127.0.0.1:5000/api/login';
  private USERPROFILE_URL = 'http://127.0.0.1:5000/api/user/profile';

  constructor(private http: HttpClient,
              private router: Router) {
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
