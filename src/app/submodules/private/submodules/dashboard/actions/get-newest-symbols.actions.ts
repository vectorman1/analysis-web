import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import { PagedList } from '@app/root/models/paged-list';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { PagedRequest } from '@app/shared/models/request';

export const DASHBOARD_GET_NEWEST_SYMBOLS = '[Dashboard] Get Newest Symbols';
export const DASHBOARD_GET_NEWEST_SYMBOLS_SUCCESS =
	'[Symbols] Get Symbol Details Success';
export const DASHBOARD_GET_NEWEST_SYMBOLS_FAILURE =
	'[Symbols] Get Symbol Details Failure';

export const dashboardGetNewestSymbols = createAction(
	DASHBOARD_GET_NEWEST_SYMBOLS,
	props<PagedRequest>()
);

export const dashboardGetNewestSymbolsSuccess = createAction(
	DASHBOARD_GET_NEWEST_SYMBOLS_SUCCESS,
	props<PagedList<TradingSymbol>>()
);

export const dashboardGetNewestSymbolsFailure = createAction(
	DASHBOARD_GET_NEWEST_SYMBOLS_FAILURE,
	props<ServerError>()
);
