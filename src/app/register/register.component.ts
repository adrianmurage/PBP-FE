import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    username: undefined,
    password: undefined
  };

  constructor(public auth: AuthService,
              public router: Router) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData);
    this.router.navigate(['/login']);
  }
}
