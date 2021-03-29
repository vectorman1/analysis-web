import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';
import { SymbolOverviewRequest } from '@app/submodules/symbol/models/symbol-overview-request';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';

export const SYMBOLS_GET_OVERVIEW = '[Symbols] Get Symbol Details';
export const SYMBOLS_GET_OVERVIEW_SUCCESS =
	'[Symbols] Get Symbol Details Success';
export const SYMBOLS_GET_OVERVIEW_FAILURE =
	'[Symbols] Get Symbol Details Failure';
export const SYMBOLS_GET_OVERVIEW_RESET = '[Symbols] Get Symbol Details Reset';

export const symbolsGetOverview = createAction(
	SYMBOLS_GET_OVERVIEW,
	props<SymbolOverviewRequest>()
);

export const symbolsGetOverviewSuccess = createAction(
	SYMBOLS_GET_OVERVIEW_SUCCESS,
	props<SymbolOverview>()
);

export const symbolsGetOverviewFailure = createAction(
	SYMBOLS_GET_OVERVIEW_FAILURE,
	props<ServerError>()
);

export const symbolsGetOverviewReset = createAction(SYMBOLS_GET_OVERVIEW_RESET);
