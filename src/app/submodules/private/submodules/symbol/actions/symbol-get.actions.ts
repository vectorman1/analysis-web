import { createAction, props } from '@ngrx/store';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { SymbolRequest } from '@app/submodules/symbol/models/symbol-request';
import { ServerError } from '@app/shared/models/server-error';
import { SYMBOLS_GET_CHART_RESET } from '@app/submodules/symbol/actions/symbol-get-chart.actions';

export const SYMBOLS_GET = '[Symbols] Get Symbol';
export const SYMBOLS_GET_SUCCESS = '[Symbols] Get Symbol Success';
export const SYMBOLS_GET_FAILURE = '[Symbols] Get Symbol Failure';
export const SYMBOLS_GET_RESET = '[Symbols] Get Symbol Reset';

export const symbolsGet = createAction(SYMBOLS_GET, props<SymbolRequest>());

export const symbolsGetSuccess = createAction(
	SYMBOLS_GET_SUCCESS,
	props<TradingSymbol>()
);

export const symbolsGetFailure = createAction(
	SYMBOLS_GET_FAILURE,
	props<ServerError>()
);

export const symbolsGetReset = createAction(SYMBOLS_GET_RESET);
