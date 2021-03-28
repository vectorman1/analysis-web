import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';

export const USER_UPDATE = '[User] Update User';
export const USER_UPDATE_SUCCESS = '[User] Update User Success';
export const USER_UPDATE_FAILURE = '[User] Update User Failure';

export const userUpdate = createAction(USER_UPDATE, props<{ uuid: string }>());

export const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS);

export const userUpdateFailure = createAction(
	USER_UPDATE_FAILURE,
	props<ServerError>()
);
