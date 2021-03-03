import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginRequest } from '@app/identity/models/request';
import { AuthResponse } from '@app/identity/models/response';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { IdentityService } from '@app/identity/services/identity.service';
import {
	IDENTITY_REGISTER,
	IDENTITY_REGISTER_FAILURE,
	IDENTITY_REGISTER_SUCCESS,
} from '@app/identity/actions/register.actions';

@Injectable()
export class RegisterEffects {
	register$ = createEffect(() =>
		this.actions$.pipe(
			ofType(IDENTITY_REGISTER),
			switchMap((req: LoginRequest) =>
				this.identityService.register(req).pipe(
					map((resp: AuthResponse) => {
						return {
							type: IDENTITY_REGISTER_SUCCESS,
							payload: resp,
						};
					}),
					catchError((err: ServerError) =>
						of({ type: IDENTITY_REGISTER_FAILURE, payload: err })
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private identityService: IdentityService
	) {}
}
