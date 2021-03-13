import { createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { TradingSymbol } from '@app/submodules/symbol/models/tradingSymbol';
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
	symbolsGetDetails,
	symbolsGetDetailsFailure,
	symbolsGetDetailsSuccess,
} from '@app/submodules/symbol/actions/symbol-get-details.actions';
import { SymbolDetails } from '@app/submodules/symbol/models/symbol-details';
import { SymbolChart } from '@app/submodules/symbol/models/symbol-chart';
import {
	symbolsGetChartFailure,
	symbolsGetChartReset,
	symbolsGetChartSuccess,
} from '../actions/symbol-get-chart.actions';
import { symbolsGetChart } from '../actions/symbol-get-chart.actions';

export const symbolFeatureKey = 'symbol';

export interface SymbolState {
	symbols: ServerItem<PagedList<TradingSymbol>>;
	symbolDetails: ServerItem<SymbolDetails>;
	symbolChart: ServerItem<SymbolChart>;
}

export const initialState: SymbolState = <SymbolState>{};

export const reducer = createReducer(
	initialState,
	on(symbolsGetPaged, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbols)
	),
	on(symbolsGetPagedSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbols)
	),
	on(symbolsGetPagedFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbols)
	),

	on(symbolsGetDetails, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolDetails)
	),
	on(symbolsGetDetailsSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbolDetails)
	),
	on(symbolsGetDetailsFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbolDetails)
	),

	on(symbolsGetChart, (state, req) =>
		serverCallStart(state, { payload: req }, () => state.symbolChart)
	),
	on(symbolsGetChartSuccess, (state, res) =>
		serverCallSuccess(state, { payload: res }, () => state.symbolChart)
	),
	on(symbolsGetChartFailure, (state, err) =>
		serverCallFailure(state, { payload: err }, () => state.symbolChart)
	)
);
