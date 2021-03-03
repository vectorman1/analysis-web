import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginRequest } from '@app/identity/models/request';
import { AuthResponse } from '@app/identity/models/response';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { IdentityService } from '@app/identity/services/identity.service';
import {
	IDENTITY_LOGIN,
	IDENTITY_LOGIN_FAILURE,
	IDENTITY_LOGIN_SUCCESS,
} from '@app/identity/actions/login.actions';

@Injectable()
export class LoginEffects {
	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(IDENTITY_LOGIN),
			switchMap((req: LoginRequest) =>
				this.identityService.login(req).pipe(
					map((resp: AuthResponse) => {
						return {
							type: IDENTITY_LOGIN_SUCCESS,
							payload: resp,
						};
					}),
					catchError((err: ServerError) =>
						of({ type: IDENTITY_LOGIN_FAILURE, payload: err })
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
