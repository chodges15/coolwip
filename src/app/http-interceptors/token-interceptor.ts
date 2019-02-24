import { Injectable, OnInit } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: String = '';

  constructor() {}

  getToken(): String {
    return localStorage.getItem('token');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.getToken()}`
        }
        });
    return next.handle(req);
  }
}
