import { Action, createReducer, on } from '@ngrx/store';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';
import { LoginRequest } from '@app/identity/models/request';
import { AuthResponse } from '@app/identity/models/response';
import { ServerError } from '@app/shared/models/server-error';

import * as fromIdentity from '@app/identity/actions/login.actions';
import { ServerItem } from '@app/root/models/server-item.model';

export const identityFeatureKey = 'identity';

export interface IdentityState {
	login: ServerItem<AuthResponse>;
}

export const initialState: IdentityState = <IdentityState>{};

export const reducer = createReducer(
	initialState,
	on(fromIdentity.identityLogin, (state, { username, password }) =>
		serverCallStart(
			state,
			{ payload: new LoginRequest(username, password) },
			() => state.login
		)
	),
	on(fromIdentity.identityLoginSuccess, (state, { token }) =>
		serverCallSuccess(
			state,
			{ payload: new AuthResponse(token) },
			() => state.login
		)
	),
	on(fromIdentity.identityLoginFailure, (state, { code, message, details }) =>
		serverCallFailure(
			state,
			{ payload: new ServerError(code, message, details) },
			() => state.login
		)
	)
);
