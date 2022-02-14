import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.group('interceptor');
    // const userToken = localStorage.getItem('ltoken');
    // console.log(userToken);

    // const modifiedReq = req.clone({
    //   headers: req.headers.set('Authorization', 'Bearer ' + userToken),
    // });
    // console.groupEnd();

    // // console.log(modifiedReq);

    // return next.handle(modifiedReq);
    return next.handle(req);
  }
}
