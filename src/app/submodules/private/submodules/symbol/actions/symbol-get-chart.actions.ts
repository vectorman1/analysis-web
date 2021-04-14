import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import {
	HistoryChart,
	HistoryChartRequest,
} from '@app/submodules/private-common/models/history-chart';

export const SYMBOLS_GET_CHART = '[Symbols] Get Symbol Chart';
export const SYMBOLS_GET_CHART_SUCCESS = '[Symbols] Get Symbol Chart Success';
export const SYMBOLS_GET_CHART_FAILURE = '[Symbols] Get Symbol Chart Failure';
export const SYMBOLS_GET_CHART_RESET = '[Symbols] Get Symbol Chart Reset';

export const symbolsGetChart = createAction(
	SYMBOLS_GET_CHART,
	props<HistoryChartRequest>()
);

export const symbolsGetChartSuccess = createAction(
	SYMBOLS_GET_CHART_SUCCESS,
	props<HistoryChart>()
);

export const symbolsGetChartFailure = createAction(
	SYMBOLS_GET_CHART_FAILURE,
	props<ServerError>()
);

export const symbolsGetChartReset = createAction(SYMBOLS_GET_CHART_RESET);
