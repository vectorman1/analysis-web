import { createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import {
	symbolsGetPaged,
	symbolsGetPagedFailure,
	symbolsGetPagedSuccess,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import {
	serverCallFailure,
	serverCallStart,
	serverCallSuccess,
} from '@app/root/server-calls.helpers';
import { PagedList } from '@app/root/models/paged-list';
import {
	symbolsGetOverview,
	symbolsGetOverviewFailure,
	symbolsGetOverviewReset,
	symbolsGetOverviewSuccess,
} from '@app/submodules/symbol/actions/symbol-get-overview.actions';
import { SymbolChart } from '@app/submodules/symbol/models/symbol-chart';
import {
	symbolsGetChartFailure,
	symbolsGetChartReset,
	symbolsGetChartSuccess,
} from '../actions/symbol-get-chart.actions';
import { symbolsGetChart } from '../actions/symbol-get-chart.actions';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';
import {
	symbolsGet,
	symbolsGetReset,
	symbolsGetSuccess,
} from '../actions/symbol-get.actions';
import { symbolsGetFailure } from '../actions/symbol-get.actions';

export const symbolFeatureKey = 'symbol';

export interface SymbolState {
	symbols: ServerItem<PagedList<TradingSymbol>>;
	symbolItem: ServerItem<TradingSymbol>;
	symbolOverview: ServerItem<SymbolOverview>;
	symbolChart: ServerItem<SymbolChart>;
}

export const initialState: SymbolState = <SymbolState>{};

export const reducer = createReducer(
	initialState,

	on(symbolsGet, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolItem)
	),
	on(symbolsGetSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbolItem)
	),
	on(symbolsGetFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbolItem)
	),
	on(symbolsGetReset, (state) => {
		state.symbolItem = initialState.symbolItem;
		return state;
	}),

	on(symbolsGetPaged, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbols)
	),
	on(symbolsGetPagedSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbols)
	),
	on(symbolsGetPagedFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbols)
	),

	on(symbolsGetOverview, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolOverview)
	),
	on(symbolsGetOverviewSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbolOverview)
	),
	on(symbolsGetOverviewFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbolOverview)
	),
	on(symbolsGetOverviewReset, (state) => {
		state.symbolOverview = initialState.symbolOverview;
		return state;
	}),

	on(symbolsGetChart, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolChart)
	),
	on(symbolsGetChartSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbolChart)
	),
	on(symbolsGetChartFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbolChart)
	),
	on(symbolsGetChartReset, (state) => {
		state.symbolChart = initialState.symbolChart;
		return state;
	})
);
