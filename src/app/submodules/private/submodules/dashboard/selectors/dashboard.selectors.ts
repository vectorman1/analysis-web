import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import {
	dashboardFeatureKey,
	DashboardState,
} from '@app/submodules/dashboard/reducers/dashboard.reducer';

const selectDashboard = createFeatureSelector<AppState, DashboardState>(
	dashboardFeatureKey
);

export const selectNewestSymbols = createSelector(
	selectDashboard,
	(state: DashboardState) => state.newestSymbols
);
