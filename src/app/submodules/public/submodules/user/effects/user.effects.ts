import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IdentityService } from '@app/public/submodules/user/services/identity.service';
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
import { TokenUser } from '@app/public/submodules/user/models/tokenUser';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';
import {
	USER_REGISTER,
	userRegisterFailure,
	userRegisterSuccess,
} from '@app/public/submodules/user/actions/user-register.actions';
import { RegisterResponse } from '@app/public/submodules/user/models/register-response';
import { RegisterRequest } from '@app/public/submodules/user/models/register-request';

@Injectable()
export class UserEffects {
	userLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_LOGIN),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: LoginRequest) =>
				this.userService.login(req).pipe(
					map((response: LoginResponse) => {
						this.userService.saveToken(response.token);
						let user = this.jwtService.getUser(response.token);
						return userLoginSuccess(user as TokenUser);
					}),
					catchError((err: ServerError) => of(userLoginFailure(err)))
				)
			)
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

	userRegister$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_REGISTER),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: RegisterRequest) =>
				this.userService.register(req).pipe(
					map((res: RegisterResponse) => {
						this.userService.saveToken(res.token);
						let user = this.jwtService.getUser(res.token);
						return userRegisterSuccess(user as TokenUser);
					}),
					catchError((err: ServerError) =>
						of(userRegisterFailure(err))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private userService: IdentityService,
		private jwtService: JwtService
	) {}
}
