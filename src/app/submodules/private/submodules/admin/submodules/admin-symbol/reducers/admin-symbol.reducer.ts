import { createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import {
	adminSymbolUpdate,
	adminSymbolUpdateSuccess,
	adminSymbolUpdateFailure,
} from '@app/submodules/admin/submodules/admin-symbol/actions/admin-symbol-update.actions';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';

export const adminSymbolFeatureKey = 'adminSymbol';

export interface AdminSymbolState {
	symbolsUpdate: ServerItem<any>;
}

export const initialState: AdminSymbolState = {} as AdminSymbolState;

export const reducer = createReducer(
	initialState,
	on(adminSymbolUpdate, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolsUpdate)
	),
	on(adminSymbolUpdateSuccess, (state, req) =>
		serverCallSuccess(state, { payload: req }, () => state.symbolsUpdate)
	),
	on(adminSymbolUpdateFailure, (state, req) =>
		serverCallFailure(state, { payload: req }, () => state.symbolsUpdate)
	)
);
