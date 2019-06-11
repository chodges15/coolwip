import { Injectable, OnInit } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSettingsService } from '../user-settings.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: String = '';

  constructor(private settingsService: UserSettingsService) {
  }

  getToken(): string {
    return this.settingsService.getUserSettings().githubToken;
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
