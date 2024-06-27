import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  adminEmail = '';
  adminPassword = '';

  constructor(private service: ServiceService, private _router: Router) {}

  ngOnInit(): void {
    $('.admin-login-form').hide();

    $('.userlogin').click(function () {
      $('.user-login-form').hide();
      $('.admin-login-form').show();
    });

    $('.adminlogin').click(function () {
      $('.user-login-form').show();
      $('.admin-login-form').hide();
    });

    let currentUrl = window.location.href;
    if (currentUrl.includes('/userdashboard')) {
      window.onpopstate = function () {
        history.go(1);
      };
    }
  }

  loginUser() {
    this.service
      .loginUserFromRemote(this.user.email, this.user.password)
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log('Response Received');
          sessionStorage.setItem('loggedUser', this.user.email);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', 'user');
          this._router.navigate(['/userdashboard']);
        },
        (error: { error: any }) => {
          console.log(error.error);
          this.msg = 'Bad credentials, please enter valid credentials !!!';
        }
      );
  }

  adminLogin() {
    if (
      this.service.adminLoginFromRemote(this.adminEmail, this.adminPassword)
    ) {
      sessionStorage.setItem('loggedUser', this.adminEmail);
      sessionStorage.setItem('USER', 'admin');
      sessionStorage.setItem('ROLE', 'admin');
      this._router.navigate(['/loginsuccess']);
    } else {
      console.log('Exception Occured');
      this.msg = 'Bad admin credentials !!!';
    }
  }
}
