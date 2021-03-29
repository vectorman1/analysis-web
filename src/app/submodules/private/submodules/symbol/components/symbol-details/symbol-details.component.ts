import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { selectSymbolItem } from '@app/submodules/symbol/selectors/symbol.selectors';
import { ServerItem } from '@app/root/models/server-item.model';
import { mapIsLoading, mapValue } from '@app/root/observable.helpers';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { symbolsGet } from '@app/submodules/symbol/actions/symbol-get.actions';
import { SymbolRequest } from '@app/submodules/symbol/models/symbol-request';

@Component({
	selector: 'app-symbol-details',
	templateUrl: './symbol-details.component.html',
	styleUrls: ['./symbol-details.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolDetailsComponent
	implements OnInit, OnDestroy, AfterViewInit {
	uuid!: string;

	subscriptions = Array<Subscription>();

	symbolItemSubject = new ReplaySubject<TradingSymbol>();
	isLoadingSubject = new BehaviorSubject<boolean>(true);

	private symbolItem$: Observable<ServerItem<TradingSymbol>>;

	constructor(private route: ActivatedRoute, private store: Store<AppState>) {
		this.symbolItem$ = this.store.select(selectSymbolItem);
		this.subscriptions.push(
			this.symbolItem$.pipe(mapValue).subscribe(this.symbolItemSubject),
			this.symbolItem$.pipe(mapIsLoading).subscribe(this.isLoadingSubject)
		);
	}

	ngOnInit(): void {
		this.uuid = this.route.snapshot.params['uuid'];
		this.store.dispatch(symbolsGet(new SymbolRequest(this.uuid)));
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {
		this.subscriptions.forEach((s) => s.unsubscribe());

		this.symbolItemSubject.complete();
		this.isLoadingSubject.complete();
	}
}
