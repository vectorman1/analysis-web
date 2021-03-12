import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUser from '@app/public/submodules/user/reducers/user.reducer';
import * as fromSymbol from '@app/submodules/symbol/reducers/symbol.reducer';
import * as fromDashboard from '@app/submodules/dashboard/reducers/dashboard.reducer';

import { environment } from '@env/environment';

export const stateFeatureKey = 'state';

export interface AppState {
	user: fromUser.IdentityState;
	dashboard: fromDashboard.DashboardState;
	symbol: fromSymbol.SymbolState;
}

export const reducers: ActionReducerMap<AppState> = {
	user: fromUser.reducer,
	symbol: fromSymbol.reducer,
	dashboard: fromDashboard.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
