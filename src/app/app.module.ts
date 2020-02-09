import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {OrdersComponent} from './orders/orders.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ItemService} from './item.service';
import {ItemsComponent} from './items/items.component';
import {AuthGuard} from './auth.guard';
import {TokenrefreshService} from './tokenrefresh.service';
import {TokenInterceptorService} from './token-interceptor.service';
import {OrdersService} from './orders.service';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    RegisterComponent,
    ProfileComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: ''})
  ],
  providers: [
    AuthService,
    ItemService,
    OrdersService,
    AuthGuard,
    TokenrefreshService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
