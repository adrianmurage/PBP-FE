import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenrefreshService {
  public TOKENREFRESH_URL = 'https://pbp-api-v0.herokuapp.com/api/token/refresh';

  constructor(public http: HttpClient,
              public auth: AuthService) {
  }

  refreshToken() {
    const headers = new HttpHeaders({Authorization: `Bearer ${this.auth.getRefreshToken()}`});
    const options = {
      headers
    };
    return this.http.post<any>(this.TOKENREFRESH_URL, null, options);
  }
}
