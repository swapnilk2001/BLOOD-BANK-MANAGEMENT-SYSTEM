import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorServiceService implements HttpInterceptor {
  constructor(private service: ServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.service.getAuthenticatedToken();
    let username = this.service.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }
    return next.handle(request);
  }
}
