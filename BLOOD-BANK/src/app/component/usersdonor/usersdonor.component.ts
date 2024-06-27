import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DonorServiceService } from 'src/app/donor-service.service';
import { Donor } from 'src/app/donor';
@Component({
  selector: 'app-usersdonor',
  templateUrl: './usersdonor.component.html',
  styleUrls: ['./usersdonor.component.css'],
})
export class UsersdonorComponent implements OnInit {
  loggedUser = '';
  tempUser = '';
  msg = '';
  donor = new Donor();

  constructor(
    private _router: Router,
    private donorService: DonorServiceService,
    private activatedRoute: ActivatedRoute
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
    this.msg = '';
  }

  navigateHome() {
    this._router.navigate(['/userdashboard']);
  }

  addDonor() {
    this.donorService.requestForAddingDonor(this.donor).subscribe(
      (data) => {
        console.log('Added as a Donor Successfully');
        this.msg = 'Donor Added Successfully !!!';
        this._router.navigate(['/userdashboard']);
      },
      (error) => {
        console.log('Process Failed');
        console.log(error.error);
      }
    );
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }
}
