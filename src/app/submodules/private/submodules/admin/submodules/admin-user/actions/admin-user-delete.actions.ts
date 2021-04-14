import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';

export const USER_DELETE = '[User] Delete User';
export const USER_DELETE_SUCCESS = '[User] Delete User Success';
export const USER_DELETE_FAILURE = '[User] Delete User Failure';

export const userDelete = createAction(USER_DELETE, props<{ uuid: string }>());

export const userDeleteSuccess = createAction(USER_DELETE_SUCCESS);

export const userDeleteFailure = createAction(
	USER_DELETE_FAILURE,
	props<ServerError>()
);
