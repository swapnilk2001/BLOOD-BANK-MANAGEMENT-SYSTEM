import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from './donor';
import { Requesting } from './requesting';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class DonorServiceService {
  private NAV_URL = 'http://localhost:8080'; // Assuming your backend URL

  user = new User();

  constructor(private http: HttpClient) {}

  public getDonorList(): Observable<any> {
    return this.http.get<any>(`${this.NAV_URL}/donorlist`);
  }

  public getRequestHistory(): Observable<any> {
    return this.http.get<any>(`${this.NAV_URL}/requestHistory`);
  }

  public getRequestHistoryByEmail(loggedUser: string): Observable<any> {
    return this.http.get<any>(`${this.NAV_URL}/requestHistory/` + loggedUser);
  }

  public getUserList(): Observable<any> {
    return this.http.get<any>(`${this.NAV_URL}/userlist`);
  }

  public addDonorFromRemote(donor: Donor): Observable<any> {
    return this.http.post<any>(`${this.NAV_URL}/addDonor`, donor);
  }

  public requestForBlood(request: Requesting): Observable<any> {
    return this.http.post<any>(`${this.NAV_URL}/requestblood`, request);
  }

  public requestForAddingDonor(donor: Donor): Observable<any> {
    return this.http.post<any>(`${this.NAV_URL}/addAsDonor`, donor);
  }

  public getBloodDetails(): Observable<any> {
    return this.http.get<any>(`${this.NAV_URL}/bloodDetails`);
  }

  public getProfileDetails(loggedUser: string): Observable<any> {
    return this.http.get(`${this.NAV_URL}/profileDetails/` + loggedUser);
  }

  public UpdateUserProfile(user: any): Observable<any> {
    return this.http.put<any>(`${this.NAV_URL}/updateuser`, user);
  }

  public acceptRequestForBlood(loggedUser: string): Observable<any> {
    return this.http.get(`${this.NAV_URL}/acceptstatus/` + loggedUser);
  }

  public rejectRequestForBlood(loggedUser: string): Observable<any> {
    return this.http.get(`${this.NAV_URL}/rejectstatus/` + loggedUser);
  }

  public getTotalDonors(): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalDonors`);
  }

  public getTotalUsers(): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalUsers`);
  }

  public getTotalBloodGroups(): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalBloodGroups`);
  }

  public getTotalUnits(): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalUnits`);
  }

  public getTotalRequests(loggedUser: string): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalRequests/` + loggedUser);
  }

  public getTotalDonationCount(loggedUser: string): Observable<any> {
    return this.http.get(`${this.NAV_URL}/getTotalDonationCount/` + loggedUser);
  }
}
