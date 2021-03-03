import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromIdentity from '@app/identity/reducers/identity.reducer';
import * as fromSymbol from '@app/submodules/symbol/reducers/symbol.reducer';

import { environment } from '@env/environment';

export const stateFeatureKey = 'state';

export interface AppState {
	identity: fromIdentity.IdentityState;
	symbol: fromSymbol.SymbolState;
}

export const reducers: ActionReducerMap<AppState> = {
	identity: fromIdentity.reducer,
	symbol: fromSymbol.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
