import { createAction, props } from '@ngrx/store';
import {
	SymbolDetails,
	SymbolDetailsRequest,
} from '@app/submodules/symbol/models/symbol-details';
import { ServerError } from '@app/shared/models/server-error';
import {
	SymbolChart,
	SymbolChartRequest,
} from '@app/submodules/symbol/models/symbol-chart';

export const SYMBOLS_GET_CHART = '[Symbols] Get Symbol Chart';
export const SYMBOLS_GET_CHART_SUCCESS = '[Symbols] Get Symbol Chart Success';
export const SYMBOLS_GET_CHART_FAILURE = '[Symbols] Get Symbol Chart Failure';
export const SYMBOLS_GET_CHART_RESET = '[Symbols] Get Symbol Chart Failure';

export const symbolsGetChart = createAction(
	SYMBOLS_GET_CHART,
	props<SymbolChartRequest>()
);

export const symbolsGetChartSuccess = createAction(
	SYMBOLS_GET_CHART_SUCCESS,
	props<SymbolChart>()
);

export const symbolsGetChartFailure = createAction(
	SYMBOLS_GET_CHART_FAILURE,
	props<ServerError>()
);

export const symbolsGetChartReset = createAction(SYMBOLS_GET_CHART_RESET);
