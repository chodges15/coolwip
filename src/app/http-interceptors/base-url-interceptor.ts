import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    getBaseUrl(): String {
        return localStorage.getItem('baseUrl');
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
                url: `${this.getBaseUrl()}${req.url}`
            });
        return next.handle(req);
    }
}
