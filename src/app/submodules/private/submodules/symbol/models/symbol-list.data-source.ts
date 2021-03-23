import { DataSource } from '@angular/cdk/collections';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ServerItem } from '@app/root/models/server-item.model';
import { PagedList } from '@app/root/models/paged-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import * as fromSymbols from '@app/submodules/symbol/selectors/symbol.selectors';
import {
	mapIsLoading,
	mapPageItems,
	mapTotalItems,
	mapValue,
} from '@app/root/observable.helpers';
import { PagedRequest } from '@app/shared/models/request';
import { symbolsGetPaged } from '@app/submodules/symbol/actions/symbol-get-paged.actions';

export class SymbolsListDataSource extends DataSource<TradingSymbol> {
	subscriptions = Array<Subscription>();
	symbolsSubject = new BehaviorSubject<TradingSymbol[]>([]);
	loadingSubject = new BehaviorSubject<boolean>(false);
	totalItemsSubject = new BehaviorSubject<number>(0);

	private symbols$: Observable<ServerItem<PagedList<TradingSymbol>>>;

	data!: TradingSymbol[];
	paginator!: MatPaginator;
	sort!: MatSort;

	constructor(private store: Store<AppState>) {
		super();

		this.symbols$ = this.store.select(fromSymbols.selectSymbolList);
		this.subscriptions.push(
			this.symbols$.pipe(mapIsLoading).subscribe(this.loadingSubject),
			this.symbols$
				.pipe(mapValue)
				.pipe(mapPageItems)
				.subscribe(this.symbolsSubject),
			this.symbols$
				.pipe(mapValue)
				.pipe(mapTotalItems)
				.subscribe(this.totalItemsSubject)
		);
	}

	/**
	 * Connect this data source to the table. The table will only update when
	 * the returned stream emits new items.
	 * @returns A stream of the items to be rendered.
	 */
	connect(): Observable<TradingSymbol[]> {
		return this.symbolsSubject.asObservable();
	}

	getTotalItems(): Observable<number> {
		return this.totalItemsSubject.asObservable();
	}

	getIsLoading(): Observable<boolean> {
		return this.loadingSubject.asObservable();
	}

	/**
	 *  Called when the table is being destroyed. Use this function, to clean up
	 * any open connections or free any held resources that were set up during connect.
	 */
	disconnect(): void {
		this.symbolsSubject.complete();
		this.loadingSubject.complete();
		this.subscriptions.forEach((s) => s.unsubscribe());
	}

	loadSymbols(req: PagedRequest) {
		this.loadingSubject.next(true);
		this.symbolsSubject.next([]);

		this.store.dispatch(symbolsGetPaged(req));
	}
}
