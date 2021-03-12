import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { userLogout } from '@app/public/submodules/user/actions/user-logout.actions';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>, private router: Router) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			tap(
				() => {},
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status === 401) {
							this.store.dispatch(userLogout());
							this.router.navigate(['/public/user/login']);
						}
					}
				}
			)
		);
	}
}
