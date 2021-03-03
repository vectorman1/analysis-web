import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	SYMBOLS_GET_PAGED,
	SYMBOLS_GET_PAGED_FAILURE,
	SYMBOLS_GET_PAGED_SUCCESS,
	symbolsGetPagedFailure,
	symbolsGetPagedSuccess,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { PagedRequest } from '@app/shared/models/request';
import {
	TradingSymbol,
	TradingSymbols,
} from '@app/shared/models/tradingSymbol';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { SymbolsService } from '@app/submodules/symbol/services/symbols.service';
import { PagedList } from '@app/root/models/paged-list';

@Injectable()
export class SymbolEffects {
	symbols$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_PAGED),
			switchMap((req: PagedRequest) =>
				this.symbolsService.getPaged(req).pipe(
					map((response: PagedList<TradingSymbol>) =>
						symbolsGetPagedSuccess({
							items: response.items,
							totalItems: response.totalItems,
						})
					),
					catchError((err: ServerError) =>
						of(
							symbolsGetPagedFailure({
								details: err.details,
								message: err.message,
								code: err.code,
							})
						)
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
