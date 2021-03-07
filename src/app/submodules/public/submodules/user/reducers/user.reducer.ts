import { Action, createReducer, on } from '@ngrx/store';
import { ServerItem, ServerItemBase } from '@app/root/models/server-item.model';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import {
	userLogin,
	userLoginFailure,
	userLoginSuccess,
} from '@app/public/submodules/user/actions/user-login.actions';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';
import { User } from '@app/public/submodules/user/models/user';
import {
	userLogout,
	userLogoutFailure,
	userLogoutSuccess,
} from '../actions/user-logout.actions';

export const userFeatureKey = 'user';

export interface UserState {
	identity: ServerItem<User>;
}

export const initialState: UserState = {
	identity: {
		isLoading: false,
		isSuccess: false,
		value: {},
		error: {},
		sendValue: {},
	},
} as UserState;

export const reducer = createReducer(
	initialState,
	on(userLogin, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.identity)
	),
	on(userLoginSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.identity)
	),
	on(userLoginFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.identity)
	),
	on(userLogout, (state, req) => initialState)
	// on(userLogoutSuccess, (state, res) =>
	// 	serverCallSuccess(state, { payload: res }, () => state.user)
	// ),
	// on(userLogoutFailure, (state, err) =>
	// 	serverCallFailure(state, { payload: err }, () => state.user)
	// )
);
