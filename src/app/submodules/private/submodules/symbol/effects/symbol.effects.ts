import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	catchError,
	debounceTime,
	exhaustMap,
	map,
	switchMap,
} from 'rxjs/operators';
import { PagedRequest } from '@app/shared/models/request';
import { TradingSymbol } from '@app/submodules/symbol/models/tradingSymbol';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { PagedList } from '@app/root/models/paged-list';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import {
	SYMBOLS_GET_DETAILS,
	symbolsGetDetailsFailure,
	symbolsGetDetailsSuccess,
} from '@app/submodules/symbol/actions/symbol-get-details.actions';
import {
	SymbolDetails,
	SymbolDetailsRequest,
} from '@app/submodules/symbol/models/symbol-details';
import {
	SYMBOLS_GET_PAGED,
	symbolsGetPagedFailure,
	symbolsGetPagedSuccess,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { SymbolService } from '@app/submodules/symbol/services/symbol.service';
import {
	SYMBOLS_GET_CHART,
	SYMBOLS_GET_CHART_FAILURE,
	symbolsGetChartFailure,
	symbolsGetChartSuccess,
} from '@app/submodules/symbol/actions/symbol-get-chart.actions';
import {
	SymbolChartRequest,
	SymbolChart,
} from '@app/submodules/symbol/models/symbol-chart';

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

	symbolChart$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_CHART),
			debounceTime(APP_CONSTANTS.REQUEST_THROTTLE_MS),
			switchMap((req: SymbolChartRequest) =>
				this.symbolsService.getChart(req).pipe(
					map((response: SymbolChart) =>
						symbolsGetChartSuccess(response)
					),
					catchError((err: ServerError) =>
						of(symbolsGetChartFailure(err))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private symbolsService: SymbolService
	) {}
}
