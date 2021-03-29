import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class OnlyMeInterceptor implements HttpInterceptor {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  private isMe(): boolean {
    return JSON.parse(localStorage.getItem("isMe") ?? "false")
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers.set("isMe", this.isMe().toString());
    const authReq = request.clone({ headers });
    return next.handle(authReq);
  }
}
