import { Action, createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import {
	userLogin,
	userLoginFailure,
	userLoginSuccess,
} from '@app/public/submodules/user/actions/user-login.actions';
import { serverCallStart } from '@app/root/server-calls.helpers';

export const userFeatureKey = 'user';

export interface UserState {
	login: ServerItem<LoginResponse>;
}

export const initialState: UserState = {} as UserState;

export const reducer = createReducer(
	initialState,
	on(userLogin, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.login)
	),
	on(userLoginSuccess, (state, res) =>
		serverCallStart(state, { payload: res }, () => state.login)
	),
	on(userLoginFailure, (state, err) =>
		serverCallStart(state, { payload: err }, () => state.login)
	)
);
