import { createAction, props } from '@ngrx/store';
import { PagedRequest } from '../../../../shared/models/request';
import { ServerError } from '../../../../shared/models/server-error';
import { TradingSymbol, TradingSymbols } from '../models/tradingSymbol';
import { PagedList } from '@app/root/models/paged-list';

export const SYMBOLS_GET_PAGED = '[Symbols] Get Paged Symbols';
export const SYMBOLS_GET_PAGED_SUCCESS = '[Symbols] Get Paged Symbols Success';
export const SYMBOLS_GET_PAGED_FAILURE = '[Symbols] Get Paged Symbols Failure';

export const symbolsGetPaged = createAction(
	SYMBOLS_GET_PAGED,
	props<PagedRequest>()
);

export const symbolsGetPagedSuccess = createAction(
	SYMBOLS_GET_PAGED_SUCCESS,
	props<PagedList<TradingSymbol>>()
);

export const symbolsGetPagedFailure = createAction(
	SYMBOLS_GET_PAGED_FAILURE,
	props<ServerError>()
);
