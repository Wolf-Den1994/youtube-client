import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, URL_SERVER } from '../../utils/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      url: `${URL_SERVER}${req.url}`,
      setParams: {
        key: API_KEY,
      },
    }));
  }
}
