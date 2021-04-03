import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import {
	adminSymbolFeatureKey,
	AdminSymbolState,
} from '@app/submodules/admin/submodules/admin-symbol/reducers/admin-symbol.reducer';

const selectAdminSymbol = createFeatureSelector<AppState, AdminSymbolState>(
	adminSymbolFeatureKey
);

export const selectAdminSymbolsUpdate = createSelector(
	selectAdminSymbol,
	(state: AdminSymbolState) => state.symbolsUpdate
);
