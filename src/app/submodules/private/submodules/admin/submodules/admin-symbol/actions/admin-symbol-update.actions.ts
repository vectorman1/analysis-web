import { createAction, props } from '@ngrx/store';
import { ServerError } from '@app/shared/models/server-error';

export const ADMIN_SYMBOL_UPDATE = '[AdminSymbol] Update Symbols';
export const ADMIN_SYMBOL_UPDATE_SUCCESS =
	'[AdminSymbol] Update Symbols Success';
export const ADMIN_SYMBOL_UPDATE_FAILURE = '[AdminSymbol] Update Symbols Error';

export const adminSymbolUpdate = createAction(ADMIN_SYMBOL_UPDATE);

export const adminSymbolUpdateSuccess = createAction(
	ADMIN_SYMBOL_UPDATE_SUCCESS
);

export const adminSymbolUpdateFailure = createAction(
	ADMIN_SYMBOL_UPDATE_FAILURE,
	props<ServerError>()
);
