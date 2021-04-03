import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUser from '@app/public/submodules/user/reducers/user.reducer';
import * as fromSymbol from '@app/submodules/symbol/reducers/symbol.reducer';
import * as fromDashboard from '@app/submodules/dashboard/reducers/dashboard.reducer';
import * as fromAdminUser from '@app/submodules/admin/submodules/admin-user/reducers/admin-user.reducer';
import * as fromAdminSymbol from '@app/submodules/admin/submodules/admin-symbol/reducers/admin-symbol.reducer';

import { environment } from '@env/environment';

export const stateFeatureKey = 'state';

export interface AppState {
	user: fromUser.IdentityState;
	dashboard: fromDashboard.DashboardState;
	symbol: fromSymbol.SymbolState;
	adminUser: fromAdminUser.AdminUserState;
	adminSymbol: fromAdminSymbol.AdminSymbolState;
}

export const reducers: ActionReducerMap<AppState> = {
	user: fromUser.reducer,
	symbol: fromSymbol.reducer,
	dashboard: fromDashboard.reducer,
	adminUser: fromAdminUser.reducer,
	adminSymbol: fromAdminSymbol.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
