import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SymbolService } from '@app/submodules/private-common/services/symbol.service';
import {
	ADMIN_SYMBOL_UPDATE,
	adminSymbolUpdateFailure,
	adminSymbolUpdateSuccess,
} from '@app/submodules/admin/submodules/admin-symbol/actions/admin-symbol-update.actions';
import { catchError, debounceTime, exhaustMap, map } from 'rxjs/operators';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';

@Injectable()
export class AdminSymbolEffects {
	symbolsUpdate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ADMIN_SYMBOL_UPDATE),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap(() =>
				this.symbolService.update().pipe(
					map(() => adminSymbolUpdateSuccess()),
					catchError((err: ServerError) =>
						of(adminSymbolUpdateFailure(err))
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private symbolService: SymbolService
	) {}
}
