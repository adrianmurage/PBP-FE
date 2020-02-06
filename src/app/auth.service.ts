import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REGISTER_URL = 'http://127.0.0.1:5000/api/register';
  private LOGIN_URL = 'http://127.0.0.1:5000/api/login';

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post<any>(this.REGISTER_URL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.LOGIN_URL, user);
  }
}
