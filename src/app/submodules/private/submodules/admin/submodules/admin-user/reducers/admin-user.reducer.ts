import { Action, createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { PagedList } from '@app/root/models/paged-list';
import { User } from '@app/submodules/admin/submodules/admin-user/models/user';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';
import {
	userGetPaged,
	userGetPagedFailure,
	userGetPagedReset,
	userGetPagedSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-get-paged.actions.ts';

import {
	userGet,
	userGetFailure,
	userGetReset,
	userGetSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-get.actions';

export const adminUserFeatureKey = 'adminUser';

export interface AdminUserState {
	users: ServerItem<PagedList<User>>;
	userItem: ServerItem<User>;
}

export const initialState: AdminUserState = {} as AdminUserState;

export const reducer = createReducer(
	initialState,
	on(userGetPaged, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.users)
	),
	on(userGetPagedSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.users)
	),
	on(userGetPagedFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.users)
	),
	on(userGetPagedReset, (state) => {
		state.users = initialState.users;
		return state;
	}),

	on(userGet, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.userItem)
	),
	on(userGetSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.userItem)
	),
	on(userGetFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.userItem)
	),
	on(userGetReset, (state) => {
		state.userItem = initialState.userItem;
		return state;
	})
);
