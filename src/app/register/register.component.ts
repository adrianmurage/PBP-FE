import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData);
  }
}
