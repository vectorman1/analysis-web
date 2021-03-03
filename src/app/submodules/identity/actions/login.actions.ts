import { createAction, props } from '@ngrx/store';
import { LoginRequest } from '@app/identity/models/request';
import { AuthResponse } from '@app/identity/models/response';
import { ServerError } from '@app/shared/models/server-error';

export const IDENTITY_LOGIN = '[Identity] Login';
export const IDENTITY_LOGIN_SUCCESS = '[Identity] Login Success';
export const IDENTITY_LOGIN_FAILURE = '[Identity] Login Failure';

export const identityLogin = createAction(
	IDENTITY_LOGIN,
	props<LoginRequest>()
);

export const identityLoginSuccess = createAction(
	IDENTITY_LOGIN_SUCCESS,
	props<AuthResponse>()
);

export const identityLoginFailure = createAction(
	IDENTITY_LOGIN_FAILURE,
	props<ServerError>()
);
