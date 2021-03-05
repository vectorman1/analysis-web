import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@app/public/submodules/user/services/user.service';
import {
	USER_LOGIN,
	userLoginFailure,
	userLoginSuccess,
} from '@app/public/submodules/user/actions/user-login.actions';
import { catchError, debounceTime, exhaustMap, map } from 'rxjs/operators';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
	user$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_LOGIN),
			debounceTime(APP_CONSTANTS.REQUEST_THROTTLE_MS),
			exhaustMap((req: LoginRequest) =>
				this.userService
					.login(req)
					.pipe(
						map((response: LoginResponse) =>
							userLoginSuccess(response)
						)
					)
			),
			catchError((err: ServerError) => of(userLoginFailure(err)))
		)
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
