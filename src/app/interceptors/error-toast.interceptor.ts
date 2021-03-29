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
					if (err.status === 400) {
						this.openSnackBar(err);
					}
				}
			)
		);
	}
}
