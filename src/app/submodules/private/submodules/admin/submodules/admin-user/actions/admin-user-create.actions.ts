import { createAction, props } from '@ngrx/store';
import { User } from '@app/submodules/admin/submodules/admin-user/models/user';
import { ServerError } from '@app/shared/models/server-error';

export const USER_CREATE = '[User] Create Users';
export const USER_CREATE_SUCCESS = '[User] Create Users Success';
export const USER_CREATE_FAILURE = '[User] Create Users Failure';

export const userCreate = createAction(USER_CREATE, props<User>());

export const userCreateSuccess = createAction(USER_CREATE_SUCCESS);

export const userCreateFailure = createAction(
	USER_CREATE_FAILURE,
	props<ServerError>()
);
