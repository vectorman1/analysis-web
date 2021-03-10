import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@app/public/submodules/user/services/user.service';
import {
	USER_LOGIN,
	userLoginFailure,
	userLoginSuccess,
} from '@app/public/submodules/user/actions/user-login.actions';
import {
	catchError,
	debounceTime,
	exhaustMap,
	filter,
	map,
	switchMap,
	tap,
} from 'rxjs/operators';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import { ServerError } from '@app/shared/models/server-error';
import { Observable, of } from 'rxjs';
import {
	USER_LOGOUT,
	userLogoutFailure,
	userLogoutSuccess,
} from '@app/public/submodules/user/actions/user-logout.actions';
import { User } from '@app/public/submodules/user/models/user';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';

@Injectable()
export class UserEffects {
	userLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_LOGIN),
			debounceTime(APP_CONSTANTS.REQUEST_THROTTLE_MS),
			exhaustMap((req: LoginRequest) =>
				this.userService.login(req).pipe(
					map((response: LoginResponse) => {
						this.userService.saveToken(response.token);
						let user = this.jwtService.getUser(response.token);
						return userLoginSuccess(user as User);
					})
				)
			),
			catchError((err: ServerError) => of(userLoginFailure(err)))
		)
	);

	userLogout$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(USER_LOGOUT),
				tap(() => this.userService.logout())
			),
		{ dispatch: false }
	);

	constructor(
		private actions$: Actions,
		private userService: UserService,
		private jwtService: JwtService
	) {}
}
