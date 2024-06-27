import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class REGISTERComponent implements OnInit {
  user = new User();

  msg = ' ';

  constructor(private service: ServiceService, private rout: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('Registration Success');
        localStorage.setItem('username', this.user.username);
        this.rout.navigate(['/registrationsuccess']);
      },
      (error) => {
        console.log('Registration Failed');
        console.log(error.error);
        this.msg = 'User with ' + this.user.email + ' already exists !!!';
      }
    );
  }
}
