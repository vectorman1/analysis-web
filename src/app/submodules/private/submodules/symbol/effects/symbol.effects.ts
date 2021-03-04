import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, exhaustMap, map } from 'rxjs/operators';
import { PagedRequest, SymbolDetailsRequest } from '@app/shared/models/request';
import { TradingSymbol } from '@app/shared/models/tradingSymbol';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { SymbolsService } from '@app/submodules/symbol/services/symbols.service';
import { PagedList } from '@app/root/models/paged-list';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import {
	SYMBOLS_GET_DETAILS,
	symbolsGetDetailsFailure,
	symbolsGetDetailsSuccess,
} from '@app/submodules/symbol/actions/symbol-get-details.actions';
import { SymbolDetails } from '@app/shared/models/symbol-details';
import {
	SYMBOLS_GET_PAGED,
	symbolsGetPagedFailure,
	symbolsGetPagedSuccess,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';

@Injectable()
export class SymbolEffects {
	symbols$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_PAGED),
			debounceTime(APP_CONSTANTS.REQUEST_THROTTLE_MS),
			exhaustMap((req: PagedRequest) =>
				this.symbolsService.getPaged(req).pipe(
					map((response: PagedList<TradingSymbol>) =>
						symbolsGetPagedSuccess(response)
					),
					catchError((err: ServerError) =>
						of(symbolsGetPagedFailure(err))
					)
				)
			)
		)
	);

	symbolDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_DETAILS),
			debounceTime(APP_CONSTANTS.REQUEST_THROTTLE_MS),
			exhaustMap((req: SymbolDetailsRequest) =>
				this.symbolsService.getDetails(req.uuid).pipe(
					map((response: SymbolDetails) =>
						symbolsGetDetailsSuccess(response)
					),
					catchError((err: ServerError) =>
						of(symbolsGetDetailsFailure(err))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private symbolsService: SymbolsService
	) {}
}
