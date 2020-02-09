import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenrefreshService {
  private TOKENREFRESH_URL = 'http://127.0.0.1:5000/api/token/refresh';

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  refreshToken() {
    const headers = new HttpHeaders({Authorization: `Bearer ${this.auth.getRefreshToken()}`});
    const options = {
      headers
    };
    return this.http.post<any>(this.TOKENREFRESH_URL, null, options);
  }
}
