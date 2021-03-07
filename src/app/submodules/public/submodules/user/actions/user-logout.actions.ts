import { Action, createAction, props } from '@ngrx/store';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import { ServerError } from '@app/shared/models/server-error';

export const USER_LOGOUT = '[User] User Logout';
export const USER_LOGOUT_SUCCESS = '[User] User Logout Success';
export const USER_LOGOUT_FAILURE = '[User] User Logout Error';

export const userLogout = createAction(USER_LOGOUT);

export const userLogoutSuccess = createAction(USER_LOGOUT_SUCCESS);

export const userLogoutFailure = createAction(
	USER_LOGOUT_FAILURE,
	props<any>()
);
