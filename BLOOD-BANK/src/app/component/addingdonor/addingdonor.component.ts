import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from 'src/app/donor';
import { DonorServiceService } from 'src/app/donor-service.service';
@Component({
  selector: 'app-addingdonor',
  templateUrl: './addingdonor.component.html',
  styleUrls: ['./addingdonor.component.css'],
})
export class AddingdonorComponent implements OnInit {
  loggedUser = '';
  tempUser = '';
  donor = new Donor();

  constructor(private service: DonorServiceService, private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      var now = new Date();
      var day = ('0' + now.getDate()).slice(-2);
      var month = ('0' + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear() + '-' + month + '-' + day;
      $('#date').val(today);
    });
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
  }

  navigateHome() {
    if (this.loggedUser === 'admin@gmail.com') {
      this.router.navigate(['/loginsuccess']);
    } else this.router.navigate(['/userdashboard']);
  }

  addDonor() {
    this.service.addDonorFromRemote(this.donor).subscribe(
      (data) => {
        console.log('Donor added Successfully');
        this.router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('process Failed');
        console.log(error.error);
      }
    );
  }
}
