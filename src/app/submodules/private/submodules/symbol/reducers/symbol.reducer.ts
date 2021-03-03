import { Action, createReducer, on } from '@ngrx/store';
import { ServerItem } from '@app/root/models/server-item.model';
import { TradingSymbol } from '@app/shared/models/tradingSymbol';
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
import { PagedRequest } from '@app/shared/models/request';
import { ServerError } from '@app/shared/models/server-error';
import { PagedList } from '@app/root/models/paged-list';

export const symbolFeatureKey = 'symbol';

export interface SymbolState {
	symbols: ServerItem<PagedList<TradingSymbol>>;
}

export const initialState: SymbolState = <SymbolState>{};

export const reducer = createReducer(
	initialState,
	on(symbolsGetPaged, (state, { filter }) =>
		serverCallStart(
			state,
			{ payload: new PagedRequest(filter) },
			() => state.symbols
		)
	),
	on(symbolsGetPagedSuccess, (state, { totalItems, items }) => {
		return serverCallSuccess(
			state,
			{ payload: { items: items, totalItems: totalItems } },
			() => state.symbols
		);
	}),
	on(symbolsGetPagedFailure, (state, { details, code, message }) =>
		serverCallFailure(
			state,
			{ payload: new ServerError(code, message, details) },
			() => state.symbols
		)
	)
);
