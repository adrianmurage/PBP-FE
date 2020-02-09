import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {};

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUserProfile()
      .subscribe(
        res => this.user = res,
        err => console.log(err)
      );
  }

}
