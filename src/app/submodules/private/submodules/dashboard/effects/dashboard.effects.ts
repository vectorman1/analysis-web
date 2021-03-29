import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SymbolService } from '@app/submodules/symbol/services/symbol.service';
import {
	dashboardGetNewestSymbols,
	dashboardGetNewestSymbolsSuccess,
} from '@app/submodules/dashboard/actions/get-newest-symbols.actions';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { of } from 'rxjs';
import { PagedRequest } from '@app/shared/models/request';

@Injectable()
export class DashboardEffects {
	newestSymbols$ = createEffect(() =>
		this.actions$.pipe(
			ofType(dashboardGetNewestSymbols),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			switchMap((req: PagedRequest) =>
				this.symbolService.getPaged(req).pipe(
					map((list) => dashboardGetNewestSymbolsSuccess(list)),
					catchError((err) => of(err))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private symbolService: SymbolService
	) {}
}
