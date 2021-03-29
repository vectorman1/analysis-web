import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentityService } from '@app/public/submodules/user/services/identity.service';

@Injectable()
export class IdentityInterceptor implements HttpInterceptor {
	constructor(private userService: IdentityService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let token = this.userService.getToken();

		if (token) {
			req = req.clone({
				headers: req.headers.set('Authorization', `Bearer ${token}`),
			});
		}

		return next.handle(req);
	}
}
