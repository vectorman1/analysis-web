import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUser from '@app/public/submodules/user/reducers/user.reducer';
import * as fromSymbol from '@app/submodules/symbol/reducers/symbol.reducer';

import { environment } from '@env/environment';

export const stateFeatureKey = 'state';

export interface AppState {
	user: fromUser.IdentityState;
	symbol: fromSymbol.SymbolState;
}

export const reducers: ActionReducerMap<AppState> = {
	user: fromUser.reducer,
	symbol: fromSymbol.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
