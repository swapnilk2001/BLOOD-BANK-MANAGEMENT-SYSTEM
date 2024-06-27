import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { REGISTERComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { LoginsuccessComponent } from './component/loginsuccess/loginsuccess.component';
import { RouterGuard } from './router.guard';
import { RegistersuccessComponent } from './component/registersuccess/registersuccess.component';
import { AddingdonorComponent } from './component/addingdonor/addingdonor.component';
import { AdminGuard } from './admin.guard';
import { DonorlistComponent } from './component/donorlist/donorlist.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { BloodstockComponent } from './component/bloodstock/bloodstock.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { UserGuard } from './user.guard';
import { RequesthistoryComponent } from './component/requesthistory/requesthistory.component';
import { RequesthistoryfromuserComponent } from './component/requesthistoryfromuser/requesthistoryfromuser.component';
import { RequestbloodComponent } from './component/requestblood/requestblood.component';
import { UsersdonorComponent } from './component/usersdonor/usersdonor.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'loginsuccess',
    component: LoginsuccessComponent,
    canActivate: [RouterGuard],
  },
  { path: 'registration', component: REGISTERComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrationsuccess', component: RegistersuccessComponent },
  {
    path: 'addDonor',
    component: AddingdonorComponent,
    canActivate: [AdminGuard],
  },
  { path: 'donorlist', component: DonorlistComponent },
  { path: 'userlist', component: UserlistComponent, canActivate: [AdminGuard] },
  { path: 'bloodStock', component: BloodstockComponent },
  { path: 'bloodStockuser', component: UserdashboardComponent },
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'requesthistory',
    component: RequesthistoryComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'requesthistoryfromuser',
    component: RequesthistoryfromuserComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'requestblood',
    component: RequestbloodComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'userasdonor',
    component: UsersdonorComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    canActivate: [RouterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
