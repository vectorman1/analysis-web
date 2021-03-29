import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import { PagedList } from '@app/root/models/paged-list';
import { User } from '@app/submodules/admin/submodules/user/models/user';
import { PagedRequest } from '@app/shared/models/request';

export const USER_GET_PAGED = '[User] Get Paged Users';
export const USER_GET_PAGED_SUCCESS = '[User] Get Paged Users Success';
export const USER_GET_PAGED_FAILURE = '[User] Get Paged Users Failure';
export const USER_GET_PAGED_RESET = '[User] Get Paged Users Reset';

export const userGetPaged = createAction(USER_GET_PAGED, props<PagedRequest>());

export const userGetPagedSuccess = createAction(
	USER_GET_PAGED_SUCCESS,
	props<PagedList<User>>()
);

export const userGetPagedFailure = createAction(
	USER_GET_PAGED_FAILURE,
	props<ServerError>()
);

export const userGetPagedReset = createAction(USER_GET_PAGED_RESET);
