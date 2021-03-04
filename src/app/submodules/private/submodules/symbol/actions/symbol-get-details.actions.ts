import { createAction, props } from '@ngrx/store';
import { PagedRequest, SymbolDetailsRequest } from '@app/shared/models/request';
import { PagedList } from '@app/root/models/paged-list';
import { TradingSymbol } from '@app/shared/models/tradingSymbol';
import { ServerError } from '@app/shared/models/server-error';
import {
	SYMBOLS_GET_PAGED,
	SYMBOLS_GET_PAGED_FAILURE,
	SYMBOLS_GET_PAGED_SUCCESS,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { SymbolDetails } from '@app/shared/models/symbol-details';

export const SYMBOLS_GET_DETAILS = '[Symbols] Get Symbol Details';
export const SYMBOLS_GET_DETAILS_SUCCESS =
	'[Symbols] Get Symbol Details Success';
export const SYMBOLS_GET_DETAILS_FAILURE =
	'[Symbols] Get Symbol Details Failure';

export const symbolsGetDetails = createAction(
	SYMBOLS_GET_DETAILS,
	props<SymbolDetailsRequest>()
);

export const symbolsGetDetailsSuccess = createAction(
	SYMBOLS_GET_DETAILS_SUCCESS,
	props<SymbolDetails>()
);

export const symbolsGetDetailsFailure = createAction(
	SYMBOLS_GET_DETAILS_FAILURE,
	props<ServerError>()
);
