import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { toastError } from '@app/root/actions/toast.actions';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';

@Injectable()
export class ErrorToastInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>) {}

	openSnackBar(err: any) {
		this.store.dispatch(toastError(err));
	}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(
				() => {},
				(err: any) => {
					if (
						APP_CONSTANTS.TOAST_SERVER_ERRORS.includes(err.status)
					) {
						this.openSnackBar(err);
					}
				}
			)
		);
	}
}
