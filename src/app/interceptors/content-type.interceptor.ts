import {
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentTypeInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let headers = (request.headers as HttpHeaders) || new HttpHeaders();

		if (!headers.has('Content-Type')) {
			headers = headers.set('Content-Type', 'application/json');
		}

		request = request.clone({ headers });

		return next.handle(request);
	}
}
