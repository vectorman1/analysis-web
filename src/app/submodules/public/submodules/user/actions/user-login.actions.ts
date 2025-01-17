import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { TokenUser } from '@app/public/submodules/user/models/tokenUser';

export const USER_LOGIN = '[User] User Login';
export const USER_LOGIN_SUCCESS = '[User] User Login Success';
export const USER_LOGIN_FAILURE = '[User] User Login Failure';

export const userLogin = createAction(USER_LOGIN, props<LoginRequest>());

export const userLoginSuccess = createAction(
	USER_LOGIN_SUCCESS,
	props<TokenUser>()
);

export const userLoginFailure = createAction(
	USER_LOGIN_FAILURE,
	props<ServerError>()
);
