import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import { User } from '@app/submodules/admin/submodules/user/models/user';

export const USER_GET = '[User] Get User';
export const USER_GET_SUCCESS = '[User] Get User Success';
export const USER_GET_FAILURE = '[User] Get User Failure';
export const USER_GET_RESET = '[User] Get User Reset';

export const userGet = createAction(USER_GET, props<{ uuid: string }>());

export const userGetSuccess = createAction(USER_GET_SUCCESS, props<User>());

export const userGetFailure = createAction(
	USER_GET_FAILURE,
	props<ServerError>()
);

export const userGetReset = createAction(USER_GET_RESET);
