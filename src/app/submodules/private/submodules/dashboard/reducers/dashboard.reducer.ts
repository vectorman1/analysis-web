import { createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { PagedList } from '@app/root/models/paged-list';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';
import {
	dashboardGetNewestSymbols,
	dashboardGetNewestSymbolsFailure,
	dashboardGetNewestSymbolsSuccess,
} from '../actions/get-newest-symbols.actions';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
	newestSymbols: ServerItem<PagedList<TradingSymbol>>;
	symbolsUnderMA120: ServerItem<PagedList<TradingSymbol>>;
	symbolsUnderRSI30: ServerItem<PagedList<any>>;
}

export const initialState: DashboardState = <DashboardState>{};

export const reducer = createReducer(
	initialState,
	on(dashboardGetNewestSymbols, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.newestSymbols)
	),
	on(dashboardGetNewestSymbolsSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.newestSymbols)
	),
	on(dashboardGetNewestSymbolsFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.newestSymbols)
	)
);
