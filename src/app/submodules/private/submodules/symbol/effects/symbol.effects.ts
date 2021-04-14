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
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import { PagedList } from '@app/root/models/paged-list';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import {
	SYMBOLS_GET_OVERVIEW,
	symbolsGetOverviewFailure,
	symbolsGetOverviewSuccess,
} from '@app/submodules/symbol/actions/symbol-get-overview.actions';
import { SymbolOverviewRequest } from '@app/submodules/symbol/models/symbol-overview-request';
import {
	SYMBOLS_GET_PAGED,
	symbolsGetPagedFailure,
	symbolsGetPagedSuccess,
} from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { SymbolService } from '@app/submodules/private-common/services/symbol.service';
import {
	SYMBOLS_GET_CHART,
	SYMBOLS_GET_CHART_FAILURE,
	symbolsGetChartFailure,
	symbolsGetChartSuccess,
} from '@app/submodules/symbol/actions/symbol-get-chart.actions';
import {
	HistoryChartRequest,
	HistoryChart,
} from '@app/submodules/private-common/models/history-chart';
import {
	SYMBOLS_GET,
	symbolsGetFailure,
	symbolsGetSuccess,
} from '@app/submodules/symbol/actions/symbol-get.actions';
import { SymbolRequest } from '@app/submodules/symbol/models/symbol-request';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';
import { HistoryService } from '@app/submodules/private-common/services/history.service';

@Injectable()
export class SymbolEffects {
	symbol$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: SymbolRequest) =>
				this.symbolsService.get(req.uuid).pipe(
					map(
						(response: TradingSymbol) =>
							symbolsGetSuccess(response),
						catchError((err: ServerError) =>
							of(symbolsGetFailure(err))
						)
					)
				)
			)
		)
	);
	symbolsPaged$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_PAGED),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
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
			ofType(SYMBOLS_GET_OVERVIEW),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: SymbolOverviewRequest) =>
				this.symbolsService.getOverview(req.uuid).pipe(
					map((response: SymbolOverview) =>
						symbolsGetOverviewSuccess(response)
					),
					catchError((err: ServerError) =>
						of(symbolsGetOverviewFailure(err))
					)
				)
			)
		)
	);

	symbolChart$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SYMBOLS_GET_CHART),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			switchMap((req: HistoryChartRequest) =>
				this.historyService.getSymbolChart(req).pipe(
					map((response: HistoryChart) =>
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
		private symbolsService: SymbolService,
		private historyService: HistoryService
	) {}
}
