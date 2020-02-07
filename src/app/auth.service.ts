import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REGISTER_URL = 'https://pbp-staging-api.herokuapp.com/api/register';
  private LOGIN_URL = 'https://pbp-staging-api.herokuapp.com/api/login';

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post<any>(this.REGISTER_URL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.LOGIN_URL, user);
  }
}
