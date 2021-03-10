import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastService } from '@app/shared/services/toast.service';
import { map, tap } from 'rxjs/operators';
import { ServerError } from '@app/shared/models/server-error';
import { TOAST_ERROR, TOAST_SUCCESS } from '@app/root/actions/toast.actions';

@Injectable()
export class ToastEffects {
	errorToasts$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(TOAST_ERROR),
				tap((err) => this.toastService.openErrorToast(err))
			),
		{
			dispatch: false,
		}
	);

	successToast$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(TOAST_SUCCESS),
				tap((res) => this.toastService.openSuccessToast(res))
			),
		{
			dispatch: false,
		}
	);

	constructor(
		private actions$: Actions,
		private toastService: ToastService
	) {}
}
