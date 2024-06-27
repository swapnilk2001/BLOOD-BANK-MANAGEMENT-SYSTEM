import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private NAV_URL = 'http://localhost:8080'; // Assuming your backend URL

  user = new User();

  constructor(private http: HttpClient) {}

  // private Register = '';
  // public RegisterAPI(data: any): Observable<any> {
  //   return this.http.post<any>(this.Register, data);
  // }

  public loginUserFromRemote(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.NAV_URL}/login`, { email, password })
      .pipe(
        map((data) => {
          localStorage.setItem('USER', email);
          localStorage.setItem('ROLE', 'ADMIN');
          localStorage.setItem('TOKEN', `Bearer ${data.token}`);
          console.log(data);
          return data;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('USER');
    if (user === null || user.length === 0) {
      return false;
    }
    return true;
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem('TOKEN');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('USER');
  }

  userType() {
    return sessionStorage.getItem('ROLE');
  }

  public adminLoginFromRemote(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      sessionStorage.setItem('user', email);
      sessionStorage.setItem('role', 'admin');
      return true;
    }
    return false;
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(`${this.NAV_URL}/register`, user);
  }
}
