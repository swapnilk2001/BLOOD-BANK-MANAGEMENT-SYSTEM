import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DonorServiceService } from 'src/app/donor-service.service';
import { User } from 'src/app/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  loggedUser = '';
  tempUser = '';
  temp = false;
  profileDetails: Observable<User[]> | undefined;
  user: User = new User();
  msg = ' ';

  constructor(
    private donorService: DonorServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tempUser = JSON.stringify(
      sessionStorage.getItem('loggedUser') || '{}'
    );
    if (
      this.tempUser.charAt(0) === '"' &&
      this.tempUser.charAt(this.tempUser.length - 1) === '"'
    ) {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length - 2);
    }
    this.loggedUser = this.tempUser;

    // this.donorService.getProfileDetails(this.loggedUser)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.user = data;
    //   }, error => console.log(error));
    this.getProfileDetails(this.loggedUser);
    $('#profileform').hide();
  }

  editProfile() {
    $('#profilecard').hide();
    $('#profileform').show();
  }

  getProfileDetails(loggedUser: string) {
    this.profileDetails = this.donorService.getProfileDetails(this.loggedUser);
    console.log(this.profileDetails);
  }

  updateUserProfile() {
    this.donorService.UpdateUserProfile(this.user).subscribe(
      (data) => {
        console.log('UserProfile Updated succesfully');
        //localStorage.setItem("username",this.user.username);
        this.msg = 'Profile Updated Successfully !!!';
        $('.editbtn').hide();
        $('#message').show();
        this.temp = true;
        $('#profilecard').show();
        $('#profileform').hide();
        setTimeout(() => {
          this.router.navigate(['/userdashboard']);
        }, 6000);
      },
      (error) => {
        console.log('Profile Updation Failed');
        console.log(error.error);
        this.msg = 'Profile Updation Failed !!!';
      }
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
