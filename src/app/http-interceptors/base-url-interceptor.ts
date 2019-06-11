import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { UserSettingsService } from '../user-settings.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(private settingsService: UserSettingsService) {
    }
    getBaseUrl(): string {
        return this.settingsService.getUserSettings().githubApi;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
                url: `${this.getBaseUrl()}${req.url}`
            });
        return next.handle(req);
    }
}
