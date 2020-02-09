import {Injectable} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
import {TokenrefreshService} from './tokenrefresh.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService,
              public  tokenrefresh: TokenrefreshService) {
  }

  intercept(req, next) {
    this.tokenrefresh.refreshToken();
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAccessToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
