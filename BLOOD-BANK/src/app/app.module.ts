import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { REGISTERComponent } from './component/register/register.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UsersdonorComponent } from './component/usersdonor/usersdonor.component';
import { RequesthistoryfromuserComponent } from './component/requesthistoryfromuser/requesthistoryfromuser.component';
import { RequesthistoryComponent } from './component/requesthistory/requesthistory.component';
import { RequestbloodComponent } from './component/requestblood/requestblood.component';
import { RegistersuccessComponent } from './component/registersuccess/registersuccess.component';
import { LoginsuccessComponent } from './component/loginsuccess/loginsuccess.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { DonorlistComponent } from './component/donorlist/donorlist.component';
import { BloodstockComponent } from './component/bloodstock/bloodstock.component';
import { AddingdonorComponent } from './component/addingdonor/addingdonor.component';

@NgModule({
  declarations: [AppComponent, REGISTERComponent, UserprofileComponent, UserlistComponent, UserdashboardComponent, UsersdonorComponent, RequesthistoryfromuserComponent, RequesthistoryComponent, RequestbloodComponent, RegistersuccessComponent, LoginsuccessComponent, LoginComponent, FooterComponent, DonorlistComponent, BloodstockComponent, AddingdonorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
