import { createAction, props } from '@ngrx/store';
import { SymbolDetails } from '@app/shared/models/symbol-details';
import { ServerError } from '@app/shared/models/server-error';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';

export const USER_LOGIN = '[User] User Login';
export const USER_LOGIN_SUCCESS = '[User] User Login Success';
export const USER_LOGIN_FAILURE = '[User] User Login Failure';

export const userLogin = createAction(USER_LOGIN, props<LoginRequest>());

export const userLoginSuccess = createAction(
	USER_LOGIN_SUCCESS,
	props<LoginResponse>()
);

export const userLoginFailure = createAction(
	USER_LOGIN_FAILURE,
	props<ServerError>()
);
