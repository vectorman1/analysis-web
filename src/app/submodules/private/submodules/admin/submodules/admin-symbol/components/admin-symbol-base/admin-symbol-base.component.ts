import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { adminSymbolUpdate } from '@app/submodules/admin/submodules/admin-symbol/actions/admin-symbol-update.actions';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { selectAdminSymbolsUpdate } from '@app/submodules/admin/submodules/admin-symbol/selectors/admin-symbol.selectors';
import { ServerItem } from '@app/root/models/server-item.model';
import { mapIsLoading } from '@app/root/observable.helpers';

@Component({
	selector: 'app-admin-symbol-base',
	templateUrl: './admin-symbol-base.component.html',
	styleUrls: ['./admin-symbol-base.component.scss'],
})
export class AdminSymbolBaseComponent implements OnDestroy {
	subscriptions = new Array<Subscription>();

	symbolsUpdate$ = new Observable<ServerItem<any>>();

	isUpdateLoading = new BehaviorSubject<boolean>(false);

	constructor(private store: Store<AppState>) {
		this.symbolsUpdate$ = this.store.select(selectAdminSymbolsUpdate);

		this.subscriptions.push(
			this.symbolsUpdate$
				.pipe(mapIsLoading)
				.subscribe(this.isUpdateLoading)
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((x) => x.unsubscribe());
	}

	updateSymbols() {
		this.store.dispatch(adminSymbolUpdate());
	}
}
